const CERT_META = {
  "id": "ans-c01",
  "code": "ANS-C01",
  "name": "Advanced Networking",
  "fullName": "AWS Certified Advanced Networking - Specialty",
  "emoji": "🧠",
  "minutes": 170,
  "passingScore": 75,
  "examQuestions": 65,
  "color": "#ec4899",
  "badge": "Specialty",
  "description": "AWS Certified Advanced Networking - Specialty",
  "topics": [
    "Hybrid Connectivity",
    "Routing",
    "DNS",
    "Network Security"
  ]
};

const TOPIC_RULES = [
  [/hybrid|connectivity/i, 'Hybrid Connectivity'],
  [/routing/i, 'Routing'],
  [/dns/i, 'DNS'],
  [/network|security/i, 'Network Security']
];

const QUESTIONS = [
  {
    "q": "A team needs to improve outcomes in the Hybrid Connectivity domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Hybrid Connectivity",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "Which statement about Hybrid Connectivity is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Hybrid Connectivity is mostly unrelated to reliability and security",
      "Hybrid Connectivity requires balancing reliability, cost, security, and performance",
      "Hybrid Connectivity should avoid managed services",
      "Hybrid Connectivity only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production issue appears in Hybrid Connectivity. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team needs to improve outcomes in the Routing domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Routing",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Routing"
  },
  {
    "q": "Which statement about Routing is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Routing is mostly unrelated to reliability and security",
      "Routing requires balancing reliability, cost, security, and performance",
      "Routing should avoid managed services",
      "Routing only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Routing"
  },
  {
    "q": "A production issue appears in Routing. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Routing"
  },
  {
    "q": "A team needs to improve outcomes in the DNS domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to DNS",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "DNS"
  },
  {
    "q": "Which statement about DNS is MOST accurate for exam-style architecture decisions?",
    "options": [
      "DNS is mostly unrelated to reliability and security",
      "DNS requires balancing reliability, cost, security, and performance",
      "DNS should avoid managed services",
      "DNS only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "DNS"
  },
  {
    "q": "A production issue appears in DNS. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "DNS"
  },
  {
    "q": "A team needs to improve outcomes in the Network Security domain with the least operational overhead. Which approach is best?",
    "options": [
      "Build custom tooling from scratch for every workload",
      "Use managed AWS patterns and controls specific to Network Security",
      "Disable monitoring to reduce complexity",
      "Use one large server for all environments"
    ],
    "answer": 1,
    "topic": "Network Security"
  },
  {
    "q": "Which statement about Network Security is MOST accurate for exam-style architecture decisions?",
    "options": [
      "Network Security is mostly unrelated to reliability and security",
      "Network Security requires balancing reliability, cost, security, and performance",
      "Network Security should avoid managed services",
      "Network Security only matters in single-account environments"
    ],
    "answer": 1,
    "topic": "Network Security"
  },
  {
    "q": "A production issue appears in Network Security. What should be the first practical response?",
    "options": [
      "Make broad changes without measuring impact",
      "Use telemetry, isolate the cause, then apply targeted remediation",
      "Disable alerting to reduce noise",
      "Delete and recreate all resources immediately"
    ],
    "answer": 1,
    "topic": "Network Security"
  }
];

const SERVICES = [
  {
    "name": "Hybrid Connectivity",
    "emoji": "📘",
    "desc": "Hybrid Connectivity domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core hybrid connectivity patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "Routing",
    "emoji": "🧩",
    "desc": "Routing domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core routing patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "DNS",
    "emoji": "⚙️",
    "desc": "DNS domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core dns patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  },
  {
    "name": "Network Security",
    "emoji": "🛡️",
    "desc": "Network Security domain review aligned to exam-style scenarios and architecture decisions.",
    "bullets": [
      "Core network security patterns and design choices",
      "High-availability and security considerations",
      "Operational and troubleshooting mindset",
      "Cost and performance trade-offs",
      "Best-practice implementation details"
    ]
  }
];
