
const APP_RELEASE = '1.0.0';


function tagQuestion(q) {
  if (q.topic) return q.topic; // manual override
  // First pass: question text only (most reliable signal)
  const qText = q.q.toLowerCase();
  for (const [re, topic] of TOPIC_RULES) {
    if (re.test(qText)) return topic;
  }
  // Second pass: answer options (handles "Which service should you use?" questions)
  const optText = (q.options||[]).join(' ').toLowerCase();
  for (const [re, topic] of TOPIC_RULES) {
    if (re.test(optText)) return topic;
  }
  return 'General';
}

QUESTIONS.forEach(q => { if (!q.topic) q.topic = tagQuestion(q); });
const ALL_TOPICS = [...new Set(QUESTIONS.map(q => q.topic))].sort();

// Progress
const STORAGE_KEY = 'aws-quiz-progress-' + CERT_META.id;
const QUIZ_SESSION_KEY = 'aws-quiz-session-' + CERT_META.id;
const BOOKMARKS_KEY = 'aws-bookmarks-' + CERT_META.id;
const ANSWER_LOG_KEY = 'aws-answer-log-' + CERT_META.id;
function loadProgress() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); } catch { return {}; } }
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
function isMastered(e) { return e && e.correct >= 1; }
function isWeak(e) { return e && e.incorrect > 0 && !isMastered(e); }

function loadBookmarks() {
  try {
    const raw = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw.filter(i => Number.isInteger(i) && i >= 0 && i < QUESTIONS.length);
  } catch {
    return [];
  }
}

function saveBookmarks(bookmarks) {
  const unique = [...new Set(bookmarks)].sort((a, b) => a - b);
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(unique));
}

function isBookmarked(idx) {
  return loadBookmarks().includes(idx);
}

function toggleBookmark(idx) {
  const bookmarks = new Set(loadBookmarks());
  if (bookmarks.has(idx)) bookmarks.delete(idx);
  else bookmarks.add(idx);
  saveBookmarks([...bookmarks]);
}

function loadAnswerLog() {
  try {
    const raw = JSON.parse(localStorage.getItem(ANSWER_LOG_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw.filter(item =>
      item &&
      Number.isInteger(item.idx) &&
      item.idx >= 0 &&
      item.idx < QUESTIONS.length &&
      typeof item.correct === 'boolean' &&
      typeof item.ts === 'number'
    );
  } catch {
    return [];
  }
}

function saveAnswerLog(entries) {
  const capped = entries.slice(-4000);
  localStorage.setItem(ANSWER_LOG_KEY, JSON.stringify(capped));
}

function appendAnswerLog(entry) {
  const log = loadAnswerLog();
  log.push(entry);
  saveAnswerLog(log);
}

function loadQuizSession() {
  try {
    const raw = JSON.parse(localStorage.getItem(QUIZ_SESSION_KEY) || 'null');
    if (!raw || !Array.isArray(raw.questionIndexes) || raw.questionIndexes.length === 0) return null;

    const questions = raw.questionIndexes
      .filter(i => Number.isInteger(i) && i >= 0 && i < QUESTIONS.length)
      .map(i => ({ ...QUESTIONS[i], _idx: i }));
    if (!questions.length) return null;

    const current = Math.min(Math.max(parseInt(raw.current || 0, 10), 0), questions.length - 1);
    const score = Math.max(0, parseInt(raw.score || 0, 10));
    const timed = !!raw.timed;
    const timerEnd = timed ? Number(raw.timerEnd || 0) : null;

    return {
      questions,
      mode: raw.mode === 'exam' ? 'exam' : 'study',
      timed,
      current,
      score,
      timerEnd,
      responses: Array.isArray(raw.responses) ? raw.responses : [],
    };
  } catch {
    return null;
  }
}

function saveQuizSession() {
  if (!quizState || !quizState.questions || !quizState.questions.length) return;
  const payload = {
    questionIndexes: quizState.questions.map(q => q._idx),
    mode: quizState.mode,
    timed: !!quizState.timed,
    current: quizState.current,
    score: quizState.score,
    timerEnd: quizState.timed ? quizState.timerEnd : null,
    responses: Array.isArray(quizState.responses) ? quizState.responses : [],
    updatedAt: Date.now(),
  };
  localStorage.setItem(QUIZ_SESSION_KEY, JSON.stringify(payload));
}

function clearQuizSession() {
  localStorage.removeItem(QUIZ_SESSION_KEY);
}

function buildProgressSnapshot() {
  const p = loadProgress();
  const topicStats = {};
  let mastered = 0;
  const topicsSeen = new Set();

  QUESTIONS.forEach((q, i) => {
    const topic = q.topic || tagQuestion(q);
    const entry = p[i];
    if (!topicStats[topic]) topicStats[topic] = { topic, total: 0, seen: 0, mastered: 0, weak: 0 };
    topicStats[topic].total++;
    if (entry && (entry.correct > 0 || entry.incorrect > 0)) {
      topicStats[topic].seen++;
      topicsSeen.add(topic);
    }
    if (isMastered(entry)) {
      topicStats[topic].mastered++;
      mastered++;
    }
    if (isWeak(entry)) topicStats[topic].weak++;
  });

  const topicList = Object.values(topicStats);
  const weakMap = {};
  topicList.forEach(stat => {
    if (stat.weak > 0) weakMap[stat.topic] = stat.weak;
  });

  return {
    progress: p,
    mastered,
    topicsSeen: topicsSeen.size,
    masteryPct: Math.round(mastered / QUESTIONS.length * 100),
    weakMap,
    topicStats: topicList,
  };
}

function ensureHomeInsights() {
  const home = document.getElementById('tab-home');
  const actions = home && home.querySelector('.home-actions');
  if (!home || !actions) return;

  if (!document.getElementById('smart-action-card')) {
    const smart = document.createElement('div');
    smart.className = 'action-card smart-action-card';
    smart.id = 'smart-action-card';
    actions.insertBefore(smart, actions.firstElementChild);
  } else {
    const smart = document.getElementById('smart-action-card');
    if (smart && smart.parentElement !== actions) {
      actions.insertBefore(smart, actions.firstElementChild);
    }
  }

  if (!document.getElementById('topic-readiness-card')) {
    const readiness = document.createElement('div');
    readiness.className = 'card topic-readiness-card';
    readiness.id = 'topic-readiness-card';
    actions.insertAdjacentElement('afterend', readiness);
  }
}

function ensureHistoryTab() {
  const tabs = document.querySelector('.nav-tabs');
  const main = document.querySelector('main');
  if (!tabs || !main) return;

  if (!tabs.querySelector('[data-tab="history"]')) {
    const btn = document.createElement('button');
    btn.className = 'nav-tab';
    btn.dataset.tab = 'history';
    btn.textContent = 'History';
    tabs.appendChild(btn);
    btn.addEventListener('click', () => goTab('history'));
  }

  if (!document.getElementById('tab-history')) {
    const panel = document.createElement('div');
    panel.id = 'tab-history';
    panel.className = 'tab-panel';
    panel.innerHTML =
      '<div class="history-page">' +
        '<div class="card">' +
          '<h2 class="section-title section-title-tight">Statistics &amp; History</h2>' +
          '<div class="text-muted mt-12">Your progress over time for this certification.</div>' +
        '</div>' +
        '<div id="history-content" class="history-content"></div>' +
      '</div>';
    main.appendChild(panel);
  }
}

function dayKey(ts) {
  return new Date(ts).toISOString().slice(0, 10);
}

function buildLastDays(days) {
  const keys = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - i);
    keys.push(dayKey(d.getTime()));
  }
  return keys;
}

