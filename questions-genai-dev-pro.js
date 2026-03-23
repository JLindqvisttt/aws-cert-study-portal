const CERT_META = {
  "id": "genai-developer-pro",
  "code": "GenAI-Dev-Pro",
  "name": "Generative AI Developer",
  "fullName": "AWS Certified Generative AI Developer - Professional",
  "emoji": "🧠",
  "minutes": 180,
  "passingScore": 75,
  "examQuestions": 75,
  "color": "#f97316",
  "badge": "Professional",
  "description": "AWS Certified Generative AI Developer - Professional",
  "topics": [
    "LLM Apps",
    "RAG Systems",
    "Evaluation",
    "Production Ops"
  ]
};

const TOPIC_RULES = [
  [/llm|apps/i, 'LLM Apps'],
  [/rag|systems/i, 'RAG Systems'],
  [/evaluation/i, 'Evaluation'],
  [/production|ops/i, 'Production Ops']
];

const QUESTIONS = [
  {
    "q": "A team needs to improve outcomes in the LLM Apps domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to LLM Apps",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "Which statement about LLM Apps is MOST accurate for exam-style architecture decisions?",
    "options": [
      "LLM Apps is mostly unrelated to reliability and security",
      "LLM Apps requires balancing reliability, cost, security, and performance",
      "LLM Apps should avoid managed services",
      "LLM Apps only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production issue appears in LLM Apps. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team needs to improve outcomes in the RAG Systems domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to RAG Systems",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "RAG Systems"
  },
  {
    "q": "Which statement about RAG Systems is MOST accurate for exam-style architecture decisions?",
    "options": [
      "RAG Systems is mostly unrelated to reliability and security",
      "RAG Systems requires balancing reliability, cost, security, and performance",
      "RAG Systems should avoid managed services",
      "RAG Systems only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "RAG Systems"
  },
  {
    "q": "A production issue appears in RAG Systems. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "RAG Systems"
  },
  {
    "q": "A team needs to improve outcomes in the Evaluation domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Evaluation",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "Which statement about Evaluation is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Evaluation is mostly unrelated to reliability and security",
      "Evaluation requires balancing reliability, cost, security, and performance",
      "Evaluation should avoid managed services",
      "Evaluation only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A production issue appears in Evaluation. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team needs to improve outcomes in the Production Ops domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Production Ops",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Production Ops"
  },
  {
    "q": "Which statement about Production Ops is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Production Ops is mostly unrelated to reliability and security",
      "Production Ops requires balancing reliability, cost, security, and performance",
      "Production Ops should avoid managed services",
      "Production Ops only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Production Ops"
  },
  {
    "q": "A production issue appears in Production Ops. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Production Ops"
  }
];

const SERVICES = [
  {
    "name": "LLM Apps",
    "emoji": "📘",
    "desc": "LLM Apps domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core llm apps patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "RAG Systems",
    "emoji": "🧩",
    "desc": "RAG Systems domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core rag systems patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "Evaluation",
    "emoji": "⚙️",
    "desc": "Evaluation domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core evaluation patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "Production Ops",
    "emoji": "🛡️",
    "desc": "Production Ops domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core production ops patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  }
];
