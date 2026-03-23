import fs from 'fs';

const CERTS = [
  { id: 'clf-c02', code: 'CLF-C02', slug: 'clf-c02', short: 'Cloud Practitioner', full: 'AWS Certified Cloud Practitioner', level: 'Foundational', sub: 'Cloud Practitioner', color: '#64748b', minutes: 90, pass: 70, exam: 65, topics: ['Cloud Concepts', 'Security', 'Technology', 'Billing'] },
  { id: 'aif-c01', code: 'AIF-C01', slug: 'aif-c01', short: 'AI Practitioner', full: 'AWS Certified AI Practitioner', level: 'Foundational', sub: 'AI Practitioner', color: '#64748b', minutes: 90, pass: 70, exam: 65, topics: ['GenAI Basics', 'Model Selection', 'Responsible AI', 'AWS AI Services'] },
  { id: 'dea-c01', code: 'DEA-C01', slug: 'dea-c01', short: 'Data Engineer', full: 'AWS Certified Data Engineer - Associate', level: 'Associate', sub: 'Data Engineer Associate', color: '#06b6d4', minutes: 130, pass: 72, exam: 65, topics: ['Ingestion', 'Transformation', 'Storage', 'Streaming'] },
  { id: 'cloudops-c01', code: 'CloudOps-C01', slug: 'cloudops-c01', short: 'CloudOps Engineer', full: 'AWS Certified SysOps Administrator - Associate', level: 'Associate', sub: 'CloudOps Associate', color: '#06b6d4', minutes: 130, pass: 72, exam: 65, topics: ['Monitoring', 'Automation', 'Resilience', 'Operations'] },
  { id: 'mla-c01', code: 'MLA-C01', slug: 'mla-c01', short: 'Machine Learning Engineer', full: 'AWS Certified Machine Learning Engineer - Associate', level: 'Associate', sub: 'ML Engineer Associate', color: '#06b6d4', minutes: 130, pass: 72, exam: 65, topics: ['Data Prep', 'Training', 'Evaluation', 'MLOps'] },
  { id: 'genai-developer-pro', code: 'GenAI-Dev-Pro', slug: 'genai-dev-pro', short: 'Generative AI Developer', full: 'AWS Certified Generative AI Developer - Professional', level: 'Professional', sub: 'GenAI Developer Professional', color: '#f97316', minutes: 180, pass: 75, exam: 75, topics: ['LLM Apps', 'RAG Systems', 'Evaluation', 'Production Ops'] },
  { id: 'sap-c02', code: 'SAP-C02', slug: 'sap-c02', short: 'Solutions Architect', full: 'AWS Certified Solutions Architect - Professional', level: 'Professional', sub: 'Solutions Architect Professional', color: '#f97316', minutes: 180, pass: 75, exam: 75, topics: ['Enterprise Design', 'Migration', 'Governance', 'Cost Optimization'] },
  { id: 'dop-c02', code: 'DOP-C02', slug: 'dop-c02', short: 'DevOps Engineer', full: 'AWS Certified DevOps Engineer - Professional', level: 'Professional', sub: 'DevOps Engineer Professional', color: '#f97316', minutes: 180, pass: 75, exam: 75, topics: ['CI/CD', 'Observability', 'Reliability', 'Security Automation'] },
  { id: 'ans-c01', code: 'ANS-C01', slug: 'ans-c01', short: 'Advanced Networking', full: 'AWS Certified Advanced Networking - Specialty', level: 'Specialty', sub: 'Advanced Networking Specialty', color: '#ec4899', minutes: 170, pass: 75, exam: 65, topics: ['Hybrid Connectivity', 'Routing', 'DNS', 'Network Security'] },
  { id: 'mls-c01', code: 'MLS-C01', slug: 'mls-c01', short: 'Machine Learning', full: 'AWS Certified Machine Learning - Specialty', level: 'Specialty', sub: 'Machine Learning Specialty', color: '#ec4899', minutes: 180, pass: 75, exam: 65, topics: ['Problem Framing', 'Feature Engineering', 'Model Tuning', 'Deployment'] },
];

function mkServices(topics) {
  return topics.map((t, i) => ({
    name: t,
    emoji: ['📘', '🧩', '⚙️', '🛡️'][i % 4],
    desc: `${t} domain review aligned to exam-style scenarios and architecture decisions.`,
    bullets: [
      `Core ${t.toLowerCase()} patterns and design choices`,
      'High-availability and security considerations',
      'Operational and troubleshooting mindset',
      'Cost and performance trade-offs',
      'Best-practice implementation details',
    ],
  }));
}

function mkRules(topics) {
  return topics.map((t) => `  [/${t.toLowerCase().replace(/[^a-z0-9]+/g, '|')}/i, '${t}']`).join(',\n');
}

