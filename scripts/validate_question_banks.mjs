import fs from 'fs';
import path from 'path';
import vm from 'vm';

const rootDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const questionsDir = path.join(rootDir, 'data', 'questions');

function loadBank(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const context = { console: { log() {}, error() {}, warn() {} } };
  vm.createContext(context);
  vm.runInContext(
    `${source}\nthis.__bank = { CERT_META, TOPIC_RULES, QUESTIONS, SERVICES };`,
    context,
    { filename: filePath }
  );
  return context.__bank;
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function normalizeQuestionKey(question) {
  return question.trim().toLowerCase().replace(/\s+/g, ' ');
}

function inferTopic(question, topicRules) {
  if (isNonEmptyString(question?.topic)) {
    return question.topic;
  }

  const questionText = isNonEmptyString(question?.q) ? question.q.toLowerCase() : '';
  for (const [matcher, topic] of topicRules) {
    if (matcher instanceof RegExp && matcher.test(questionText)) {
      return topic;
    }
  }

  const optionsText = Array.isArray(question?.options)
    ? question.options.filter((option) => typeof option === 'string').join(' ').toLowerCase()
    : '';
  for (const [matcher, topic] of topicRules) {
    if (matcher instanceof RegExp && matcher.test(optionsText)) {
      return topic;
    }
  }

  return 'General';
}

function validateBank(fileName, bank) {
  const issues = [];
  const warnings = [];

  if (!bank || typeof bank !== 'object') {
    issues.push('Bank could not be loaded into the validator context.');
    return { issues, warnings };
  }

  const { CERT_META, TOPIC_RULES, QUESTIONS, SERVICES } = bank;

  if (!CERT_META || typeof CERT_META !== 'object') {
    issues.push('Missing CERT_META object.');
  }

  if (!Array.isArray(TOPIC_RULES)) {
    issues.push('Missing TOPIC_RULES array.');
  }

  if (!Array.isArray(SERVICES)) {
    issues.push('Missing SERVICES array.');
  }

  if (!Array.isArray(QUESTIONS)) {
    issues.push('Missing QUESTIONS array.');
    return { issues, warnings };
  }

  if (QUESTIONS.length === 0) {
    issues.push('QUESTIONS array is empty.');
  }

  const metaTopics = new Set(Array.isArray(CERT_META?.topics) ? CERT_META.topics : []);
  const serviceTopics = new Set(Array.isArray(SERVICES) ? SERVICES.map((service) => service?.name).filter(Boolean) : []);
  const seenQuestions = new Map();
  const topicCounts = new Map();
  let inferredTopicCount = 0;
  let generalFallbackCount = 0;
  const topicsMissingFromMeta = new Map();
  const topicsMissingFromServices = new Map();

  QUESTIONS.forEach((question, index) => {
    const label = `Question ${index + 1}`;

    if (!question || typeof question !== 'object') {
      issues.push(`${label}: entry is not an object.`);
      return;
    }

    if (!isNonEmptyString(question.q)) {
      issues.push(`${label}: missing non-empty q string.`);
    }

    if (!Array.isArray(question.options)) {
      issues.push(`${label}: options must be an array.`);
    } else {
      if (question.options.length < 2) {
        issues.push(`${label}: must have at least 2 options.`);
      }

      const normalizedOptions = question.options.map((option) =>
        typeof option === 'string' ? option.trim().toLowerCase() : option
      );
      const uniqueOptions = new Set(normalizedOptions);

      question.options.forEach((option, optionIndex) => {
        if (!isNonEmptyString(option)) {
          issues.push(`${label}: option ${optionIndex + 1} must be a non-empty string.`);
        }
      });

      if (uniqueOptions.size !== normalizedOptions.length) {
        warnings.push(`${label}: contains duplicate option text.`);
      }
    }

    const effectiveTopic = inferTopic(question, Array.isArray(TOPIC_RULES) ? TOPIC_RULES : []);
    topicCounts.set(effectiveTopic, (topicCounts.get(effectiveTopic) || 0) + 1);

    if (!isNonEmptyString(question.topic)) {
      inferredTopicCount += 1;
    }

    if (effectiveTopic === 'General') {
      generalFallbackCount += 1;
    } else {
      if (metaTopics.size > 0 && !metaTopics.has(effectiveTopic)) {
        topicsMissingFromMeta.set(effectiveTopic, (topicsMissingFromMeta.get(effectiveTopic) || 0) + 1);
      }

      if (serviceTopics.size > 0 && !serviceTopics.has(effectiveTopic)) {
        topicsMissingFromServices.set(effectiveTopic, (topicsMissingFromServices.get(effectiveTopic) || 0) + 1);
      }
    }

    const answer = question.answer;
    const optionCount = Array.isArray(question.options) ? question.options.length : 0;

    if (Array.isArray(answer)) {
      if (answer.length === 0) {
        issues.push(`${label}: answer array cannot be empty.`);
      }

      const uniqueAnswers = new Set(answer);
      if (uniqueAnswers.size !== answer.length) {
        issues.push(`${label}: answer array contains duplicate indexes.`);
      }

      answer.forEach((value) => {
        if (!Number.isInteger(value) || value < 0 || value >= optionCount) {
          issues.push(`${label}: answer index ${value} is out of range.`);
        }
      });
    } else if (!Number.isInteger(answer) || answer < 0 || answer >= optionCount) {
      issues.push(`${label}: answer must be an integer index within options.`);
    }

    if (isNonEmptyString(question.q)) {
      const key = normalizeQuestionKey(question.q);
      const firstSeenAt = seenQuestions.get(key);
      if (firstSeenAt) {
        warnings.push(`${label}: duplicate question text (first seen at question ${firstSeenAt}).`);
      } else {
        seenQuestions.set(key, index + 1);
      }
    }
  });

  if (metaTopics.size > 0) {
    for (const topic of metaTopics) {
      if (!topicCounts.has(topic)) {
        warnings.push(`Topic "${topic}" exists in CERT_META.topics but has no questions.`);
      }
    }
  }

  if (Array.isArray(TOPIC_RULES)) {
    for (const rule of TOPIC_RULES) {
      if (!Array.isArray(rule) || rule.length < 2 || !isNonEmptyString(rule[1])) {
        issues.push('TOPIC_RULES entries must be [RegExp, topicName].');
        continue;
      }
      if (metaTopics.size > 0 && !metaTopics.has(rule[1])) {
        warnings.push(`TOPIC_RULES references topic "${rule[1]}" which is not in CERT_META.topics.`);
      }
      if (serviceTopics.size > 0 && !serviceTopics.has(rule[1])) {
        warnings.push(`TOPIC_RULES references topic "${rule[1]}" which is not represented in SERVICES.`);
      }
    }
  }

  if (inferredTopicCount > 0) {
    warnings.push(`${inferredTopicCount} question(s) rely on inferred topics from TOPIC_RULES.`);
  }

  if (generalFallbackCount > 0) {
    warnings.push(`${generalFallbackCount} question(s) fall back to the "General" topic.`);
  }

  for (const [topic, count] of [...topicsMissingFromMeta.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    warnings.push(`Topic "${topic}" is used by ${count} question(s) but is not present in CERT_META.topics.`);
  }

  for (const [topic, count] of [...topicsMissingFromServices.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    warnings.push(`Topic "${topic}" is used by ${count} question(s) but is not represented in SERVICES.`);
  }

  return { issues, warnings };
}

function main() {
  const files = fs
    .readdirSync(questionsDir)
    .filter((file) => /^questions-.*\.js$/.test(file))
    .sort();

  let issueCount = 0;
  let warningCount = 0;

  for (const file of files) {
    const filePath = path.join(questionsDir, file);
    let bank;
    try {
      bank = loadBank(filePath);
    } catch (error) {
      issueCount += 1;
      console.error(`FAIL ${file}`);
      console.error(`  Could not execute file: ${error.message}`);
      continue;
    }

    const { issues, warnings } = validateBank(file, bank);
    issueCount += issues.length;
    warningCount += warnings.length;

    if (issues.length === 0 && warnings.length === 0) {
      console.log(`PASS ${file}`);
      continue;
    }

    console.log(`${issues.length > 0 ? 'FAIL' : 'WARN'} ${file}`);
    for (const issue of issues) {
      console.log(`  ERROR: ${issue}`);
    }
    for (const warning of warnings) {
      console.log(`  WARN: ${warning}`);
    }
  }

  console.log(`\nSummary: ${issueCount} error(s), ${warningCount} warning(s)`);
  if (issueCount > 0) {
    process.exitCode = 1;
  }
}

main();