function renderHistoryView() {
  const content = document.getElementById('history-content');
  if (!content) return;

  const log = loadAnswerLog();
  if (!log.length) {
    content.innerHTML =
      '<div class="card history-empty">No history yet. Complete a quiz to see trend and topic analytics.</div>';
    return;
  }

  const attempts = log.length;
  const correct = log.reduce((sum, e) => sum + (e.correct ? 1 : 0), 0);
  const accuracy = Math.round((correct / attempts) * 100);
  const activeDays = new Set(log.map(e => dayKey(e.ts))).size;

  const trendDays = buildLastDays(14);
  const byDay = {};
  log.forEach(e => {
    const k = dayKey(e.ts);
    if (!byDay[k]) byDay[k] = { total: 0, correct: 0 };
    byDay[k].total++;
    if (e.correct) byDay[k].correct++;
  });

  const trendRows = trendDays.map(k => {
    const d = byDay[k] || { total: 0, correct: 0 };
    const pct = d.total ? Math.round((d.correct / d.total) * 100) : 0;
    return '<div class="trend-row">' +
      '<div class="trend-day">' + escHtml(k.slice(5)) + '</div>' +
      '<div class="trend-bar"><span style="width:' + pct + '%"></span></div>' +
      '<div class="trend-meta">' + pct + '% · ' + d.total + ' q</div>' +
    '</div>';
  }).join('');

  const topicTotals = {};
  QUESTIONS.forEach(q => {
    const topic = q.topic || 'General';
    if (!topicTotals[topic]) topicTotals[topic] = { total: 0, seen: new Set(), attempts: 0, correct: 0 };
    topicTotals[topic].total++;
  });

  log.forEach(e => {
    const q = QUESTIONS[e.idx];
    const topic = (q && q.topic) || 'General';
    if (!topicTotals[topic]) topicTotals[topic] = { total: 0, seen: new Set(), attempts: 0, correct: 0 };
    topicTotals[topic].seen.add(e.idx);
    topicTotals[topic].attempts++;
    if (e.correct) topicTotals[topic].correct++;
  });

  const topicRows = Object.entries(topicTotals)
    .map(([topic, v]) => {
      const topicAcc = v.attempts ? Math.round((v.correct / v.attempts) * 100) : 0;
      const coverage = Math.round((v.seen.size / Math.max(1, v.total)) * 100);
      return { topic, topicAcc, coverage, attempts: v.attempts, total: v.total };
    })
    .sort((a, b) => b.attempts - a.attempts || a.topic.localeCompare(b.topic));

  const performanceRows = topicRows
    .filter(r => r.attempts > 0)
    .slice(0, 14)
    .map(r =>
      '<tr>' +
        '<td>' + escHtml(r.topic) + '</td>' +
        '<td>' + r.topicAcc + '%</td>' +
        '<td>' + r.attempts + '</td>' +
      '</tr>'
    ).join('');

  const coverageRows = topicRows
    .map(r =>
      '<div class="coverage-row">' +
        '<div class="coverage-topic">' + escHtml(r.topic) + '</div>' +
        '<div class="coverage-bar"><span style="width:' + r.coverage + '%"></span></div>' +
        '<div class="coverage-meta">' + r.coverage + '%</div>' +
      '</div>'
    ).join('');

  content.innerHTML =
    '<div class="history-summary-grid">' +
      '<div class="card history-stat"><div class="history-stat-val">' + attempts + '</div><div class="history-stat-lbl">Attempts</div></div>' +
      '<div class="card history-stat"><div class="history-stat-val">' + accuracy + '%</div><div class="history-stat-lbl">Accuracy</div></div>' +
      '<div class="card history-stat"><div class="history-stat-val">' + activeDays + '</div><div class="history-stat-lbl">Active Days</div></div>' +
    '</div>' +
    '<div class="card">' +
      '<div class="history-card-title">Accuracy Trend (last 14 days)</div>' +
      '<div class="trend-list">' + trendRows + '</div>' +
    '</div>' +
    '<div class="history-two-col">' +
      '<div class="card">' +
        '<div class="history-card-title">Right/Wrong Per Topic</div>' +
        '<div class="history-table-wrap">' +
          '<table class="history-table">' +
            '<thead><tr><th>Topic</th><th>Accuracy</th><th>Attempts</th></tr></thead>' +
            '<tbody>' + (performanceRows || '<tr><td colspan="3">No attempts yet.</td></tr>') + '</tbody>' +
          '</table>' +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="history-card-title">Service Coverage</div>' +
        '<div class="coverage-list">' + coverageRows + '</div>' +
      '</div>' +
    '</div>';
}