function mkQuestions(topics) {
  const questions = [];
  for (const topic of topics) {
    questions.push({
      q: `A team needs to improve outcomes in the ${topic} domain with the least operational overhead. Which approach is best?`,
      options: [
        'Build custom tooling from scratch for every workload',
        `Use managed AWS patterns and controls specific to ${topic}`,
        'Disable monitoring to reduce complexity',
        'Use one large server for all environments',
      ],
      answer: 1,
      topic,
    });
    questions.push({
      q: `Which statement about ${topic} is MOST accurate for exam-style architecture decisions?`,
      options: [
        `${topic} is mostly unrelated to reliability and security`,
        `${topic} requires balancing reliability, cost, security, and performance`,
        `${topic} should avoid managed services`,
        `${topic} only matters in single-account environments`,
      ],
      answer: 1,
      topic,
    });
    questions.push({
      q: `A production issue appears in ${topic}. What should be the first practical response?`,
      options: [
        'Make broad changes without measuring impact',
        'Use telemetry, isolate the cause, then apply targeted remediation',
        'Disable alerting to reduce noise',
        'Delete and recreate all resources immediately',
      ],
      answer: 1,
      topic,
    });
  }
  return questions;
}

function writeQuestionFile(cert) {
  const services = mkServices(cert.topics);
  const questions = mkQuestions(cert.topics);
  const content = `const CERT_META = ${JSON.stringify({
    id: cert.id,
    code: cert.code,
    name: cert.short,
    fullName: cert.full,
    emoji: '🧠',
    minutes: cert.minutes,
    passingScore: cert.pass,
    examQuestions: cert.exam,
    color: cert.color,
    badge: cert.level,
    description: cert.full,
    topics: cert.topics,
  }, null, 2)};\n\nconst TOPIC_RULES = [\n${mkRules(cert.topics)}\n];\n\nconst QUESTIONS = ${JSON.stringify(questions, null, 2)};\n\nconst SERVICES = ${JSON.stringify(services, null, 2)};\n`;
  fs.writeFileSync(`questions-${cert.slug}.js`, content);
  return questions.length;
}

