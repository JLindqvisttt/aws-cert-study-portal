const CERT_META = {
  "id": "mls-c01",
  "code": "MLS-C01",
  "name": "Machine Learning",
  "fullName": "AWS Certified Machine Learning - Specialty",
  "emoji": "🧠",
  "minutes": 180,
  "passingScore": 75,
  "examQuestions": 65,
  "color": "#ec4899",
  "badge": "Specialty",
  "description": "AWS Certified Machine Learning - Specialty",
  "topics": [
    "Problem Framing",
    "Feature Engineering",
    "Model Tuning",
    "Deployment"
  ]
};

const TOPIC_RULES = [
  [/problem|framing/i, 'Problem Framing'],
  [/feature|engineering/i, 'Feature Engineering'],
  [/model|tuning/i, 'Model Tuning'],
  [/deployment/i, 'Deployment']
];

const QUESTIONS = [
  {
    "q": "A team needs to improve outcomes in the Problem Framing domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Problem Framing",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "Which statement about Problem Framing is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Problem Framing is mostly unrelated to reliability and security",
      "Problem Framing requires balancing reliability, cost, security, and performance",
      "Problem Framing should avoid managed services",
      "Problem Framing only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production issue appears in Problem Framing. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team needs to improve outcomes in the Feature Engineering domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Feature Engineering",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Feature Engineering"
  },
  {
    "q": "Which statement about Feature Engineering is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Feature Engineering is mostly unrelated to reliability and security",
      "Feature Engineering requires balancing reliability, cost, security, and performance",
      "Feature Engineering should avoid managed services",
      "Feature Engineering only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Feature Engineering"
  },
  {
    "q": "A production issue appears in Feature Engineering. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Feature Engineering"
  },
  {
    "q": "A team needs to improve outcomes in the Model Tuning domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Model Tuning",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Model Tuning"
  },
  {
    "q": "Which statement about Model Tuning is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Model Tuning is mostly unrelated to reliability and security",
      "Model Tuning requires balancing reliability, cost, security, and performance",
      "Model Tuning should avoid managed services",
      "Model Tuning only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Model Tuning"
  },
  {
    "q": "A production issue appears in Model Tuning. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Model Tuning"
  },
  {
    "q": "A team needs to improve outcomes in the Deployment domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Deployment",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Deployment"
  },
  {
    "q": "Which statement about Deployment is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Deployment is mostly unrelated to reliability and security",
      "Deployment requires balancing reliability, cost, security, and performance",
      "Deployment should avoid managed services",
      "Deployment only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Deployment"
  },
  {
    "q": "A production issue appears in Deployment. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Deployment"
  }
];

const SERVICES = [
  {
    "name": "Problem Framing",
    "emoji": "📘",
    "desc": "Problem Framing domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core problem framing patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "Feature Engineering",
    "emoji": "🧩",
    "desc": "Feature Engineering domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core feature engineering patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "Model Tuning",
    "emoji": "⚙️",
    "desc": "Model Tuning domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core model tuning patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "Deployment",
    "emoji": "🛡️",
    "desc": "Deployment domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core deployment patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  }
];
