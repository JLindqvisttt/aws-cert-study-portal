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
  [/hybrid|connectivity/i, "Hybrid Connectivity"],
  [/routing/i, "Routing"],
  [/dns/i, "DNS"],
  [/network|security/i, "Network Security"]
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
  },
  {
    "q": "For the ANS-C01 Hybrid Connectivity domain, a team needs to improve hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production incident exposed weaknesses in hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. for the Hybrid Connectivity domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A regulated workload depends on strong hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. controls in the Hybrid Connectivity domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A platform team needs scalable hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. practices for the Hybrid Connectivity domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "Costs are rising in the Hybrid Connectivity domain because hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team wants safer change management around hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. in the Hybrid Connectivity domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "The ANS-C01 blueprint for Hybrid Connectivity needs better resilience around hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team cannot prove ownership or accountability for hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. in the Hybrid Connectivity domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A new workload must launch quickly with strong hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. posture in the Hybrid Connectivity domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A review shows that hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. decisions in the Hybrid Connectivity domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team needs better observability for hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. in the Hybrid Connectivity domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A postmortem shows that weak hybrid connectivity domain review aligned to exam-style scenarios and architecture decisions. practices in the Hybrid Connectivity domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "For the ANS-C01 Hybrid Connectivity domain, a team needs to improve core hybrid connectivity patterns and design choices while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production incident exposed weaknesses in core hybrid connectivity patterns and design choices for the Hybrid Connectivity domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A regulated workload depends on strong core hybrid connectivity patterns and design choices controls in the Hybrid Connectivity domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A platform team needs scalable core hybrid connectivity patterns and design choices practices for the Hybrid Connectivity domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "Costs are rising in the Hybrid Connectivity domain because core hybrid connectivity patterns and design choices is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team wants safer change management around core hybrid connectivity patterns and design choices in the Hybrid Connectivity domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "The ANS-C01 blueprint for Hybrid Connectivity needs better resilience around core hybrid connectivity patterns and design choices. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team cannot prove ownership or accountability for core hybrid connectivity patterns and design choices in the Hybrid Connectivity domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A new workload must launch quickly with strong core hybrid connectivity patterns and design choices posture in the Hybrid Connectivity domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A review shows that core hybrid connectivity patterns and design choices decisions in the Hybrid Connectivity domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team needs better observability for core hybrid connectivity patterns and design choices in the Hybrid Connectivity domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A postmortem shows that weak core hybrid connectivity patterns and design choices practices in the Hybrid Connectivity domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "For the ANS-C01 Hybrid Connectivity domain, a team needs to improve high-availability and security considerations while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production incident exposed weaknesses in high-availability and security considerations for the Hybrid Connectivity domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A regulated workload depends on strong high-availability and security considerations controls in the Hybrid Connectivity domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A platform team needs scalable high-availability and security considerations practices for the Hybrid Connectivity domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "Costs are rising in the Hybrid Connectivity domain because high-availability and security considerations is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team wants safer change management around high-availability and security considerations in the Hybrid Connectivity domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "The ANS-C01 blueprint for Hybrid Connectivity needs better resilience around high-availability and security considerations. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team cannot prove ownership or accountability for high-availability and security considerations in the Hybrid Connectivity domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A new workload must launch quickly with strong high-availability and security considerations posture in the Hybrid Connectivity domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A review shows that high-availability and security considerations decisions in the Hybrid Connectivity domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team needs better observability for high-availability and security considerations in the Hybrid Connectivity domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A postmortem shows that weak high-availability and security considerations practices in the Hybrid Connectivity domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "For the ANS-C01 Hybrid Connectivity domain, a team needs to improve operational and troubleshooting mindset while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production incident exposed weaknesses in operational and troubleshooting mindset for the Hybrid Connectivity domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A regulated workload depends on strong operational and troubleshooting mindset controls in the Hybrid Connectivity domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A platform team needs scalable operational and troubleshooting mindset practices for the Hybrid Connectivity domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "Costs are rising in the Hybrid Connectivity domain because operational and troubleshooting mindset is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team wants safer change management around operational and troubleshooting mindset in the Hybrid Connectivity domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "The ANS-C01 blueprint for Hybrid Connectivity needs better resilience around operational and troubleshooting mindset. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team cannot prove ownership or accountability for operational and troubleshooting mindset in the Hybrid Connectivity domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A new workload must launch quickly with strong operational and troubleshooting mindset posture in the Hybrid Connectivity domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A review shows that operational and troubleshooting mindset decisions in the Hybrid Connectivity domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team needs better observability for operational and troubleshooting mindset in the Hybrid Connectivity domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A postmortem shows that weak operational and troubleshooting mindset practices in the Hybrid Connectivity domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "For the ANS-C01 Hybrid Connectivity domain, a team needs to improve cost and performance trade-offs while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production incident exposed weaknesses in cost and performance trade-offs for the Hybrid Connectivity domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A regulated workload depends on strong cost and performance trade-offs controls in the Hybrid Connectivity domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A platform team needs scalable cost and performance trade-offs practices for the Hybrid Connectivity domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "Costs are rising in the Hybrid Connectivity domain because cost and performance trade-offs is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team wants safer change management around cost and performance trade-offs in the Hybrid Connectivity domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "The ANS-C01 blueprint for Hybrid Connectivity needs better resilience around cost and performance trade-offs. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team cannot prove ownership or accountability for cost and performance trade-offs in the Hybrid Connectivity domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A new workload must launch quickly with strong cost and performance trade-offs posture in the Hybrid Connectivity domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A review shows that cost and performance trade-offs decisions in the Hybrid Connectivity domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team needs better observability for cost and performance trade-offs in the Hybrid Connectivity domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A postmortem shows that weak cost and performance trade-offs practices in the Hybrid Connectivity domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "For the ANS-C01 Hybrid Connectivity domain, a team needs to improve best-practice implementation details while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production incident exposed weaknesses in best-practice implementation details for the Hybrid Connectivity domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A regulated workload depends on strong best-practice implementation details controls in the Hybrid Connectivity domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A platform team needs scalable best-practice implementation details practices for the Hybrid Connectivity domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "Costs are rising in the Hybrid Connectivity domain because best-practice implementation details is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team wants safer change management around best-practice implementation details in the Hybrid Connectivity domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "The ANS-C01 blueprint for Hybrid Connectivity needs better resilience around best-practice implementation details. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team cannot prove ownership or accountability for best-practice implementation details in the Hybrid Connectivity domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A new workload must launch quickly with strong best-practice implementation details posture in the Hybrid Connectivity domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A review shows that best-practice implementation details decisions in the Hybrid Connectivity domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team needs better observability for best-practice implementation details in the Hybrid Connectivity domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A postmortem shows that weak best-practice implementation details practices in the Hybrid Connectivity domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "For the ANS-C01 Hybrid Connectivity domain, a team needs to improve hybrid connectivity governance and reliability decisions while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production incident exposed weaknesses in hybrid connectivity governance and reliability decisions for the Hybrid Connectivity domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A regulated workload depends on strong hybrid connectivity governance and reliability decisions controls in the Hybrid Connectivity domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A platform team needs scalable hybrid connectivity governance and reliability decisions practices for the Hybrid Connectivity domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "Costs are rising in the Hybrid Connectivity domain because hybrid connectivity governance and reliability decisions is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team wants safer change management around hybrid connectivity governance and reliability decisions in the Hybrid Connectivity domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "The ANS-C01 blueprint for Hybrid Connectivity needs better resilience around hybrid connectivity governance and reliability decisions. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team cannot prove ownership or accountability for hybrid connectivity governance and reliability decisions in the Hybrid Connectivity domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A new workload must launch quickly with strong hybrid connectivity governance and reliability decisions posture in the Hybrid Connectivity domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A review shows that hybrid connectivity governance and reliability decisions decisions in the Hybrid Connectivity domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A team needs better observability for hybrid connectivity governance and reliability decisions in the Hybrid Connectivity domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A postmortem shows that weak hybrid connectivity governance and reliability decisions practices in the Hybrid Connectivity domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "For the ANS-C01 Hybrid Connectivity domain, a team needs to improve hybrid connectivity observability and automation standards while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A production incident exposed weaknesses in hybrid connectivity observability and automation standards for the Hybrid Connectivity domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A regulated workload depends on strong hybrid connectivity observability and automation standards controls in the Hybrid Connectivity domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
  },
  {
    "q": "A platform team needs scalable hybrid connectivity observability and automation standards practices for the Hybrid Connectivity domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Hybrid Connectivity"
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