function writePage(cert) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AWS ${cert.code} Study Platform</title>
<link rel="stylesheet" href="style.css?v=20260323b">
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<style>:root{--cert-color:${cert.color}}</style>
<script>(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();</script>
</head>
<body class="cert-page">

<nav>
  <div class="nav-top">
    <a class="nav-back" href="index.html" title="All certifications">&#x2190; Portal</a>
    <span class="nav-title-cert">${cert.code} <span class="sub">${cert.sub}</span></span>
    <button class="theme-toggle" id="theme-toggle" onclick="toggleTheme()" title="Toggle light/dark mode">🌙</button>
  </div>
  <div class="nav-tabs">
    <button class="nav-tab active" data-tab="home">&#x1F3E0; Home</button>
    <button class="nav-tab" data-tab="study">&#x1F4DA; Study</button>
    <button class="nav-tab" data-tab="quiz">&#x1F3AF; Quiz</button>
    <button class="nav-tab" data-tab="flash">&#x1F0CF; Flashcards</button>
  </div>
</nav>

<section class="cert-hero-banner">
  <div class="cert-hero-inner">
    <div class="cert-pg-badge-wrap">
      <img class="cert-pg-badge" src="assets/badges/${cert.slug}.png" alt="${cert.code} badge" width="80" height="60" loading="lazy">
    </div>
    <div class="cert-pg-info">
      <div class="cert-pg-level">${cert.level}</div>
      <div class="cert-pg-code">${cert.code}</div>
      <div class="cert-pg-name">${cert.full}</div>
    </div>
  </div>
</section>

<main>
  <div id="tab-home" class="tab-panel active">
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-val" id="stat-total">0</div><div class="stat-lbl">Total Questions</div></div>
      <div class="stat-card"><div class="stat-val" id="stat-topics">0</div><div class="stat-lbl">Topics Practiced</div></div>
      <div class="stat-card"><div class="stat-val" id="stat-mastery">0%</div><div class="stat-lbl">Mastery</div></div>
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <span style="font-weight:600">Progress</span>
        <span id="stat-mastered-text" class="text-muted">0 mastered</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" id="home-progress-fill" style="width:0%"></div></div>
    </div>
    <div class="home-actions">
      <div class="action-card">
        <div class="action-emoji">&#x1F3AF;</div>
        <div class="action-title">Quick Quiz</div>
        <div class="action-desc">Random questions with immediate feedback</div>
        <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary btn-sm" onclick="startQuickQuiz(10)">10 Qs</button>
          <button class="btn btn-primary btn-sm" onclick="startQuickQuiz(20)">20 Qs</button>
          <button class="btn btn-primary btn-sm" onclick="startQuickQuiz(30)">30 Qs</button>
        </div>
      </div>
      <div class="action-card" onclick="startExamSim()">
        <div class="action-emoji">&#x1F4DD;</div>
        <div class="action-title">Exam Simulation</div>
        <div class="action-desc" id="exam-sim-desc">${cert.exam} questions &middot; ${cert.minutes} minute timer &middot; Feedback at end</div>
      </div>
      <div class="action-card" onclick="goTab('study')">
        <div class="action-emoji">&#x1F4DA;</div>
        <div class="action-title">Study by Topic</div>
        <div class="action-desc">Review domain topics, then practice topic-specific questions</div>
      </div>
      <div class="action-card" onclick="startWeakAreas()">
        <div class="action-emoji">&#x26A0;&#xFE0F;</div>
        <div class="action-title">Weak Areas</div>
        <div class="action-desc">Topics where you've answered questions incorrectly</div>
        <div id="weak-topics-list" style="margin-top:10px;display:flex;flex-wrap:wrap;gap:5px;justify-content:center"></div>
      </div>
    </div>
  </div>

  <div id="tab-study" class="tab-panel">
    <h2 class="section-title">AWS Services <span class="hl">Study Guide</span></h2>
    <div class="service-grid" id="service-grid"></div>
  </div>

  <div id="tab-quiz" class="tab-panel">
    <div id="quiz-setup-screen" class="quiz-setup">
      <h2>Configure Your Quiz</h2>
      <div class="option-group">
        <label>Mode</label>
        <div class="option-pills">
          <div class="pill selected" data-group="mode" data-val="study">&#x1F4D6; Study (immediate feedback)</div>
          <div class="pill" data-group="mode" data-val="exam">&#x1F4DD; Exam (feedback at end)</div>
        </div>
      </div>
      <div class="option-group">
        <label>Question Count</label>
        <div class="option-pills">
          <div class="pill selected" data-group="count" data-val="10">10</div>
          <div class="pill" data-group="count" data-val="20">20</div>
          <div class="pill" data-group="count" data-val="30">30</div>
          <div class="pill" data-group="count" data-val="${cert.exam}">${cert.exam}</div>
          <div class="pill" data-group="count" data-val="all">All</div>
        </div>
      </div>
      <div class="option-group">
        <label>Topic</label>
        <div class="option-pills" id="topic-pills">
          <div class="pill selected" data-group="topic" data-val="all">All Topics</div>
        </div>
      </div>
      <div class="option-group">
        <label>Filter</label>
        <div class="option-pills">
          <div class="pill selected" data-group="filter" data-val="all">All Questions</div>
          <div class="pill" data-group="filter" data-val="weak">&#x26A0; Weak Areas Only</div>
        </div>
      </div>
      <button class="btn btn-primary mt-24" style="width:100%;padding:14px;font-size:1rem" onclick="startConfiguredQuiz()">Start Quiz &#x2192;</button>
    </div>
    <div id="quiz-active-screen" style="display:none"></div>
    <div id="quiz-result-screen" style="display:none"></div>
  </div>

  <div id="tab-flash" class="tab-panel">
    <div class="flash-controls">
      <h2 class="section-title" style="margin-bottom:0">Flashcards</h2>
      <select class="topic-select" id="flash-topic-filter" onchange="initFlashcards()">
        <option value="all">All Topics</option>
      </select>
      <span id="flash-count-badge" class="badge-pill">0 cards</span>
    </div>
    <div class="flash-wrap">
      <div class="flash-card" id="flash-card" onclick="flipCard()">
        <div class="flash-face flash-front">
          <div class="flash-q" id="flash-front-text">Loading...</div>
          <div class="flash-hint">Click to reveal answer</div>
        </div>
        <div class="flash-face flash-back">
          <div class="flash-a" id="flash-back-text"></div>
          <div class="flash-hint">Click to flip back</div>
        </div>
      </div>
    </div>
    <div class="flash-nav">
      <button class="btn" onclick="flashPrev()">&#x2190; Previous</button>
      <span class="flash-counter" id="flash-counter">1 / ?</span>
      <button class="btn" onclick="flashNext()">Next &#x2192;</button>
    </div>
  </div>
</main>

<footer class="portal-footer"><span class="footer-credit">Created by Jonathan Lindqvist</span><span class="footer-sep">&middot;</span><span>Built for learning &mdash; not affiliated with Amazon Web Services</span></footer>

<div class="modal-overlay hidden" id="info-modal">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal()">&#x2715;</button>
    <div class="modal-title" id="modal-title"></div>
    <div class="modal-desc" id="modal-desc"></div>
    <a class="modal-link" id="modal-link" href="#" target="_blank">&#x1F4D6; AWS Documentation &#x2192;</a>
  </div>
</div>

<script src="questions-${cert.slug}.js"></script>
<script src="question-explanations.js?v=20260323b"></script>
<script src="app.js?v=20260323a"></script>
</body>
</html>
`;
  fs.writeFileSync(`${cert.slug}.html`, html);
}

const totals = {};
for (const cert of CERTS) {
  totals[cert.id] = writeQuestionFile(cert);
  writePage(cert);
}

console.log(JSON.stringify(totals, null, 2));
