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
  [/problem|framing/i, "Problem Framing"],
  [/feature|engineering/i, "Feature Engineering"],
  [/model|tuning/i, "Model Tuning"],
  [/deployment/i, "Deployment"]
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
  },
  {
    "q": "For the MLS-C01 Problem Framing domain, a team needs to improve problem framing domain review aligned to exam-style scenarios and architecture decisions. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production incident exposed weaknesses in problem framing domain review aligned to exam-style scenarios and architecture decisions. for the Problem Framing domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A regulated workload depends on strong problem framing domain review aligned to exam-style scenarios and architecture decisions. controls in the Problem Framing domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A platform team needs scalable problem framing domain review aligned to exam-style scenarios and architecture decisions. practices for the Problem Framing domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "Costs are rising in the Problem Framing domain because problem framing domain review aligned to exam-style scenarios and architecture decisions. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team wants safer change management around problem framing domain review aligned to exam-style scenarios and architecture decisions. in the Problem Framing domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "The MLS-C01 blueprint for Problem Framing needs better resilience around problem framing domain review aligned to exam-style scenarios and architecture decisions.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team cannot prove ownership or accountability for problem framing domain review aligned to exam-style scenarios and architecture decisions. in the Problem Framing domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A new workload must launch quickly with strong problem framing domain review aligned to exam-style scenarios and architecture decisions. posture in the Problem Framing domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A review shows that problem framing domain review aligned to exam-style scenarios and architecture decisions. decisions in the Problem Framing domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team needs better observability for problem framing domain review aligned to exam-style scenarios and architecture decisions. in the Problem Framing domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A postmortem shows that weak problem framing domain review aligned to exam-style scenarios and architecture decisions. practices in the Problem Framing domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "For the MLS-C01 Problem Framing domain, a team needs to improve core problem framing patterns and design choices while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production incident exposed weaknesses in core problem framing patterns and design choices for the Problem Framing domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A regulated workload depends on strong core problem framing patterns and design choices controls in the Problem Framing domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A platform team needs scalable core problem framing patterns and design choices practices for the Problem Framing domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "Costs are rising in the Problem Framing domain because core problem framing patterns and design choices is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team wants safer change management around core problem framing patterns and design choices in the Problem Framing domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "The MLS-C01 blueprint for Problem Framing needs better resilience around core problem framing patterns and design choices. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team cannot prove ownership or accountability for core problem framing patterns and design choices in the Problem Framing domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A new workload must launch quickly with strong core problem framing patterns and design choices posture in the Problem Framing domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A review shows that core problem framing patterns and design choices decisions in the Problem Framing domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team needs better observability for core problem framing patterns and design choices in the Problem Framing domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A postmortem shows that weak core problem framing patterns and design choices practices in the Problem Framing domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "For the MLS-C01 Problem Framing domain, a team needs to improve high-availability and security considerations while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production incident exposed weaknesses in high-availability and security considerations for the Problem Framing domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A regulated workload depends on strong high-availability and security considerations controls in the Problem Framing domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A platform team needs scalable high-availability and security considerations practices for the Problem Framing domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "Costs are rising in the Problem Framing domain because high-availability and security considerations is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team wants safer change management around high-availability and security considerations in the Problem Framing domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "The MLS-C01 blueprint for Problem Framing needs better resilience around high-availability and security considerations. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team cannot prove ownership or accountability for high-availability and security considerations in the Problem Framing domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A new workload must launch quickly with strong high-availability and security considerations posture in the Problem Framing domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A review shows that high-availability and security considerations decisions in the Problem Framing domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team needs better observability for high-availability and security considerations in the Problem Framing domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A postmortem shows that weak high-availability and security considerations practices in the Problem Framing domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "For the MLS-C01 Problem Framing domain, a team needs to improve operational and troubleshooting mindset while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production incident exposed weaknesses in operational and troubleshooting mindset for the Problem Framing domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A regulated workload depends on strong operational and troubleshooting mindset controls in the Problem Framing domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A platform team needs scalable operational and troubleshooting mindset practices for the Problem Framing domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "Costs are rising in the Problem Framing domain because operational and troubleshooting mindset is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team wants safer change management around operational and troubleshooting mindset in the Problem Framing domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "The MLS-C01 blueprint for Problem Framing needs better resilience around operational and troubleshooting mindset. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team cannot prove ownership or accountability for operational and troubleshooting mindset in the Problem Framing domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A new workload must launch quickly with strong operational and troubleshooting mindset posture in the Problem Framing domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A review shows that operational and troubleshooting mindset decisions in the Problem Framing domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team needs better observability for operational and troubleshooting mindset in the Problem Framing domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A postmortem shows that weak operational and troubleshooting mindset practices in the Problem Framing domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "For the MLS-C01 Problem Framing domain, a team needs to improve cost and performance trade-offs while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production incident exposed weaknesses in cost and performance trade-offs for the Problem Framing domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A regulated workload depends on strong cost and performance trade-offs controls in the Problem Framing domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A platform team needs scalable cost and performance trade-offs practices for the Problem Framing domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "Costs are rising in the Problem Framing domain because cost and performance trade-offs is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team wants safer change management around cost and performance trade-offs in the Problem Framing domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "The MLS-C01 blueprint for Problem Framing needs better resilience around cost and performance trade-offs. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team cannot prove ownership or accountability for cost and performance trade-offs in the Problem Framing domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A new workload must launch quickly with strong cost and performance trade-offs posture in the Problem Framing domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A review shows that cost and performance trade-offs decisions in the Problem Framing domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team needs better observability for cost and performance trade-offs in the Problem Framing domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A postmortem shows that weak cost and performance trade-offs practices in the Problem Framing domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "For the MLS-C01 Problem Framing domain, a team needs to improve best-practice implementation details while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production incident exposed weaknesses in best-practice implementation details for the Problem Framing domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A regulated workload depends on strong best-practice implementation details controls in the Problem Framing domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A platform team needs scalable best-practice implementation details practices for the Problem Framing domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "Costs are rising in the Problem Framing domain because best-practice implementation details is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team wants safer change management around best-practice implementation details in the Problem Framing domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "The MLS-C01 blueprint for Problem Framing needs better resilience around best-practice implementation details. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team cannot prove ownership or accountability for best-practice implementation details in the Problem Framing domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A new workload must launch quickly with strong best-practice implementation details posture in the Problem Framing domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A review shows that best-practice implementation details decisions in the Problem Framing domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team needs better observability for best-practice implementation details in the Problem Framing domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A postmortem shows that weak best-practice implementation details practices in the Problem Framing domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "For the MLS-C01 Problem Framing domain, a team needs to improve problem framing governance and reliability decisions while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production incident exposed weaknesses in problem framing governance and reliability decisions for the Problem Framing domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A regulated workload depends on strong problem framing governance and reliability decisions controls in the Problem Framing domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A platform team needs scalable problem framing governance and reliability decisions practices for the Problem Framing domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "Costs are rising in the Problem Framing domain because problem framing governance and reliability decisions is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team wants safer change management around problem framing governance and reliability decisions in the Problem Framing domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "The MLS-C01 blueprint for Problem Framing needs better resilience around problem framing governance and reliability decisions. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team cannot prove ownership or accountability for problem framing governance and reliability decisions in the Problem Framing domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A new workload must launch quickly with strong problem framing governance and reliability decisions posture in the Problem Framing domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A review shows that problem framing governance and reliability decisions decisions in the Problem Framing domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A team needs better observability for problem framing governance and reliability decisions in the Problem Framing domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A postmortem shows that weak problem framing governance and reliability decisions practices in the Problem Framing domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "For the MLS-C01 Problem Framing domain, a team needs to improve problem framing observability and automation standards while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A production incident exposed weaknesses in problem framing observability and automation standards for the Problem Framing domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A regulated workload depends on strong problem framing observability and automation standards controls in the Problem Framing domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Problem Framing"
  },
  {
    "q": "A platform team needs scalable problem framing observability and automation standards practices for the Problem Framing domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Problem Framing"
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