function ensureHeroStatsRow() {
  const home = document.getElementById('tab-home');
  const stats = home && home.querySelector('.stats-grid');
  const heroInner = document.querySelector('.cert-hero-inner');
  if (!home || !stats || !heroInner) return;

  let wrap = document.getElementById('hero-stats-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'hero-stats-wrap';
    wrap.className = 'hero-stats-wrap';
    heroInner.appendChild(wrap);
  }
  if (stats.parentElement !== wrap) wrap.appendChild(stats);
}

function getRecommendedAction(snapshot) {
  const savedSession = loadQuizSession();
  const bookmarkCount = loadBookmarks().length;
  const worstTopic = Object.entries(snapshot.weakMap).sort((a, b) => b[1] - a[1])[0];
  const unseenTopic = snapshot.topicStats.find(stat => stat.seen === 0);

  if (savedSession) {
    return {
      eyebrow: 'Recommended Next Step',
      title: 'Resume your last quiz',
      desc: 'Continue where you left off without losing progress.',
      meta: 'Question ' + (savedSession.current + 1) + ' of ' + savedSession.questions.length,
      cta: 'Resume quiz',
      action: 'resumeSavedQuiz()'
    };
  }

  if (snapshot.mastered === 0) {
    return {
      eyebrow: 'Recommended Next Step',
      title: 'Start with a focused warm-up',
      desc: 'Take a short 10-question quiz to quickly identify your strongest and weakest topics.',
      meta: 'Best for first-time practice',
      cta: 'Start 10-question quiz',
      action: 'startQuickQuiz(10)'
    };
  }
  if (worstTopic) {
    return {
      eyebrow: 'Recommended Next Step',
      title: 'Revisit your weakest area',
      desc: 'You currently have the most misses in ' + worstTopic[0] + '. Tightening that topic will move your score fastest.',
      meta: worstTopic[1] + ' question' + (worstTopic[1] === 1 ? '' : 's') + ' still need review',
      cta: 'Practice weak areas',
      action: 'startWeakAreas()'
    };
  }
  if (bookmarkCount > 0) {
    return {
      eyebrow: 'Recommended Next Step',
      title: 'Review your bookmarked questions',
      desc: 'You have saved questions to revisit. This is a fast way to sharpen uncertain areas.',
      meta: bookmarkCount + ' bookmarked question' + (bookmarkCount === 1 ? '' : 's'),
      cta: 'Practice bookmarks',
      action: 'startBookmarkedQuiz()'
    };
  }
  if (snapshot.masteryPct >= 70) {
    return {
      eyebrow: 'Recommended Next Step',
      title: 'Simulate the real exam',
      desc: 'Your mastery is strong enough to justify a timed run. Use exam mode to pressure-test readiness.',
      meta: snapshot.masteryPct + '% mastery across the bank',
      cta: 'Start exam simulation',
      action: 'startExamSim()'
    };
  }
  if (unseenTopic) {
    return {
      eyebrow: 'Recommended Next Step',
      title: 'Cover an untouched topic',
      desc: unseenTopic.topic + ' has not been practiced yet. Filling those gaps gives you a more even score distribution.',
      meta: 'Unstarted topic: ' + unseenTopic.topic,
      cta: 'Open study guide',
      action: 'goTab(\'study\')'
    };
  }
  return {
    eyebrow: 'Recommended Next Step',
    title: 'Keep momentum with a mixed set',
    desc: 'Run a 20-question mixed quiz to reinforce what is working and expose what still feels shaky.',
    meta: snapshot.masteryPct + '% mastery so far',
    cta: 'Start 20-question quiz',
    action: 'startQuickQuiz(20)'
  };
}

function getTopicStatus(stat) {
  if (stat.seen === 0) return { label: 'Not started', cls: 'not-started' };
  if (stat.weak > 0) return { label: 'Needs work', cls: 'needs-work' };
  if (stat.mastered >= Math.max(1, Math.ceil(stat.total * 0.35))) return { label: 'Ready', cls: 'ready' };
  return { label: 'In progress', cls: 'in-progress' };
}

function renderHomeInsights(snapshot) {
  ensureHomeInsights();

  const actionCard = document.getElementById('smart-action-card');
  const readinessCard = document.getElementById('topic-readiness-card');
  if (!actionCard || !readinessCard) return;

  const next = getRecommendedAction(snapshot);
  actionCard.innerHTML =
    '<div class="insight-eyebrow">' + escHtml(next.eyebrow) + '</div>' +
    '<div class="insight-title">' + escHtml(next.title) + '</div>' +
    '<div class="insight-desc">' + escHtml(next.desc) + '</div>' +
    '<div class="insight-meta">' + escHtml(next.meta) + '</div>' +
    '<button class="btn btn-primary" onclick="' + next.action + '">' + escHtml(next.cta) + '</button>';

  const counts = { ready: 0, 'needs-work': 0, 'in-progress': 0, 'not-started': 0 };
  const prioritized = snapshot.topicStats
    .slice()
    .map(stat => {
      const status = getTopicStatus(stat);
      counts[status.cls]++;
      return {
        topic: stat.topic,
        status,
        seen: stat.seen,
        weak: stat.weak,
      };
    })
    .sort((a, b) => {
      const rank = { 'needs-work': 0, 'in-progress': 1, 'not-started': 2, 'ready': 3 };
      if (rank[a.status.cls] !== rank[b.status.cls]) return rank[a.status.cls] - rank[b.status.cls];
      return a.topic.localeCompare(b.topic);
    });

  const pills = prioritized.slice(0, 16).map(item =>
      '<span class="topic-readiness-pill ' + item.status.cls + '">' +
        '<strong>' + escHtml(item.topic) + '</strong>' +
        '<span>' + escHtml(item.status.label) + '</span>' +
      '</span>'
    ).join('');

  const hiddenCount = Math.max(0, prioritized.length - 16);

  const allPills = prioritized.map(item =>
      '<span class="topic-readiness-pill ' + item.status.cls + '">' +
        '<strong>' + escHtml(item.topic) + '</strong>' +
        '<span>' + escHtml(item.status.label) + '</span>' +
      '</span>'
    ).join('');

  readinessCard.innerHTML =
    '<div class="insight-eyebrow">Topic Readiness</div>' +
    '<div class="insight-title">Coverage Overview</div>' +
    '<div class="topic-readiness-summary">' +
      '<span>' + counts.ready + ' ready</span>' +
      '<span>' + counts['needs-work'] + ' need work</span>' +
      '<span>' + counts['in-progress'] + ' in progress</span>' +
      '<span>' + counts['not-started'] + ' not started</span>' +
    '</div>' +
    '<div class="topic-readiness-grid">' + pills + '</div>' +
    '<details class="topic-readiness-details">' +
      '<summary>Show all topics' + (hiddenCount ? ' (+' + hiddenCount + ')' : '') + '</summary>' +
      '<div class="topic-readiness-grid mt-12">' + allPills + '</div>' +
    '</details>';
}

