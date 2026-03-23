const CERT_META = {
  "id": "genai-dev-pro",
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
  [/llm|apps/i, "LLM Apps"],
  [/rag|systems/i, "RAG Systems"],
  [/evaluation/i, "Evaluation"],
  [/production|ops/i, "Production Ops"]
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
  },
  {
    "q": "For the GenAI-Dev-Pro LLM Apps domain, a team needs to improve llm apps domain review aligned to exam-style scenarios and architecture decisions. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production incident exposed weaknesses in llm apps domain review aligned to exam-style scenarios and architecture decisions. for the LLM Apps domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A regulated workload depends on strong llm apps domain review aligned to exam-style scenarios and architecture decisions. controls in the LLM Apps domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A platform team needs scalable llm apps domain review aligned to exam-style scenarios and architecture decisions. practices for the LLM Apps domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "Costs are rising in the LLM Apps domain because llm apps domain review aligned to exam-style scenarios and architecture decisions. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team wants safer change management around llm apps domain review aligned to exam-style scenarios and architecture decisions. in the LLM Apps domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "The GenAI-Dev-Pro blueprint for LLM Apps needs better resilience around llm apps domain review aligned to exam-style scenarios and architecture decisions.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team cannot prove ownership or accountability for llm apps domain review aligned to exam-style scenarios and architecture decisions. in the LLM Apps domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A new workload must launch quickly with strong llm apps domain review aligned to exam-style scenarios and architecture decisions. posture in the LLM Apps domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A review shows that llm apps domain review aligned to exam-style scenarios and architecture decisions. decisions in the LLM Apps domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team needs better observability for llm apps domain review aligned to exam-style scenarios and architecture decisions. in the LLM Apps domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A postmortem shows that weak llm apps domain review aligned to exam-style scenarios and architecture decisions. practices in the LLM Apps domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "For the GenAI-Dev-Pro LLM Apps domain, a team needs to improve core llm apps patterns and design choices while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production incident exposed weaknesses in core llm apps patterns and design choices for the LLM Apps domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A regulated workload depends on strong core llm apps patterns and design choices controls in the LLM Apps domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A platform team needs scalable core llm apps patterns and design choices practices for the LLM Apps domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "Costs are rising in the LLM Apps domain because core llm apps patterns and design choices is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team wants safer change management around core llm apps patterns and design choices in the LLM Apps domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "The GenAI-Dev-Pro blueprint for LLM Apps needs better resilience around core llm apps patterns and design choices. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team cannot prove ownership or accountability for core llm apps patterns and design choices in the LLM Apps domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A new workload must launch quickly with strong core llm apps patterns and design choices posture in the LLM Apps domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A review shows that core llm apps patterns and design choices decisions in the LLM Apps domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team needs better observability for core llm apps patterns and design choices in the LLM Apps domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A postmortem shows that weak core llm apps patterns and design choices practices in the LLM Apps domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "For the GenAI-Dev-Pro LLM Apps domain, a team needs to improve high-availability and security considerations while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production incident exposed weaknesses in high-availability and security considerations for the LLM Apps domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A regulated workload depends on strong high-availability and security considerations controls in the LLM Apps domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A platform team needs scalable high-availability and security considerations practices for the LLM Apps domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "Costs are rising in the LLM Apps domain because high-availability and security considerations is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team wants safer change management around high-availability and security considerations in the LLM Apps domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "The GenAI-Dev-Pro blueprint for LLM Apps needs better resilience around high-availability and security considerations. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team cannot prove ownership or accountability for high-availability and security considerations in the LLM Apps domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A new workload must launch quickly with strong high-availability and security considerations posture in the LLM Apps domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A review shows that high-availability and security considerations decisions in the LLM Apps domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team needs better observability for high-availability and security considerations in the LLM Apps domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A postmortem shows that weak high-availability and security considerations practices in the LLM Apps domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "For the GenAI-Dev-Pro LLM Apps domain, a team needs to improve operational and troubleshooting mindset while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production incident exposed weaknesses in operational and troubleshooting mindset for the LLM Apps domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A regulated workload depends on strong operational and troubleshooting mindset controls in the LLM Apps domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A platform team needs scalable operational and troubleshooting mindset practices for the LLM Apps domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "Costs are rising in the LLM Apps domain because operational and troubleshooting mindset is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team wants safer change management around operational and troubleshooting mindset in the LLM Apps domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "The GenAI-Dev-Pro blueprint for LLM Apps needs better resilience around operational and troubleshooting mindset. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team cannot prove ownership or accountability for operational and troubleshooting mindset in the LLM Apps domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A new workload must launch quickly with strong operational and troubleshooting mindset posture in the LLM Apps domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A review shows that operational and troubleshooting mindset decisions in the LLM Apps domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team needs better observability for operational and troubleshooting mindset in the LLM Apps domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A postmortem shows that weak operational and troubleshooting mindset practices in the LLM Apps domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "For the GenAI-Dev-Pro LLM Apps domain, a team needs to improve cost and performance trade-offs while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production incident exposed weaknesses in cost and performance trade-offs for the LLM Apps domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A regulated workload depends on strong cost and performance trade-offs controls in the LLM Apps domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A platform team needs scalable cost and performance trade-offs practices for the LLM Apps domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "Costs are rising in the LLM Apps domain because cost and performance trade-offs is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team wants safer change management around cost and performance trade-offs in the LLM Apps domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "The GenAI-Dev-Pro blueprint for LLM Apps needs better resilience around cost and performance trade-offs. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team cannot prove ownership or accountability for cost and performance trade-offs in the LLM Apps domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A new workload must launch quickly with strong cost and performance trade-offs posture in the LLM Apps domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A review shows that cost and performance trade-offs decisions in the LLM Apps domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team needs better observability for cost and performance trade-offs in the LLM Apps domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A postmortem shows that weak cost and performance trade-offs practices in the LLM Apps domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "For the GenAI-Dev-Pro LLM Apps domain, a team needs to improve best-practice implementation details while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production incident exposed weaknesses in best-practice implementation details for the LLM Apps domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A regulated workload depends on strong best-practice implementation details controls in the LLM Apps domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A platform team needs scalable best-practice implementation details practices for the LLM Apps domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "Costs are rising in the LLM Apps domain because best-practice implementation details is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team wants safer change management around best-practice implementation details in the LLM Apps domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "The GenAI-Dev-Pro blueprint for LLM Apps needs better resilience around best-practice implementation details. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team cannot prove ownership or accountability for best-practice implementation details in the LLM Apps domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A new workload must launch quickly with strong best-practice implementation details posture in the LLM Apps domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A review shows that best-practice implementation details decisions in the LLM Apps domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team needs better observability for best-practice implementation details in the LLM Apps domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A postmortem shows that weak best-practice implementation details practices in the LLM Apps domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "For the GenAI-Dev-Pro LLM Apps domain, a team needs to improve llm apps governance and reliability decisions while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production incident exposed weaknesses in llm apps governance and reliability decisions for the LLM Apps domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A regulated workload depends on strong llm apps governance and reliability decisions controls in the LLM Apps domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A platform team needs scalable llm apps governance and reliability decisions practices for the LLM Apps domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "Costs are rising in the LLM Apps domain because llm apps governance and reliability decisions is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team wants safer change management around llm apps governance and reliability decisions in the LLM Apps domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "The GenAI-Dev-Pro blueprint for LLM Apps needs better resilience around llm apps governance and reliability decisions. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team cannot prove ownership or accountability for llm apps governance and reliability decisions in the LLM Apps domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A new workload must launch quickly with strong llm apps governance and reliability decisions posture in the LLM Apps domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A review shows that llm apps governance and reliability decisions decisions in the LLM Apps domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A team needs better observability for llm apps governance and reliability decisions in the LLM Apps domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A postmortem shows that weak llm apps governance and reliability decisions practices in the LLM Apps domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "For the GenAI-Dev-Pro LLM Apps domain, a team needs to improve llm apps observability and automation standards while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A production incident exposed weaknesses in llm apps observability and automation standards for the LLM Apps domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A regulated workload depends on strong llm apps observability and automation standards controls in the LLM Apps domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "LLM Apps"
  },
  {
    "q": "A platform team needs scalable llm apps observability and automation standards practices for the LLM Apps domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "LLM Apps"
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
