const CERT_META = {
  "id": "dop-c02",
  "code": "DOP-C02",
  "name": "DevOps Engineer",
  "fullName": "AWS Certified DevOps Engineer - Professional",
  "emoji": "⚙️",
  "minutes": 180,
  "passingScore": 75,
  "examQuestions": 75,
  "color": "#f97316",
  "badge": "Professional",
  "description": "CI/CD, observability, reliability engineering, and security automation for AWS workloads.",
  "topics": [
    "CI/CD",
    "Observability",
    "Reliability",
    "Security Automation"
  ]
};

const TOPIC_RULES = [
  [/ci\/cd|pipeline|codebuild|codedeploy|codepipeline|artifact|release/i, "CI/CD"],
  [/observability|monitoring|cloudwatch|log|trace|x-ray|alarm|slo/i, "Observability"],
  [/reliability|rollback|canary|blue\/green|autoscaling|failover/i, "Reliability"],
  [/security|automation|secrets|iam|policy|compliance|guardrail/i, "Security Automation"]
];

const QUESTIONS = [
  {
    "q": "A team wants one pipeline definition for dev, staging, and prod with account-level isolation. Which pattern is best?",
    "options": [
      "Separate manually maintained pipelines per environment",
      "Single CodePipeline with cross-account deployment roles and parameterized stages",
      "Deploy directly from developer machines",
      "Use one shared production account"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A release process needs immutable artifacts and cryptographic verification before production. Which approach is best?",
    "options": [
      "Rebuild artifacts in each environment",
      "Sign build artifacts and verify signatures at promotion gates",
      "Store artifacts on developer laptops",
      "Skip provenance checks to improve speed"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A company experiences frequent deployment failures due to environment drift. What should be done first?",
    "options": [
      "Increase deployment timeout",
      "Adopt infrastructure as code with deterministic environment provisioning",
      "Disable pre-deployment checks",
      "Allow manual hotfixes only"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A platform team needs manual approval only for high-risk production changes. Which design works best?",
    "options": [
      "Manual approval on every commit",
      "Risk-based conditional approval stage with automated change classification",
      "No approvals at all",
      "Separate production pipeline with no tests"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A service has zero-downtime requirements and wants gradual rollout with automatic rollback on alarms. Which strategy is best?",
    "options": [
      "All-at-once deployment",
      "Canary or linear deployment with alarm-driven rollback",
      "Blue/green without health checks",
      "Manual DNS switch after deployment"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team wants to reduce lead time by parallelizing tests without lowering confidence. What should they do?",
    "options": [
      "Run only unit tests",
      "Split test suites by risk and run in parallel with quality thresholds",
      "Remove integration tests",
      "Run all tests post-production"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A deployment framework must support safe database schema evolution across versions. Which practice is best?",
    "options": [
      "Breaking schema changes first",
      "Backward-compatible expand/contract migration pattern",
      "Manual DB edits in production",
      "No schema versioning"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A company needs centralized pipeline governance but autonomous team releases. Which model is best?",
    "options": [
      "One monolithic pipeline for every team",
      "Golden pipeline templates with team-owned repositories and controls",
      "No standardization",
      "Release windows only once per month"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A security audit requires proof that code in production came from reviewed commits. Which control is most important?",
    "options": [
      "Branch naming standards",
      "Protected branches, required reviews, and signed commit/build traceability",
      "Manual release notes",
      "Periodic screenshot evidence"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team wants to speed deployment by caching dependencies, but builds must remain reproducible. What is best?",
    "options": [
      "Share mutable cache across all branches",
      "Versioned dependency caches with lockfiles and cache invalidation rules",
      "Disable lockfiles",
      "Download latest dependencies each run"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "An application has frequent rollback events due to config drift. Which control reduces this risk most?",
    "options": [
      "Hardcode environment variables in code",
      "Centralized configuration management with versioning and promotion flow",
      "Manual console edits",
      "Store config in CI job history"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A pipeline must deploy to private subnets without opening inbound access. Which approach is best?",
    "options": [
      "Public bastion with shared credentials",
      "Use deployment agents/roles with VPC endpoints and outbound-only control channels",
      "Disable network ACLs",
      "Temporarily open SSH from internet"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A company needs rapid rollback of container releases across multiple clusters. Which pattern is best?",
    "options": [
      "Rebuild old image on rollback",
      "Immutable versioned images with release metadata and instant traffic reversion",
      "Delete old images immediately",
      "Patch containers in place"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A platform team wants to prevent accidental production deploys from feature branches. What should be implemented?",
    "options": [
      "Convention-based warnings",
      "Branch protections and explicit deployment policy checks in pipeline",
      "Disable CI for feature branches",
      "Separate git server per team"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A release includes risky infrastructure changes and new application code. Which sequence is safest?",
    "options": [
      "Deploy both at once",
      "Provision infrastructure first, verify, then progressive app rollout",
      "Deploy app first then infra",
      "Skip verification to shorten downtime"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "An operations team wants to reduce alert fatigue from noisy alarms. Which action should be prioritized?",
    "options": [
      "Create more alarms for every metric",
      "Define SLO-based alerts with deduplication and actionable thresholds",
      "Disable all warning alarms",
      "Route all alerts to one email inbox"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A microservices platform needs end-to-end transaction visibility. Which telemetry strategy is best?",
    "options": [
      "Logs only",
      "Distributed tracing with correlation IDs across services",
      "CPU metrics only",
      "Weekly packet captures"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A company wants a single dashboard across many AWS accounts and Regions. Which approach is most maintainable?",
    "options": [
      "Manual dashboard copies per account",
      "Cross-account observability with centralized metrics/log ingestion",
      "SSH and tail logs from instances",
      "One dashboard per service owner only"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A critical API has intermittent latency spikes. What should be done first during investigation?",
    "options": [
      "Scale all components immediately",
      "Correlate traces, logs, and dependency metrics for the affected path",
      "Restart production services",
      "Disable request logging"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A team needs near real-time anomaly detection for business and technical KPIs. Which pattern is best?",
    "options": [
      "Daily batch reporting only",
      "Streaming metrics with anomaly detection and incident hooks",
      "Weekly manual review",
      "Static dashboards without alerts"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A platform team cannot identify who changed alarm thresholds. Which control is required?",
    "options": [
      "Store alarm configs in chat messages",
      "Manage alarm definitions as code with audited change history",
      "Allow direct console edits",
      "Recreate alarms monthly"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "An incident response team needs faster triage from alerts. What should be added to alarms?",
    "options": [
      "Longer names",
      "Runbook links, ownership metadata, and context-rich descriptions",
      "Random tags",
      "Extra SNS topics only"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A service emits high-cardinality metrics that drive up cost. What is the best optimization?",
    "options": [
      "Stop metric collection",
      "Review dimensions and aggregate where high-cardinality adds limited value",
      "Increase retention indefinitely",
      "Duplicate metrics across namespaces"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A team needs long-term queryable logs for compliance and troubleshooting. Which architecture fits best?",
    "options": [
      "Store logs only on ephemeral volumes",
      "Tiered log storage with lifecycle to cost-efficient analytics",
      "Delete logs after 24 hours",
      "Export logs to local desktops"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A production issue spans queueing, API, and database layers. Which observability capability is most valuable?",
    "options": [
      "Single host CPU graph",
      "Service map with dependency health and latency breakdown",
      "Weekly status meeting",
      "Manual ping checks"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A team wants to detect silent failures in scheduled jobs. What should be implemented?",
    "options": [
      "Only failure logs",
      "Heartbeat metrics and missing-signal alarms",
      "Lower cron frequency",
      "Disable retries"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A company needs to measure customer impact during incidents, not only system metrics. What is best?",
    "options": [
      "Monitor server CPU only",
      "Track user-journey SLIs and error budgets",
      "Count deploys per week",
      "Use log volume as availability metric"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A central team wants safer production troubleshooting. Which logging practice should be avoided?",
    "options": [
      "Structured logs with request IDs",
      "Logging secrets and personal data in plaintext",
      "Consistent log schema",
      "Redaction controls"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A deployment introduced a subtle performance regression. Which approach helps confirm root cause fastest?",
    "options": [
      "Scale out blindly",
      "Compare pre/post deployment traces and latency histograms",
      "Rollback without analysis",
      "Restart database"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A team wants to correlate incidents with release events automatically. Which integration is best?",
    "options": [
      "Manual spreadsheet tracking",
      "Emit deployment markers and annotate dashboards/alerts",
      "Disable deployment notifications",
      "Use only calendar invites"
    ],
    "answer": 1,
    "topic": "Observability"
  },
  {
    "q": "A critical API requires zero-impact releases under variable traffic. Which deployment strategy is best?",
    "options": [
      "All-at-once updates",
      "Blue/green or canary with automatic health-based rollback",
      "Manual restart during peak",
      "Single server deployment"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A team needs to validate disaster recovery readiness continuously. What should they implement?",
    "options": [
      "Annual tabletop only",
      "Automated DR game days with measurable RTO/RPO outcomes",
      "Disable failover tests in production-like environments",
      "Document-only DR plan"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A queue-backed workload suffers from retry storms during downstream outages. Which control is best?",
    "options": [
      "Unlimited retries with no delay",
      "Exponential backoff, jitter, and dead-letter handling",
      "Disable retries entirely",
      "Increase thread count only"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A stateful service needs resilience against AZ failure. Which architecture is most appropriate?",
    "options": [
      "Single-AZ persistent store",
      "Multi-AZ data replication with automatic failover",
      "Nightly backups only",
      "Manual snapshot restore"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A team wants to reduce incident blast radius from bad deploys. Which approach works best?",
    "options": [
      "Deploy globally at once",
      "Phased regional rollout with stop conditions and rollback hooks",
      "Disable alarms during deploy",
      "Use one shared account for all stages"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A service is overprovisioned for peak but idle most hours. Which reliability-safe optimization is best?",
    "options": [
      "Disable autoscaling",
      "Use target tracking autoscaling with tested min capacity floors",
      "Single large instance only",
      "Spot instances for critical baseline with no fallback"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A business-critical workflow requires exactly-once semantics in processing. Which design helps most?",
    "options": [
      "At-least-once without idempotency",
      "Idempotent handlers with deduplication keys and transactional boundaries",
      "Disable retries",
      "Manual replay only"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A team needs confidence that rollback will succeed under load. What should they do?",
    "options": [
      "Trust theoretical runbooks",
      "Continuously test rollback paths in production-like traffic scenarios",
      "Rollback only in emergencies",
      "Avoid release metadata"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "An event-driven system needs protection against poison messages. Which pattern is best?",
    "options": [
      "Infinite retries",
      "Retry policy with DLQ and quarantine/inspection workflow",
      "Drop failed messages silently",
      "Pause all consumers permanently"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A team wants resilience against dependency outages in upstream services. Which mechanism is best?",
    "options": [
      "Increase timeout everywhere",
      "Circuit breakers with graceful degradation and fallback responses",
      "Synchronous retries only",
      "Disable caching"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A service needs predictable recovery from accidental data deletion. Which strategy is best?",
    "options": [
      "Periodic manual exports",
      "Automated backups, point-in-time recovery, and restore validation",
      "No backup for non-production",
      "Restore only after customer reports"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "An architecture review finds a single shared dependency that can fail all tenants. What should be done?",
    "options": [
      "Increase instance size",
      "Remove single points of failure with isolation boundaries and redundancy",
      "Add more logging only",
      "Run in one AZ for consistency"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A team needs controlled rollback of infrastructure changes. Which capability is most important?",
    "options": [
      "Manual console edits",
      "Versioned IaC with stack policy and automated drift detection",
      "One shared admin credential",
      "No change set previews"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A latency-sensitive service wants high availability with minimal failover impact. Which approach is best?",
    "options": [
      "Warm standby tested yearly",
      "Active-active routing with health checks and state replication",
      "Cold backup on tape",
      "One Region only"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A release caused high error rates in one region only. What immediate action is most appropriate?",
    "options": [
      "Continue rollout globally",
      "Halt rollout and rollback affected region while preserving healthy regions",
      "Disable alerts",
      "Delete deployment history"
    ],
    "answer": 1,
    "topic": "Reliability"
  },
  {
    "q": "A company wants to prevent secrets from being exposed in CI logs and build artifacts. Which control is most effective?",
    "options": [
      "Store secrets in environment variables in plaintext",
      "Use secrets manager integration with masked outputs and short-lived credentials",
      "Commit encrypted secrets with shared key in repo",
      "Email secrets to release managers"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A security team needs mandatory vulnerability scans before production deployment. Which pipeline pattern is best?",
    "options": [
      "Run scans after deployment",
      "Add blocking security scan stages with severity-based policy gates",
      "Manual scans once per quarter",
      "Skip scan for hotfixes"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A team must enforce least privilege for deployment roles across accounts. What is best?",
    "options": [
      "AdministratorAccess everywhere",
      "Scoped IAM roles with permission boundaries and session controls",
      "Long-lived root keys",
      "Shared static credentials"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A compliance program requires tamper-evident evidence of pipeline actions. Which source is primary?",
    "options": [
      "Chat transcripts",
      "CloudTrail audit logs with centralized immutable storage",
      "Screenshot archives",
      "Developer memory"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A platform team wants to block deployment of unapproved container images. Which control is best?",
    "options": [
      "Naming conventions only",
      "Admission/policy checks validating trusted registry and signatures",
      "Post-deployment warning emails",
      "Manual review after incident"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A company needs automatic key rotation for application secrets without code changes. Which design helps most?",
    "options": [
      "Hardcoded secrets in config files",
      "Managed secrets rotation with runtime retrieval",
      "Quarterly manual key updates",
      "Store secrets in build artifacts"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A release process must ensure dependencies have no critical CVEs. Which workflow is best?",
    "options": [
      "Ignore transitive dependencies",
      "Software composition analysis with policy gate and approved exception path",
      "Scan only production branches monthly",
      "Manual package reviews only"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "An organization needs to prevent privilege escalation via CI runners. Which control is most important?",
    "options": [
      "Use shared runners with broad permissions",
      "Ephemeral isolated runners with scoped tokens and no persistent credentials",
      "Store runner credentials in plain text",
      "Allow sudo for all build steps"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A team must prove production artifacts were built from approved source. Which capability is key?",
    "options": [
      "Manual changelog edits",
      "Artifact provenance and attestations linked to signed commits",
      "Release notes in spreadsheets",
      "Random sampling"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A company wants automatic response to high-risk IAM changes. Which pattern is best?",
    "options": [
      "Weekly manual audits",
      "Event-driven detection with immediate rollback/quarantine workflow",
      "Disable IAM activity logs",
      "Open support ticket after incidents"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A platform team needs policy checks for infrastructure templates before merge. What should be used?",
    "options": [
      "Manual linting only",
      "Policy-as-code static checks integrated into PR pipeline",
      "Post-production drift reports only",
      "Skip checks for trusted contributors"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A service handles sensitive data and must ensure encryption is never disabled by mistake. Which control is best?",
    "options": [
      "Runbook reminders",
      "Preventive policy guardrails plus deployment-time validation",
      "Quarterly audits only",
      "Developer conventions"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A team needs secure temporary access for incident remediation without static credentials. Which method is best?",
    "options": [
      "Shared emergency user account",
      "Federated just-in-time role assumption with short session duration",
      "Permanent admin API keys",
      "Disable MFA for responders"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A CI pipeline publishes logs to centralized storage; auditors require PII protection. What should be implemented?",
    "options": [
      "Store logs unfiltered",
      "Log redaction/tokenization and access controls with least privilege",
      "Delete all logs after deploy",
      "Expose logs publicly for transparency"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "A team needs continuous compliance reporting with minimal manual work. Which architecture is best?",
    "options": [
      "Spreadsheet-based monthly review",
      "Automated control evaluation, aggregation dashboard, and evidence retention",
      "Penetration test only",
      "One-time audit before launch"
    ],
    "answer": 1,
    "topic": "Security Automation"
  },
  {
    "q": "For the DOP-C02 CI/CD domain, a team needs to improve automated software delivery with quality gates and progressive deployment strategies. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A production incident exposed weaknesses in automated software delivery with quality gates and progressive deployment strategies. for the CI/CD domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A regulated workload depends on strong automated software delivery with quality gates and progressive deployment strategies. controls in the CI/CD domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A platform team needs scalable automated software delivery with quality gates and progressive deployment strategies. practices for the CI/CD domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "Costs are rising in the CI/CD domain because automated software delivery with quality gates and progressive deployment strategies. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team wants safer change management around automated software delivery with quality gates and progressive deployment strategies. in the CI/CD domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "The DOP-C02 blueprint for CI/CD needs better resilience around automated software delivery with quality gates and progressive deployment strategies.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team cannot prove ownership or accountability for automated software delivery with quality gates and progressive deployment strategies. in the CI/CD domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A new workload must launch quickly with strong automated software delivery with quality gates and progressive deployment strategies. posture in the CI/CD domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A review shows that automated software delivery with quality gates and progressive deployment strategies. decisions in the CI/CD domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team needs better observability for automated software delivery with quality gates and progressive deployment strategies. in the CI/CD domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A postmortem shows that weak automated software delivery with quality gates and progressive deployment strategies. practices in the CI/CD domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "For the DOP-C02 CI/CD domain, a team needs to improve pipeline architecture and release safety patterns while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A production incident exposed weaknesses in pipeline architecture and release safety patterns for the CI/CD domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A regulated workload depends on strong pipeline architecture and release safety patterns controls in the CI/CD domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A platform team needs scalable pipeline architecture and release safety patterns practices for the CI/CD domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "Costs are rising in the CI/CD domain because pipeline architecture and release safety patterns is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team wants safer change management around pipeline architecture and release safety patterns in the CI/CD domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "The DOP-C02 blueprint for CI/CD needs better resilience around pipeline architecture and release safety patterns. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team cannot prove ownership or accountability for pipeline architecture and release safety patterns in the CI/CD domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A new workload must launch quickly with strong pipeline architecture and release safety patterns posture in the CI/CD domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A review shows that pipeline architecture and release safety patterns decisions in the CI/CD domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team needs better observability for pipeline architecture and release safety patterns in the CI/CD domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A postmortem shows that weak pipeline architecture and release safety patterns practices in the CI/CD domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "For the DOP-C02 CI/CD domain, a team needs to improve artifact security, provenance, and promotion strategy while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A production incident exposed weaknesses in artifact security, provenance, and promotion strategy for the CI/CD domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A regulated workload depends on strong artifact security, provenance, and promotion strategy controls in the CI/CD domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A platform team needs scalable artifact security, provenance, and promotion strategy practices for the CI/CD domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "Costs are rising in the CI/CD domain because artifact security, provenance, and promotion strategy is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team wants safer change management around artifact security, provenance, and promotion strategy in the CI/CD domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "The DOP-C02 blueprint for CI/CD needs better resilience around artifact security, provenance, and promotion strategy. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team cannot prove ownership or accountability for artifact security, provenance, and promotion strategy in the CI/CD domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A new workload must launch quickly with strong artifact security, provenance, and promotion strategy posture in the CI/CD domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A review shows that artifact security, provenance, and promotion strategy decisions in the CI/CD domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A team needs better observability for artifact security, provenance, and promotion strategy in the CI/CD domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A postmortem shows that weak artifact security, provenance, and promotion strategy practices in the CI/CD domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "For the DOP-C02 CI/CD domain, a team needs to improve automated tests and deployment approvals while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A production incident exposed weaknesses in automated tests and deployment approvals for the CI/CD domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A regulated workload depends on strong automated tests and deployment approvals controls in the CI/CD domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "CI/CD"
  },
  {
    "q": "A platform team needs scalable automated tests and deployment approvals practices for the CI/CD domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "CI/CD"
  }
];

const SERVICES = [
  {
    "name": "CI/CD",
    "emoji": "🔄",
    "desc": "Automated software delivery with quality gates and progressive deployment strategies.",
    "bullets": [
      "Pipeline architecture and release safety patterns",
      "Artifact security, provenance, and promotion strategy",
      "Automated tests and deployment approvals",
      "Rollback design and blast-radius control",
      "Cross-account deployment governance"
    ]
  },
  {
    "name": "Observability",
    "emoji": "📊",
    "desc": "Metrics, logs, traces, and actionable operations telemetry at scale.",
    "bullets": [
      "Golden signals and SLO instrumentation",
      "Centralized logging architecture",
      "Tracing strategy for distributed systems",
      "Alarm quality and incident response",
      "Operational analytics and runbook linkage"
    ]
  },
  {
    "name": "Reliability",
    "emoji": "✅",
    "desc": "Resilient operations, automated recovery, and safe rollback patterns.",
    "bullets": [
      "Progressive delivery and automatic rollback",
      "Fault isolation and blast-radius reduction",
      "Chaos and resilience testing practices",
      "Scalable recovery automation",
      "Backup and disaster recovery integration"
    ]
  },
  {
    "name": "Security Automation",
    "emoji": "🧱",
    "desc": "Security controls embedded in delivery workflows and runtime operations.",
    "bullets": [
      "Identity controls in deployment automation",
      "Secrets lifecycle and key management",
      "Policy-as-code and preventive checks",
      "Continuous vulnerability management",
      "Automated compliance evidence collection"
    ]
  }
];