function recordAnswer(idx, correct, topic) {
  const p = loadProgress();
  if (!p[idx]) p[idx] = {correct:0,incorrect:0,lastSeen:0};
  if (correct) p[idx].correct++; else p[idx].incorrect++;
  p[idx].lastSeen = Date.now();
  saveProgress(p);
  appendAnswerLog({
    idx,
    topic: topic || QUESTIONS[idx].topic || 'General',
    correct,
    ts: Date.now(),
  });
  updateHomeStats();
}

function updateHomeStats() {
  const snapshot = buildProgressSnapshot();
  document.getElementById('stat-mastery').textContent = snapshot.masteryPct+'%';
  document.getElementById('stat-topics').textContent = snapshot.topicsSeen;
  document.getElementById('stat-mastered-text').textContent = snapshot.mastered+' of '+QUESTIONS.length+' mastered';
  document.getElementById('home-progress-fill').style.width = snapshot.masteryPct+'%';

  const weakList = document.getElementById('weak-topics-list');
  if (weakList) {
    const sorted = Object.entries(snapshot.weakMap).sort((a,b) => b[1]-a[1]);
    if (sorted.length > 0) {
      weakList.innerHTML = sorted.slice(0,5).map(([t,n]) =>
        '<span class="weak-topic-tag">'+escHtml(t)+' ('+n+')</span>'
      ).join('');
    } else {
      weakList.innerHTML = '<span class="weak-topic-none">No weak areas yet — keep answering questions!</span>';
    }
  }

  renderHomeInsights(snapshot);
  const historyPanel = document.getElementById('tab-history');
  if (historyPanel && historyPanel.classList.contains('active')) renderHistoryView();
}

// Nav
function goTab(tab) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-'+tab).classList.add('active');
  document.querySelector('[data-tab='+tab+']').classList.add('active');
  if (tab==='home') updateHomeStats();
  if (tab==='flash') initFlashcards();
  if (tab==='quiz') resetQuizSetup();
  if (tab==='history') renderHistoryView();
}
document.querySelectorAll('.nav-tab').forEach(t => t.addEventListener('click', () => goTab(t.dataset.tab)));

// Pill selector
document.querySelectorAll('.pill').forEach(p => {
  p.addEventListener('click', () => {
    document.querySelectorAll('.pill[data-group="'+p.dataset.group+'"]').forEach(x => x.classList.remove('selected'));
    p.classList.add('selected');
  });
});
function getPillVal(group) {
  const el = document.querySelector('.pill.selected[data-group="'+group+'"]');
  return el ? el.dataset.val : null;
}

// Service data for study tab


