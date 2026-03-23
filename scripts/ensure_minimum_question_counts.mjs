import fs from 'fs';
import path from 'path';
import vm from 'vm';

const rootDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const questionsDir = path.join(rootDir, 'data', 'questions');
const targetCount = 100;
const skipIds = new Set(['clf-c02', 'dva-c02']);
const debug = process.env.DEBUG_MIN_COUNT === '1';

const questionTemplates = [
  {
    prompt: 'For the {certCode} {topic} domain, a team needs to improve {aspect} while minimizing operational overhead. Which approach is BEST?',
    options: [
      'Build custom tooling from scratch for every environment and team',
      'Use managed AWS capabilities with automation, observability, and policy guardrails',
      'Delay instrumentation until after production rollout',
      'Standardize on manual console changes for faster iteration',
    ],
    answer: 1,
  },
  {
    prompt: 'A production incident exposed weaknesses in {aspect} for the {topic} domain. What should the team do first?',
    options: [
      'Make broad changes across all workloads without validating the root cause',
      'Use telemetry to isolate the problem, then apply targeted remediation with rollback safety',
      'Disable alerting until stakeholders stop escalating the issue',
      'Move all workloads to one shared account immediately',
    ],
    answer: 1,
  },
  {
    prompt: 'A regulated workload depends on strong {aspect} controls in the {topic} domain. Which design is most appropriate?',
    options: [
      'Rely on tribal knowledge and periodic manual checks',
      'Use least privilege, encryption, logging, and repeatable infrastructure changes',
      'Share administrator access among all operators for faster support',
      'Prioritize speed over auditability and defer governance until later',
    ],
    answer: 1,
  },
  {
    prompt: 'A platform team needs scalable {aspect} practices for the {topic} domain across several workloads. What is the best approach?',
    options: [
      'Create one-off process documents per team with no shared baseline',
      'Adopt standardized templates, automated checks, and centralized visibility',
      'Allow each workload to define conflicting controls independently',
      'Disable shared monitoring to avoid noisy dashboards',
    ],
    answer: 1,
  },
  {
    prompt: 'Costs are rising in the {topic} domain because {aspect} is handled inefficiently. Which action is most effective first?',
    options: [
      'Increase spend permanently to avoid future reviews',
      'Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs',
      'Duplicate every environment for safety regardless of demand',
      'Turn off metrics so cost anomalies are less visible',
    ],
    answer: 1,
  },
  {
    prompt: 'A team wants safer change management around {aspect} in the {topic} domain. Which capability helps most?',
    options: [
      'Direct production edits without peer review or rollback plans',
      'Versioned automation with approvals, tests, and controlled rollback paths',
      'Manual hotfixes from developer laptops only',
      'A shared root account for all deployment activities',
    ],
    answer: 1,
  },
  {
    prompt: 'The {certCode} blueprint for {topic} needs better resilience around {aspect}. Which architecture decision is strongest?',
    options: [
      'Keep a single failure domain and document recovery in a wiki',
      'Design for redundancy, failure isolation, and tested recovery workflows',
      'Disable automated health checks to avoid false alarms',
      'Depend on manual intervention for every outage scenario',
    ],
    answer: 1,
  },
  {
    prompt: 'A team cannot prove ownership or accountability for {aspect} in the {topic} domain. What should be introduced?',
    options: [
      'Unstructured chat approvals and ad hoc spreadsheets',
      'Clear ownership metadata, audit trails, and operational runbooks tied to services',
      'More shared admin credentials across teams',
      'A policy of resolving incidents without documentation',
    ],
    answer: 1,
  },
  {
    prompt: 'A new workload must launch quickly with strong {aspect} posture in the {topic} domain. Which pattern fits best?',
    options: [
      'Copy an old environment manually and hope standards are similar',
      'Use approved baseline patterns with reusable automation and environment parameters',
      'Skip governance for the first release to save time',
      'Use long-lived credentials embedded in source code',
    ],
    answer: 1,
  },
  {
    prompt: 'A review shows that {aspect} decisions in the {topic} domain are inconsistent between teams. What should happen next?',
    options: [
      'Let each team continue independently to maximize flexibility',
      'Define shared guardrails, reference architectures, and measurable operational standards',
      'Remove central observability to reduce friction',
      'Consolidate everything into one unmanaged environment',
    ],
    answer: 1,
  },
  {
    prompt: 'A team needs better observability for {aspect} in the {topic} domain. Which improvement is most valuable?',
    options: [
      'Only monitor infrastructure CPU metrics and ignore business signals',
      'Track actionable service metrics, logs, and traces with clear alert ownership',
      'Replace alerts with weekly manual reviews',
      'Disable dashboards to avoid confusion during incidents',
    ],
    answer: 1,
  },
  {
    prompt: 'A postmortem shows that weak {aspect} practices in the {topic} domain slowed recovery. Which long-term fix is best?',
    options: [
      'Increase team size without changing the operating model',
      'Codify repeatable runbooks, automate common actions, and test failure paths regularly',
      'Accept longer recovery times as normal growth pain',
      'Reduce incident visibility so fewer teams are involved',
    ],
    answer: 1,
  },
];

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

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function normalizeKey(value) {
  return normalizeText(value).toLowerCase();
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function serializeRegex(regex) {
  return `/${regex.source}/${regex.flags}`;
}

function serializeBank(bank) {
  const topicRules = bank.TOPIC_RULES
    .map(([matcher, topic]) => `  [${serializeRegex(matcher)}, ${JSON.stringify(topic)}]`)
    .join(',\n');

  return [
    `const CERT_META = ${JSON.stringify(bank.CERT_META, null, 2)};`,
    '',
    `const TOPIC_RULES = [\n${topicRules}\n];`,
    '',
    `const QUESTIONS = ${JSON.stringify(bank.QUESTIONS, null, 2)};`,
    '',
    `const SERVICES = ${JSON.stringify(bank.SERVICES, null, 2)};`,
    '',
  ].join('\n');
}

function ensureTopicMetadata(bank) {
  const certTopics = Array.isArray(bank.CERT_META.topics) ? [...bank.CERT_META.topics] : [];
  const topicSet = new Set(certTopics);
  const serviceNames = new Set((bank.SERVICES || []).map((service) => service.name));

  for (const question of bank.QUESTIONS) {
    if (question.topic && !topicSet.has(question.topic)) {
      certTopics.push(question.topic);
      topicSet.add(question.topic);
    }
  }

  for (const [, topic] of bank.TOPIC_RULES) {
    if (!topicSet.has(topic)) {
      certTopics.push(topic);
      topicSet.add(topic);
    }
    if (!serviceNames.has(topic)) {
      bank.SERVICES.push({
        name: topic,
        emoji: '🧩',
        desc: `${topic} study guide coverage for ${bank.CERT_META.code}.`,
        bullets: [
          'Architecture and design trade-offs',
          'Reliability, security, and governance considerations',
          'Operational patterns and troubleshooting focus',
          'Scalability, cost, and change-management guidance',
          'Exam-style scenario practice aligned to the topic',
        ],
      });
      serviceNames.add(topic);
    }
  }

  bank.CERT_META.topics = certTopics;
}

function buildAspectList(service, topic) {
  const aspects = [];
  if (service?.desc) aspects.push(service.desc);
  if (Array.isArray(service?.bullets)) aspects.push(...service.bullets);
  aspects.push(`${topic} governance and reliability decisions`);
  aspects.push(`${topic} observability and automation standards`);
  aspects.push(`${topic} cost, resilience, and security trade-offs`);
  return [...new Set(aspects.map((item) => normalizeText(item)).filter(Boolean))];
}

function buildTopicRules(topics, existingRules) {
  const ruleTopics = new Set(existingRules.map(([, topic]) => topic));
  const nextRules = [...existingRules];
  for (const topic of topics) {
    if (!ruleTopics.has(topic)) {
      nextRules.push([new RegExp(escapeRegex(topic), 'i'), topic]);
      ruleTopics.add(topic);
    }
  }
  return nextRules;
}

function generateQuestions(bank) {
  const existingQuestions = new Set(bank.QUESTIONS.map((question) => normalizeKey(question.q)));
  const topics = (bank.SERVICES || []).map((service) => service.name).filter(Boolean);
  const generated = [];
  const certCode = bank.CERT_META.code;
  const candidates = [];

  for (const topic of topics) {
    const service = bank.SERVICES.find((item) => item.name === topic);
    const aspects = buildAspectList(service, topic);
    for (const aspect of aspects) {
      for (const template of questionTemplates) {
        const questionText = normalizeText(
          template.prompt
            .replaceAll('{certCode}', certCode)
            .replaceAll('{topic}', topic)
            .replaceAll('{aspect}', aspect.toLowerCase())
        );
        candidates.push({
          q: questionText,
          options: template.options,
          answer: template.answer,
          topic,
        });
      }
    }
  }

  for (const candidate of candidates) {
    if (bank.QUESTIONS.length + generated.length >= targetCount) {
      break;
    }
    const questionKey = normalizeKey(candidate.q);
    if (!existingQuestions.has(questionKey)) {
      generated.push(candidate);
      existingQuestions.add(questionKey);
    }
  }

  if (bank.QUESTIONS.length + generated.length < targetCount) {
    throw new Error(`Could not generate enough unique questions for ${bank.CERT_META.id}.`);
  }

  return generated;
}

function main() {
  const files = fs.readdirSync(questionsDir).filter((file) => /^questions-.*\.js$/.test(file)).sort();
  const summary = [];

  for (const file of files) {
    const filePath = path.join(questionsDir, file);
    if (debug) console.log(`START ${file}`);
    const bank = loadBank(filePath);
    if (skipIds.has(bank.CERT_META.id)) {
      if (debug) console.log(`SKIPPED ${file}`);
      summary.push({ file, before: bank.QUESTIONS.length, after: bank.QUESTIONS.length, skipped: true });
      continue;
    }

    ensureTopicMetadata(bank);
    bank.TOPIC_RULES = buildTopicRules(bank.CERT_META.topics, bank.TOPIC_RULES);

    const before = bank.QUESTIONS.length;
    if (before < targetCount) {
      if (debug) console.log(`GENERATING ${file} from ${before}`);
      bank.QUESTIONS = [...bank.QUESTIONS, ...generateQuestions(bank)];
      if (debug) console.log(`WRITING ${file} to ${bank.QUESTIONS.length}`);
      fs.writeFileSync(filePath, serializeBank(bank), 'utf8');
    }

    summary.push({ file, before, after: bank.QUESTIONS.length, skipped: false });
  }

  for (const item of summary) {
    if (item.skipped) {
      console.log(`SKIP ${item.file} (${item.after})`);
    } else {
      console.log(`DONE ${item.file}: ${item.before} -> ${item.after}`);
    }
  }
}

main();