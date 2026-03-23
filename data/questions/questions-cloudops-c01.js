const CERT_META = {
  "id": "cloudops-c01",
  "code": "CloudOps-C01",
  "name": "CloudOps Engineer",
  "fullName": "AWS Certified SysOps Administrator - Associate",
  "emoji": "🛠️",
  "minutes": 130,
  "passingScore": 72,
  "examQuestions": 65,
  "color": "#06b6d4",
  "badge": "Associate",
  "description": "Operations, monitoring, resilience, and automation for AWS workloads.",
  "topics": [
    "Monitoring",
    "Automation",
    "Resilience",
    "Operations"
  ]
};

const TOPIC_RULES = [
  [/monitor|alarm|log|metric|cloudwatch|incident|observability/i, "Monitoring"],
  [/automation|runbook|eventbridge|lambda|systems manager|orchestration/i, "Automation"],
  [/resilien|backup|dr|failover|multi-az|recovery/i, "Resilience"],
  [/operations|governance|change|patch|capacity|cost/i, "Operations"]
];

const QUESTIONS = [
  {
    "q": "A team has frequent false-positive alerts during traffic spikes. What should be improved first?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "An ops team cannot identify whether latency is caused by app code or database calls. What is the best first step?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A service owner wants to reduce MTTR for recurring incidents. Which monitoring change has highest impact?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A company needs centralized visibility across many AWS accounts. Which monitoring approach is best?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A business-critical API needs customer-impact monitoring, not just infrastructure metrics. What should be tracked?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team sees high alert fatigue from duplicate notifications. Which control should be added?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A platform wants to detect missing scheduled jobs quickly. Which signal pattern is recommended?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team needs immutable history of alert threshold changes for audit. What should they use?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A workload has intermittent timeouts and little context in logs. What should be enabled first?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "An incident commander asks for better triage context in notifications. What should alarm payloads include?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team wants to monitor freshness of ingestion pipelines. What is best to alert on?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A shared service has noisy low-priority warnings. Which tuning action is most effective?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A dashboard looks healthy while users report failures. What is missing?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team needs near real-time anomaly detection on KPI drift. What pattern is best?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A product owner needs confidence in release health after deployment. Which monitoring action helps most?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A company wants automatic quarantine for noncompliant resources. Which architecture is best?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "An ops team uses manual remediation for recurring IAM misconfigurations. What should be automated first?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A platform team needs repeatable incident workflows across environments. Which method is best?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A team wants safe auto-remediation without causing new outages. What should be added?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A company has fragmented scripts for patching and configuration drift. What should replace them?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A response plan requires approval for high-risk remediations only. Which workflow pattern is best?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A team needs to roll out automation to multiple accounts with governance controls. Which design works best?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "An incident process requires human fallback when automation fails. What should be built in?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A company wants event-driven remediation from security findings. Which integration is most direct?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A team needs to prove automation changes are reviewed and versioned. What is required?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A runbook includes many sequential and parallel tasks. Which service pattern helps most?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A team wants to prevent unauthorized scripts from changing production. Which guardrail is best?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "An ops workflow fails silently when upstream APIs throttle. What automation control should be added?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A company wants zero-touch remediation for known low-risk issues. What should be implemented?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A team needs standard automation templates for all business units. What is best approach?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Automation"
  },
  {
    "q": "A service must survive AZ failure with minimal user impact. Which design principle is most important?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A team has backups but has never tested restore. What should be done first?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A platform needs lower blast radius from bad deploys. Which rollout pattern is best?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A company needs confidence in DR objectives. Which recurring activity is essential?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A queue-based workload suffers retry storms during outages. Which resilience control helps most?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "An architecture has a central dependency that can fail all workloads. What should be changed?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A team needs safer rollback for infrastructure changes. Which capability is most important?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A workload requires rapid failover between regions for critical transactions. What should be prioritized?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A service has unpredictable burst load and periodic throttling. Which resilience measure is best?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A team needs exactly-once-like outcomes in event processing. What should be added?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A platform needs planned maintenance without downtime. Which architecture choice supports this best?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A company wants to verify failover paths under load. What practice is recommended?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "An incident postmortem shows dependencies timing out cascaded failures. What pattern should be used?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A storage layer needs recovery from accidental deletion. Which strategy is most reliable?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A team requires resilient secret retrieval during network disruptions. What should be designed?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Resilience"
  },
  {
    "q": "A company needs standardized change management across cloud environments. Which process should be introduced?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A team has rising cloud cost from idle resources. What operations practice should be adopted?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "An ops team needs patch compliance evidence for audits. What should be automated?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A platform needs clear ownership for services and incidents. Which control should be enforced?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A company wants better capacity forecasting for seasonal peaks. Which operational input is most valuable?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A team frequently performs emergency changes without review. What should be strengthened first?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A business wants faster onboarding of new workloads with baseline controls. What is best?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A team needs stronger operational security for admin access. Which approach is recommended?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A company requires consistent tagging for cost and ownership visibility. What should be used?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A platform team wants fewer configuration drifts across environments. Which operational model is best?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A service has recurring incidents from undocumented runbooks. What should be improved?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A team needs inventory and compliance visibility for all instances. Which operations capability is key?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A company wants sustainable on-call operations. Which improvement has highest impact?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A team needs safe decommissioning of obsolete resources after migrations. What is best first step?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "A platform needs operational KPIs tied to engineering work. What should be embedded in planning?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Operations"
  },
  {
    "q": "For the CloudOps-C01 Monitoring domain, a team needs to improve operational telemetry, alarms, and incident signal quality. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A production incident exposed weaknesses in operational telemetry, alarms, and incident signal quality. for the Monitoring domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A regulated workload depends on strong operational telemetry, alarms, and incident signal quality. controls in the Monitoring domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A platform team needs scalable operational telemetry, alarms, and incident signal quality. practices for the Monitoring domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "Costs are rising in the Monitoring domain because operational telemetry, alarms, and incident signal quality. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team wants safer change management around operational telemetry, alarms, and incident signal quality. in the Monitoring domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "The CloudOps-C01 blueprint for Monitoring needs better resilience around operational telemetry, alarms, and incident signal quality.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team cannot prove ownership or accountability for operational telemetry, alarms, and incident signal quality. in the Monitoring domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A new workload must launch quickly with strong operational telemetry, alarms, and incident signal quality. posture in the Monitoring domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A review shows that operational telemetry, alarms, and incident signal quality. decisions in the Monitoring domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team needs better observability for operational telemetry, alarms, and incident signal quality. in the Monitoring domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A postmortem shows that weak operational telemetry, alarms, and incident signal quality. practices in the Monitoring domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "For the CloudOps-C01 Monitoring domain, a team needs to improve slo and alert design while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A production incident exposed weaknesses in slo and alert design for the Monitoring domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A regulated workload depends on strong slo and alert design controls in the Monitoring domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A platform team needs scalable slo and alert design practices for the Monitoring domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "Costs are rising in the Monitoring domain because slo and alert design is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team wants safer change management around slo and alert design in the Monitoring domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "The CloudOps-C01 blueprint for Monitoring needs better resilience around slo and alert design. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team cannot prove ownership or accountability for slo and alert design in the Monitoring domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A new workload must launch quickly with strong slo and alert design posture in the Monitoring domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A review shows that slo and alert design decisions in the Monitoring domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team needs better observability for slo and alert design in the Monitoring domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A postmortem shows that weak slo and alert design practices in the Monitoring domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "For the CloudOps-C01 Monitoring domain, a team needs to improve log/metric/tracing usage while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A production incident exposed weaknesses in log/metric/tracing usage for the Monitoring domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A regulated workload depends on strong log/metric/tracing usage controls in the Monitoring domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A platform team needs scalable log/metric/tracing usage practices for the Monitoring domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "Costs are rising in the Monitoring domain because log/metric/tracing usage is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team wants safer change management around log/metric/tracing usage in the Monitoring domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "The CloudOps-C01 blueprint for Monitoring needs better resilience around log/metric/tracing usage. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team cannot prove ownership or accountability for log/metric/tracing usage in the Monitoring domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A new workload must launch quickly with strong log/metric/tracing usage posture in the Monitoring domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A review shows that log/metric/tracing usage decisions in the Monitoring domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A team needs better observability for log/metric/tracing usage in the Monitoring domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A postmortem shows that weak log/metric/tracing usage practices in the Monitoring domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "For the CloudOps-C01 Monitoring domain, a team needs to improve on-call readiness while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A production incident exposed weaknesses in on-call readiness for the Monitoring domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A regulated workload depends on strong on-call readiness controls in the Monitoring domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Monitoring"
  },
  {
    "q": "A platform team needs scalable on-call readiness practices for the Monitoring domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Monitoring"
  }
];

const SERVICES = [
  {
    "name": "Monitoring",
    "emoji": "📈",
    "desc": "Operational telemetry, alarms, and incident signal quality.",
    "bullets": [
      "SLO and alert design",
      "Log/metric/tracing usage",
      "On-call readiness",
      "Signal-to-noise optimization",
      "Incident triage flow"
    ]
  },
  {
    "name": "Automation",
    "emoji": "🤖",
    "desc": "Runbook automation and event-driven remediation at scale.",
    "bullets": [
      "Operational orchestration",
      "Safe automated remediations",
      "Policy checks in automation",
      "Cross-account operations",
      "Rollback-capable workflows"
    ]
  },
  {
    "name": "Resilience",
    "emoji": "🧯",
    "desc": "High availability, backup strategy, and recovery confidence.",
    "bullets": [
      "Multi-AZ patterns",
      "DR planning and tests",
      "Failure isolation",
      "Recovery objectives",
      "Resilience game days"
    ]
  },
  {
    "name": "Operations",
    "emoji": "⚙️",
    "desc": "Day-2 operations, change control, and platform governance.",
    "bullets": [
      "Patch and config hygiene",
      "Capacity planning",
      "Cost-aware ops",
      "Change management",
      "Operational security"
    ]
  }
];