function buildStudyCards() {
  const grid = document.getElementById('service-grid');
  grid.innerHTML = SERVICES.map(s => {
    const bulletsHtml = s.bullets.map(b => '<li>'+escHtml(b)+'</li>').join('');
    return '<div class="service-card">' +
      '<div class="service-header"><span class="service-emoji">'+s.emoji+'</span><span class="service-name">'+escHtml(s.name)+'</span></div>' +
      '<div class="service-desc">'+escHtml(s.desc)+'</div>' +
      '<ul class="service-bullets">'+bulletsHtml+'</ul>' +
      '<button class="btn btn-primary btn-sm" onclick="startTopicQuiz(\'' + s.name + '\')">'+'Practice '+escHtml(s.name)+' Questions</button>' +
      '</div>';
  }).join('');
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function getQuestionExplanation(q) {
  const certExplanations = window.QUESTION_EXPLANATIONS && window.QUESTION_EXPLANATIONS[CERT_META.id];
  if (certExplanations && typeof q._idx === 'number' && certExplanations[q._idx]) return certExplanations[q._idx];
  if (q.explanation) return q.explanation;
  return '';
}

function getTopicDetails(topic) {
  return SERVICES.find(x => x.name === topic) || null;
}

function formatAnswerLabel(idx, text) {
  return String.fromCharCode(65 + idx) + '. ' + text;
}

function formatSelectedAnswers(q, selected) {
  if (!selected || !selected.length) return '';
  return selected.map(idx => formatAnswerLabel(idx, q.options[idx])).join(' | ');
}

function buildAnswerInsight(q, correct, selected) {
  const topic = q.topic || 'General';
  const topicDetails = getTopicDetails(topic);
  const questionExplanation = getQuestionExplanation(q);
  const summary = questionExplanation || (topicDetails
    ? topicDetails.desc
    : 'Match the requirement in the question to the AWS service or pattern that solves it with the least operational overhead and according to best practices.');

  return '<div class="answer-insight">' +
    '<div class="answer-insight-title">Explanation</div>' +
    '<div class="answer-insight-body">' + escHtml(summary) + '</div>' +
    '</div>';
}

// Quiz logic
let quizState = null;
let selectedMulti = new Set();

function shuffle(arr) {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

function getPool(opts) {
  const p = loadProgress();
  const bookmarks = new Set(loadBookmarks());
  let pool = QUESTIONS.map((q,i) => ({...q,_idx:i}));
  if (opts.topic && opts.topic !== 'all') pool = pool.filter(q => q.topic === opts.topic);
  if (opts.filter === 'weak') pool = pool.filter(q => isWeak(p[q._idx]));
  if (opts.filter === 'bookmarked') pool = pool.filter(q => bookmarks.has(q._idx));
  pool = shuffle(pool);
  if (opts.count !== 'all') pool = pool.slice(0, parseInt(opts.count));
  return pool;
}

function startQuickQuiz(count) {
  goTab('quiz');
  setTimeout(() => launchQuiz(getPool({count}), 'study', false), 10);
}
function startExamSim() {
  goTab('quiz');
  setTimeout(() => launchQuiz(getPool({count: CERT_META.examQuestions}), 'exam', true), 10);
}
function startWeakAreas() {
  const p = loadProgress();
  const pool = shuffle(QUESTIONS.map((q,i)=>({...q,_idx:i})).filter(q => isWeak(p[q._idx])));
  if (!pool.length) { alert('No weak areas yet! Answer some questions first.'); return; }
  goTab('quiz');
  setTimeout(() => launchQuiz(pool, 'study', false), 10);
}

function startBookmarkedQuiz() {
  const bookmarks = new Set(loadBookmarks());
  const pool = shuffle(QUESTIONS.map((q, i) => ({ ...q, _idx: i })).filter(q => bookmarks.has(q._idx)));
  if (!pool.length) { alert('No bookmarked questions yet.'); return; }
  goTab('quiz');
  setTimeout(() => launchQuiz(pool, 'study', false), 10);
}

function startTopicQuiz(topic) {
  goTab('quiz');
  setTimeout(() => launchQuiz(getPool({topic, count:20}), 'study', false), 10);
}

function resumeSavedQuiz() {
  const saved = loadQuizSession();
  if (!saved) {
    alert('No saved quiz session found.');
    return;
  }
  goTab('quiz');
  setTimeout(() => launchQuiz(saved.questions, saved.mode, saved.timed, saved), 10);
}

function discardSavedQuiz() {
  clearQuizSession();
  resetQuizSetup();
  updateHomeStats();
}

function setScreenVisible(id, visible) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = visible ? '' : 'none';
  el.classList.toggle('screen-hidden', !visible);
}

function resetQuizSetup() {
  setScreenVisible('quiz-setup-screen', true);
  setScreenVisible('quiz-active-screen', false);
  setScreenVisible('quiz-result-screen', false);
  ensureQuizSetupEnhancements();
  renderResumeControls();
}

function ensureQuizSetupEnhancements() {
  const filterGroup = document.querySelector('.pill[data-group="filter"]')?.parentElement;
  if (filterGroup && !filterGroup.querySelector('.pill[data-val="bookmarked"]')) {
    const pill = document.createElement('div');
    pill.className = 'pill';
    pill.dataset.group = 'filter';
    pill.dataset.val = 'bookmarked';
    pill.textContent = '★ Bookmarked Only';
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill[data-group="filter"]').forEach(x => x.classList.remove('selected'));
      pill.classList.add('selected');
    });
    filterGroup.appendChild(pill);
  }

  const setup = document.getElementById('quiz-setup-screen');
  if (setup && !document.getElementById('resume-quiz-controls')) {
    const controls = document.createElement('div');
    controls.id = 'resume-quiz-controls';
    controls.className = 'resume-quiz-controls';
    controls.innerHTML =
      '<button class="btn btn-sm" id="resume-quiz-btn" onclick="resumeSavedQuiz()">Resume Last Quiz</button>' +
      '<button class="btn btn-sm" id="discard-quiz-btn" onclick="discardSavedQuiz()">Discard Saved Quiz</button>' +
      '<button class="btn btn-sm" id="bookmarked-quiz-btn" onclick="startBookmarkedQuiz()">Practice Bookmarks</button>';
    const startBtn = setup.querySelector('.quiz-start-btn');
    if (startBtn) startBtn.insertAdjacentElement('afterend', controls);
  }
}

function renderResumeControls() {
  const wrap = document.getElementById('resume-quiz-controls');
  if (!wrap) return;
  const saved = loadQuizSession();
  const bookmarkCount = loadBookmarks().length;
  const shouldShow = !!saved || bookmarkCount > 0;
  wrap.style.display = shouldShow ? 'flex' : 'none';

  const resumeBtn = document.getElementById('resume-quiz-btn');
  const discardBtn = document.getElementById('discard-quiz-btn');
  const bookmarkedBtn = document.getElementById('bookmarked-quiz-btn');

  if (resumeBtn) {
    resumeBtn.style.display = saved ? '' : 'none';
    if (saved) resumeBtn.textContent = 'Resume Quiz (' + (saved.current + 1) + '/' + saved.questions.length + ')';
  }
  if (discardBtn) discardBtn.style.display = saved ? '' : 'none';
  if (bookmarkedBtn) {
    bookmarkedBtn.style.display = bookmarkCount > 0 ? '' : 'none';
    if (bookmarkCount > 0) bookmarkedBtn.textContent = 'Practice Bookmarks (' + bookmarkCount + ')';
  }
}

function startConfiguredQuiz() {
  const mode=getPillVal('mode'), count=getPillVal('count'), topic=getPillVal('topic'), filter=getPillVal('filter');
  const qs=getPool({topic,filter,count});
  if (!qs.length) { alert('No questions match the selected filters.'); return; }
  launchQuiz(qs, mode, mode==='exam');
}

