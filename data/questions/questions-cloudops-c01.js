const CERT_META = {
  "id": "cloudops-c01",
  "code": "CloudOps-C01",
  "name": "CloudOps Engineer",
  "fullName": "AWS Certified SysOps Administrator - Associate",
  "emoji": "\ud83d\udee0\ufe0f",
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
  [/monitor|alarm|log|metric|cloudwatch|incident|observability/i, 'Monitoring'],
  [/automation|runbook|eventbridge|lambda|systems manager|orchestration/i, 'Automation'],
  [/resilien|backup|dr|failover|multi-az|recovery/i, 'Resilience'],
  [/operations|governance|change|patch|capacity|cost/i, 'Operations'],
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
  }
];

const SERVICES = [
  {
    "name": "Monitoring",
    "emoji": "\ud83d\udcc8",
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
    "emoji": "\ud83e\udd16",
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
    "emoji": "\ud83e\uddef",
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
    "emoji": "\u2699\ufe0f",
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