function launchQuiz(questions, mode, timed, initialState) {
  setScreenVisible('quiz-setup-screen', false);
  setScreenVisible('quiz-active-screen', true);
  setScreenVisible('quiz-result-screen', false);
  quizState = {
    questions,
    mode,
    timed,
    current: initialState ? initialState.current : 0,
    score: initialState ? initialState.score : 0,
    responses: initialState && Array.isArray(initialState.responses) ? initialState.responses : [],
    timerEnd: timed ? (initialState && initialState.timerEnd ? initialState.timerEnd : Date.now() + CERT_META.minutes * 60 * 1000) : null,
    timerInterval: null,
  };
  selectedMulti = new Set();
  if (timed) quizState.timerInterval = setInterval(updateTimer, 1000);
  saveQuizSession();
  renderQuestion();
}

function updateTimer() {
  if (!quizState||!quizState.timed) return;
  const rem = Math.max(0, quizState.timerEnd - Date.now());
  const m=Math.floor(rem/60000), s=Math.floor((rem%60000)/1000);
  const el=document.getElementById('quiz-timer');
  if (el) { el.textContent='⏱ '+m+':'+(s<10?'0':'')+s; el.className='timer'+(rem<600000?'':' ok'); }
  if (rem===0) { clearInterval(quizState.timerInterval); showResult(); }
}

function renderQuestion() {
  const {questions,current,mode,timed} = quizState;
  const q = questions[current];
  const total = questions.length;
  const pct = Math.round(current/total*100);
  const multi = Array.isArray(q.answer);
  const ansArr = multi ? q.answer : [q.answer];
  selectedMulti = new Set();

  const optHtml = q.options.map((opt,i) =>
    '<button class="answer-btn" data-idx="'+i+'" onclick="handleAnswer('+i+')">'+String.fromCharCode(65+i)+'. '+escHtml(opt)+'</button>'
  ).join('');

  const timerHtml = timed ? '<span id="quiz-timer" class="timer ok">⏱ 130:00</span>' : '';
  const multiHint = multi ? ' <span class="badge-pill" style="margin-left:4px">Select '+ansArr.length+'</span>' : '';

  document.getElementById('quiz-active-screen').innerHTML =
    '<div class="quiz-active">' +
    '<div class="quiz-header"><span class="quiz-progress-text">Question '+(current+1)+' of '+total+'</span>'+timerHtml+'<span class="quiz-score" id="qscore">Score: '+quizState.score+'/'+(current)+'</span></div>' +
    '<div class="progress-bar" style="margin-bottom:16px"><div class="progress-fill" style="width:'+pct+'%"></div></div>' +
    '<div class="question-card">' +
    '<button class="btn btn-sm question-bookmark-corner '+(isBookmarked(q._idx)?'btn-bookmarked':'')+'" id="bookmark-question-btn" onclick="toggleCurrentBookmark()">'+bookmarkButtonLabel(q._idx)+'</button>' +
    '<div class="question-num">Topic: <span class="badge-pill">'+escHtml(q.topic||'General')+'</span>'+multiHint+'</div>' +
    '<div class="question-text">'+escHtml(q.q)+' <button class="info-btn" onclick="showInfo(\'' + escJs(q.topic||'General') + '\')" title="Service info">ℹ</button></div>' +
    '<div class="answers" id="answers-wrap">'+optHtml+'</div>' +
    '<div id="feedback-area"></div>' +
    '<div class="next-btn-wrap" id="next-wrap" style="display:none"><button class="btn btn-primary" onclick="nextQuestion()">'+(current<total-1?'Next Question →':'See Results')+'</button></div>' +
    '</div></div>';

  if (timed) updateTimer();
}

function escJs(s) { return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

function bookmarkButtonLabel(idx) {
  return isBookmarked(idx) ? '★ Bookmarked' : '☆ Bookmark';
}

function toggleCurrentBookmark() {
  if (!quizState || !quizState.questions || !quizState.questions.length) return;
  const q = quizState.questions[quizState.current];
  toggleBookmark(q._idx);
  const btn = document.getElementById('bookmark-question-btn');
  if (btn) {
    btn.textContent = bookmarkButtonLabel(q._idx);
    btn.classList.toggle('btn-bookmarked', isBookmarked(q._idx));
  }
  renderResumeControls();
  updateHomeStats();
}

function toggleCurrentFlashBookmark() {
  if (!flashState.questions.length) return;
  const q = flashState.questions[flashState.current];
  toggleBookmark(q._idx);
  updateFlashBookmarkButton();
  renderResumeControls();
  updateHomeStats();
}

function updateFlashBookmarkButton() {
  const btn = document.getElementById('flash-bookmark-btn');
  if (!btn || !flashState.questions.length) return;
  const idx = flashState.questions[flashState.current]._idx;
  btn.textContent = bookmarkButtonLabel(idx);
  btn.classList.toggle('btn-bookmarked', isBookmarked(idx));
}

function handleAnswer(idx) {
  const {questions,current,mode} = quizState;
  const q = questions[current];
  const multi = Array.isArray(q.answer);
  if (!multi) { submitSingle(idx); return; }
  const btn = document.querySelector('.answer-btn[data-idx="'+idx+'"]');
  if (selectedMulti.has(idx)) {
    selectedMulti.delete(idx);
    btn.classList.remove('sel-multi');
  } else {
    selectedMulti.add(idx);
    btn.classList.add('sel-multi');
  }
  if (selectedMulti.size === q.answer.length) submitMulti(Array.from(selectedMulti));
}

function submitSingle(idx) {
  const {questions,current,mode} = quizState;
  const q = questions[current];
  const correct = idx === q.answer;
  recordAnswer(q._idx, correct, q.topic || 'General');
  if (correct) quizState.score++;
  quizState.responses[current] = { selected: [idx], correct, answeredAt: Date.now() };
  saveQuizSession();
  if (mode === 'study') {
    document.querySelectorAll('.answer-btn').forEach(b => {
      b.disabled=true;
      const i=parseInt(b.dataset.idx);
      if (i===q.answer) b.classList.add('correct');
      else if (i===idx) b.classList.add('wrong');
    });
    const fb = document.getElementById('feedback-area');
    fb.innerHTML = correct
      ? '<div class="feedback correct">Correct.</div>' + buildAnswerInsight(q, true, [idx])
      : '<div class="feedback wrong">Incorrect. Correct: '+String.fromCharCode(65+q.answer)+'.</div>' + buildAnswerInsight(q, false, [idx]);
    document.getElementById('next-wrap').style.display='';
  } else { nextQuestion(); }
}

function submitMulti(selected) {
  const {questions,current,mode} = quizState;
  const q = questions[current];
  const correct = selected.length===q.answer.length && selected.every(i=>q.answer.includes(i));
  recordAnswer(q._idx, correct, q.topic || 'General');
  if (correct) quizState.score++;
  quizState.responses[current] = { selected: [...selected].sort((a, b) => a - b), correct, answeredAt: Date.now() };
  saveQuizSession();
  if (mode === 'study') {
    document.querySelectorAll('.answer-btn').forEach(b => {
      b.disabled=true;
      const i=parseInt(b.dataset.idx);
      if (q.answer.includes(i)) b.classList.add('correct');
      else if (selected.includes(i)) b.classList.add('wrong');
    });
    const letters = q.answer.map(i=>String.fromCharCode(65+i)).join(', ');
    const fb = document.getElementById('feedback-area');
    fb.innerHTML = correct
      ? '<div class="feedback correct">Correct.</div>' + buildAnswerInsight(q, true, selected)
      : '<div class="feedback wrong">Incorrect. Correct: '+letters+'.</div>' + buildAnswerInsight(q, false, selected);
    document.getElementById('next-wrap').style.display='';
  } else { nextQuestion(); }
}

function nextQuestion() {
  quizState.current++;
  selectedMulti = new Set();
  if (quizState.current >= quizState.questions.length) showResult();
  else {
    saveQuizSession();
    renderQuestion();
  }
}

function showResult() {
  if (quizState.timerInterval) clearInterval(quizState.timerInterval);
  clearQuizSession();
  setScreenVisible('quiz-active-screen', false);
  const rs = document.getElementById('quiz-result-screen');
  setScreenVisible('quiz-result-screen', true);
  const {score,questions} = quizState;
  const responses = Array.isArray(quizState.responses) ? quizState.responses : [];
  const total=questions.length, pct=Math.round(score/total*100), pass=pct>=65;
  rs.innerHTML =
    '<div class="quiz-review-page">' +
      '<div class="result-card">' +
        '<div class="result-score">'+pct+'%</div>' +
        '<div class="result-label '+(pass?'result-pass':'result-fail')+'">'+(pass?'Passed':'Not quite — keep practicing')+'</div>' +
        '<div class="result-sub">'+score+' of '+total+' correct &middot; Passing score: 65%</div>' +
        '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
          '<button class="btn btn-primary" onclick="resetQuizSetup()">New Quiz</button>' +
          '<button class="btn" onclick="goTab(\'home\')">Home</button>' +
        '</div>' +
      '</div>' +
      '<div class="card quiz-review-card">' +
        '<div class="history-card-title">Quiz Review</div>' +
        '<div class="text-muted">Scroll through all questions, your answers, and explanations.</div>' +
        '<div class="quiz-review-list">' + questions.map((q, i) => {
          const response = responses[i] || null;
          const selected = response && Array.isArray(response.selected) ? response.selected : [];
          const correctAnswers = (Array.isArray(q.answer) ? q.answer : [q.answer]).map(ans => formatAnswerLabel(ans, q.options[ans])).join(' | ');
          const yourAnswers = selected.length ? formatSelectedAnswers(q, selected) : 'No answer';
          const explanation = getQuestionExplanation(q) || (getTopicDetails(q.topic || 'General')?.desc || 'No explanation available for this question yet.');
          const statusClass = !response ? 'review-unanswered' : (response.correct ? 'review-correct' : 'review-wrong');
          const statusText = !response ? 'Unanswered' : (response.correct ? 'Correct' : 'Incorrect');
          return '<div class="review-item">' +
            '<div class="review-head">' +
              '<span class="review-num">Q' + (i + 1) + '</span>' +
              '<span class="review-status ' + statusClass + '">' + statusText + '</span>' +
            '</div>' +
            '<div class="review-question">' + escHtml(q.q) + '</div>' +
            '<div class="review-meta"><strong>Your answer:</strong> ' + escHtml(yourAnswers) + '</div>' +
            '<div class="review-meta"><strong>Correct answer:</strong> ' + escHtml(correctAnswers) + '</div>' +
            '<div class="review-expl">' + escHtml(explanation) + '</div>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</div>';
  updateHomeStats();
}

// Info modal
const AWS_DOCS = {
  'Lambda':'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html',
  'API Gateway':'https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html',
  'DynamoDB':'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html',
  'SQS':'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html',
  'SNS':'https://docs.aws.amazon.com/sns/latest/dg/welcome.html',
  'Kinesis':'https://docs.aws.amazon.com/streams/latest/dev/introduction.html',
  'S3':'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html',
  'CloudFront':'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
  'ElastiCache':'https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html',
  'RDS':'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html',
  'CodeDeploy':'https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html',
  'CodePipeline':'https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html',
  'CodeCommit':'https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html',
  'CodeBuild':'https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html',
  'CloudFormation':'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html',
  'ECS':'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html',
  'Cognito':'https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html',
  'IAM':'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
  'KMS':'https://docs.aws.amazon.com/kms/latest/developerguide/overview.html',
  'Secrets Manager':'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html',
  'X-Ray':'https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html',
  'CloudWatch':'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html',
  'Elastic Beanstalk':'https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html',
  'Step Functions':'https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html',
  'EventBridge':'https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html',
};

function showInfo(topic) {
  const s = SERVICES.find(x => x.name === topic);
  document.getElementById('modal-title').textContent = (s ? s.emoji+' ' : '') + (topic||'AWS Service');
  document.getElementById('modal-desc').textContent = s ? s.desc + '\n\nKey Points:\n' + s.bullets.map(b=>'• '+b).join('\n') : 'General AWS service.';
  const url = AWS_DOCS[topic] || 'https://docs.aws.amazon.com/index.html';
  const link = document.getElementById('modal-link');
  link.href = url;
  link.textContent = (topic||'AWS')+' Documentation →';
  document.getElementById('info-modal').classList.remove('hidden');
}
function closeModal() { document.getElementById('info-modal').classList.add('hidden'); }
document.getElementById('info-modal').addEventListener('click', e => { if (e.target===document.getElementById('info-modal')) closeModal(); });

// Flashcards
let flashState = {questions:[], current:0};

function initFlashcards() {
  const topic = document.getElementById('flash-topic-filter').value;
  let pool = QUESTIONS.map((q,i) => ({...q,_idx:i}));
  if (topic !== 'all') pool = pool.filter(q => q.topic === topic);
  flashState = {questions: shuffle(pool), current: 0};
  document.getElementById('flash-count-badge').textContent = pool.length+' cards';
  const card = document.getElementById('flash-card');
  card.classList.remove('flipped');
  ensureFlashActions();
  renderFlashCard();
}

function ensureFlashActions() {
  const nav = document.querySelector('.flash-nav');
  const wrap = document.querySelector('.flash-wrap');
  if (!nav && !wrap) return;

  const oldWrap = document.querySelector('.flash-extra-actions');
  if (oldWrap) oldWrap.remove();

  if (!document.getElementById('flash-bookmark-btn')) {
    const btn = document.createElement('button');
    btn.className = 'btn btn-sm flash-bookmark-btn flash-bookmark-corner';
    btn.id = 'flash-bookmark-btn';
    btn.textContent = '☆ Bookmark';
    btn.onclick = toggleCurrentFlashBookmark;
    if (wrap) wrap.appendChild(btn);
    else nav.appendChild(btn);
  }

  if (!document.querySelector('.flash-shortcut-hint')) {
    const hint = document.createElement('div');
    hint.className = 'flash-shortcut-hint';
    hint.textContent = 'Use ← / → to navigate, space to flip';
    nav.insertAdjacentElement('afterend', hint);
  }
}

function renderFlashCard() {
  const {questions,current} = flashState;
  if (!questions.length) {
    document.getElementById('flash-front-text').textContent = 'No cards for this topic.';
    document.getElementById('flash-back-text').textContent = '';
    document.getElementById('flash-counter').textContent = '0 / 0';
    return;
  }
  const q = questions[current];
  const ansArr = Array.isArray(q.answer) ? q.answer : [q.answer];
  const ansText = ansArr.map(i => String.fromCharCode(65+i)+'. '+q.options[i]).join(' | ');
  document.getElementById('flash-front-text').textContent = q.q;
  document.getElementById('flash-back-text').textContent = ansText;
  document.getElementById('flash-counter').textContent = (current+1)+' / '+questions.length;
  document.getElementById('flash-card').classList.remove('flipped');
  updateFlashBookmarkButton();
}

function flipCard() { document.getElementById('flash-card').classList.toggle('flipped'); }
function flashPrev() { if (flashState.current > 0) { flashState.current--; renderFlashCard(); } }
function flashNext() { if (flashState.current < flashState.questions.length-1) { flashState.current++; renderFlashCard(); } }

// Keyboard shortcuts for flashcards
document.addEventListener('keydown', e => {
  if (document.getElementById('tab-flash').classList.contains('active')) {
    if (e.key==='ArrowLeft') flashPrev();
    else if (e.key==='ArrowRight') flashNext();
    else if (e.key===' ') { e.preventDefault(); flipCard(); }
  }
});

// Populate topic dropdowns
function populateTopics() {
  const topicPills = document.getElementById('topic-pills');
  ALL_TOPICS.forEach(t => {
    const pill = document.createElement('div');
    pill.className='pill'; pill.dataset.group='topic'; pill.dataset.val=t; pill.textContent=t;
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill[data-group="topic"]').forEach(x=>x.classList.remove('selected'));
      pill.classList.add('selected');
    });
    topicPills.appendChild(pill);
  });
  const sel = document.getElementById('flash-topic-filter');
  ALL_TOPICS.forEach(t => { const o=document.createElement('option'); o.value=t; o.textContent=t; sel.appendChild(o); });
}

// Theme
function toggleTheme() {
  const html = document.documentElement;
  const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  document.getElementById('theme-toggle').textContent = newTheme === 'light' ? '◑' : '◐';
  localStorage.setItem('theme', newTheme);
}

function injectReleaseTag() {
  const footer = document.querySelector('.portal-footer');
  if (!footer || footer.querySelector('.app-release-tag')) return;
  const sep = document.createElement('span');
  sep.className = 'footer-sep app-release-tag';
  sep.innerHTML = '&middot;';
  const rel = document.createElement('span');
  rel.className = 'app-release-tag';
  rel.textContent = 'Release ' + APP_RELEASE;
  footer.appendChild(sep);
  footer.appendChild(rel);
}

// Init
const _t = localStorage.getItem('theme') || 'dark';
document.getElementById('theme-toggle').textContent = _t === 'light' ? '◑' : '◐';
// Set cert identity in nav
const _logo = document.querySelector('.nav-logo');
if (_logo) _logo.innerHTML = '&#x2601; ' + CERT_META.code + ' <span>' + CERT_META.name + '</span>';
// Set page title
document.title = 'AWS ' + CERT_META.code + ' Study Platform';
// Set stat total
const _statTotal = document.getElementById('stat-total');
if (_statTotal) _statTotal.textContent = QUESTIONS.length;
ensureHistoryTab();
ensureHeroStatsRow();
buildStudyCards();
populateTopics();
ensureQuizSetupEnhancements();
renderResumeControls();
updateHomeStats();
initFlashcards();
// Update exam sim description dynamically
const _esd = document.getElementById('exam-sim-desc');
if (_esd && typeof CERT_META !== 'undefined') {
  _esd.innerHTML = CERT_META.examQuestions + ' questions &middot; ' + CERT_META.minutes + ' minute timer &middot; Feedback at end';
}
injectReleaseTag();
