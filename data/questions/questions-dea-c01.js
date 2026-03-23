const CERT_META = {
  "id": "dea-c01",
  "code": "DEA-C01",
  "name": "Data Engineer",
  "fullName": "AWS Certified Data Engineer - Associate",
  "emoji": "🧠",
  "minutes": 130,
  "passingScore": 72,
  "examQuestions": 65,
  "color": "#06b6d4",
  "badge": "Associate",
  "description": "Data ingestion, transformation, storage, and streaming design on AWS.",
  "topics": [
    "Ingestion",
    "Transformation",
    "Storage",
    "Streaming"
  ]
};

const TOPIC_RULES = [
  [/ingest|batch|cdc|dms|datasync|kinesis firehose/i, "Ingestion"],
  [/transform|etl|glue|spark|quality|schema/i, "Transformation"],
  [/storage|s3|lake|warehouse|redshift|partition/i, "Storage"],
  [/stream|kinesis|msk|kafka|event|window/i, "Streaming"]
];

const QUESTIONS = [
  {
    "q": "A company needs nightly ingestion of CSV files from on-premises to S3 with minimal custom code. Which approach is best?",
    "options": [
      "Build custom SCP transfer scripts",
      "Use AWS DataSync scheduled tasks",
      "Use CloudFront file uploads",
      "Use IAM users and manual copies"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A database migration requires continuous replication with minimal downtime. Which service is most suitable?",
    "options": [
      "AWS DMS with CDC",
      "Amazon Redshift Spectrum",
      "AWS Glue DataBrew",
      "Amazon Athena"
    ],
    "answer": 0,
    "topic": "Ingestion"
  },
  {
    "q": "A team ingests API events and must avoid duplicates during retries. Which design is best?",
    "options": [
      "No retry policy",
      "Idempotent writes using deterministic event keys",
      "Disable persistence",
      "Increase batch size only"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A partner sends files irregularly and the pipeline must trigger automatically when files arrive. What should be used?",
    "options": [
      "Manual cron checks",
      "S3 event notifications to ingestion workflow",
      "Weekly polling from desktop",
      "Disable notifications"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A company ingests 10 TB/day and wants cost-efficient transfer to S3. Which first optimization is practical?",
    "options": [
      "Store files uncompressed",
      "Compress and parallelize transfer with managed service tuning",
      "Use one small transfer thread",
      "Disable checksum validation"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "An ingestion pipeline reads from SaaS APIs with strict rate limits. What should be implemented?",
    "options": [
      "Unbounded concurrency",
      "Adaptive throttling with backoff and checkpointing",
      "No retries",
      "Delete failed records"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team needs secure cross-account ingestion to a central data lake. Which control is most important?",
    "options": [
      "Shared root credentials",
      "Cross-account roles and bucket policies with least privilege",
      "Public bucket access",
      "No encryption"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A batch feed often arrives with schema changes. How can ingestion remain resilient?",
    "options": [
      "Reject all changed files forever",
      "Use schema versioning and contract validation with quarantine path",
      "Disable validation",
      "Convert all fields to strings silently"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A pipeline ingests IoT data and occasionally sees late-arriving events. Which ingestion principle is key?",
    "options": [
      "Assume strict ordering",
      "Design for out-of-order handling and event-time metadata",
      "Drop late data",
      "Use only wall-clock time"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A company ingests audit logs and needs immutable retention. Which storage setting helps most?",
    "options": [
      "S3 Object Lock where required by policy",
      "Local temp storage",
      "Disable versioning",
      "Overwrite files daily"
    ],
    "answer": 0,
    "topic": "Ingestion"
  },
  {
    "q": "A team wants ingestion SLA alerts for delayed data arrival. What should be monitored?",
    "options": [
      "Only CPU utilization",
      "Freshness metrics and expected-arrival lag alarms",
      "Disk space on laptops",
      "Number of IAM users"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A new source must be onboarded quickly with standardized patterns. Which approach is best?",
    "options": [
      "Create custom pipeline each time",
      "Template-driven ingestion framework with configuration-based source adapters",
      "One-off manual imports",
      "Skip metadata capture"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team ingests clickstream data from mobile apps at high burst rates. Which service pair is common?",
    "options": [
      "Kinesis Data Streams and Firehose",
      "Amazon Route 53 and SNS",
      "EBS and EC2 only",
      "CloudFormation and IAM"
    ],
    "answer": 0,
    "topic": "Ingestion"
  },
  {
    "q": "A pipeline receives malformed records that must not block good data. What should be implemented?",
    "options": [
      "Fail entire batch",
      "Dead-letter/quarantine path with validation report",
      "Ignore parsing errors silently",
      "Delete raw inputs"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A migration project requires moving 500 TB in a limited WAN environment. Which option should be considered?",
    "options": [
      "Manual internet upload only",
      "AWS Snow Family for bulk transfer",
      "Use email attachments",
      "Disable integrity checks"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A data team runs complex nightly ETL and wants serverless scaling. Which service is most suitable?",
    "options": [
      "AWS Glue jobs",
      "Amazon S3 static hosting",
      "AWS WAF",
      "Amazon Cognito"
    ],
    "answer": 0,
    "topic": "Transformation"
  },
  {
    "q": "A pipeline must enforce column-level quality rules before publishing curated data. Which approach is best?",
    "options": [
      "Skip validation in staging",
      "Apply data quality checks and fail/route bad records",
      "Validate once per quarter",
      "Trust source system blindly"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A transformation job is slow due to data skew. What is the best first action?",
    "options": [
      "Increase retries",
      "Analyze partition distribution and rebalance keys",
      "Disable parallelism",
      "Use single worker"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A company needs repeatable transformations across environments. Which practice is best?",
    "options": [
      "Manual notebook runs in prod",
      "Versioned pipeline code with CI/CD and parameterized environments",
      "Copy scripts ad hoc",
      "No code reviews"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A team needs to standardize PII masking in all downstream datasets. Where should this be enforced?",
    "options": [
      "At dashboard layer only",
      "In transformation layer with reusable masking policies",
      "Only in source DB",
      "Not required for internal users"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A transformation pipeline depends on three upstream datasets with different schedules. What is best for orchestration?",
    "options": [
      "Fixed cron only",
      "Event-driven workflow with dependency checks",
      "Manual triggers daily",
      "Run all pipelines continuously"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A team needs SQL-based transformations without managing clusters. Which service is suitable?",
    "options": [
      "AWS Glue Studio/Jobs or serverless SQL-based pipeline pattern",
      "Amazon EBS",
      "AWS Direct Connect",
      "Amazon WorkSpaces"
    ],
    "answer": 0,
    "topic": "Transformation"
  },
  {
    "q": "A pipeline often fails halfway and reprocessing doubles records. Which control is key?",
    "options": [
      "Disable retries",
      "Checkpointing and idempotent merge/upsert logic",
      "Delete partial outputs",
      "Manual dedup monthly"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A company must track lineage from raw to curated tables. Which capability is most important?",
    "options": [
      "Manual wiki diagrams",
      "Metadata catalog and lineage-aware transformations",
      "CloudWatch billing alerts",
      "Route 53 health checks"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A Spark-based ETL job has rising cost from small files. What should be improved?",
    "options": [
      "Increase file fragmentation",
      "Compaction and optimized file sizing strategy",
      "Disable compression",
      "Write one file per record"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A team needs to join large historical data with small reference data efficiently. What is common optimization?",
    "options": [
      "Broadcast/small-table join strategy when appropriate",
      "Nested loops by default",
      "Disable partition pruning",
      "No indexing or bucketing"
    ],
    "answer": 0,
    "topic": "Transformation"
  },
  {
    "q": "A company wants to run transformations near-real-time and batch with shared logic. What is best?",
    "options": [
      "Two separate codebases with drift",
      "Reusable transformation modules with mode-specific orchestration",
      "Manual copy-paste",
      "No tests"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A transformation output breaks downstream consumers after schema change. What process should be added?",
    "options": [
      "Immediate overwrite without checks",
      "Schema contract tests and compatibility gates",
      "Disable notifications",
      "Freeze all schema evolution"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A data quality SLA requires alerting when null rates exceed threshold. Which pattern is best?",
    "options": [
      "Check once yearly",
      "Automated quality metrics and threshold alarms",
      "Manual dashboard review only",
      "Ignore nulls in critical columns"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A team needs fast enrichment of event streams with reference data. Which architecture is suitable?",
    "options": [
      "Per-event full table scans",
      "Cached lookup datasets with periodic refresh",
      "Store reference data in local text files",
      "Disable enrichment"
    ],
    "answer": 1,
    "topic": "Transformation"
  },
  {
    "q": "A data lake query workload on S3 is slow and expensive. Which first design improvement is most impactful?",
    "options": [
      "Store all files as CSV in one folder",
      "Use partitioning and columnar formats like Parquet",
      "Disable compression",
      "Use one giant object"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A team needs ACID updates on lake tables with time-travel support. Which approach is best?",
    "options": [
      "Plain CSV append only",
      "Table format that supports transaction logs and versioning",
      "Manual overwrite scripts",
      "No metadata management"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A company needs hot analytics on historical data in a warehouse. Which service is most suitable?",
    "options": [
      "Amazon Redshift",
      "AWS IAM",
      "Amazon Route 53",
      "AWS WAF"
    ],
    "answer": 0,
    "topic": "Storage"
  },
  {
    "q": "A lake has many tiny files causing poor query performance. What should be done?",
    "options": [
      "Increase number of files",
      "Implement compaction strategy and optimize file size",
      "Disable partitioning",
      "Use text files only"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A team must control access to specific columns with sensitive data. Which approach is best?",
    "options": [
      "Bucket-level allow all",
      "Fine-grained permissions with data catalog and policy controls",
      "Share one admin role",
      "No metadata tags"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A company stores raw, curated, and serving datasets. Which layout is most maintainable?",
    "options": [
      "Single flat folder",
      "Medallion/layered lake zones with clear contracts",
      "Random folder naming",
      "Keep only curated data"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A storage cost review finds old infrequently accessed data in expensive tiers. What should be done?",
    "options": [
      "Keep all data in highest-cost tier",
      "Lifecycle policies to move data to cheaper classes",
      "Delete all old data",
      "Disable versioning"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A team needs fast ad hoc SQL on S3 without provisioning infrastructure. Which service fits?",
    "options": [
      "Amazon Athena",
      "Amazon MQ",
      "AWS Backup",
      "AWS Artifact"
    ],
    "answer": 0,
    "topic": "Storage"
  },
  {
    "q": "A warehouse workload requires high concurrency for BI dashboards. Which capability is valuable?",
    "options": [
      "Single queue only",
      "Workload management and scalable compute separation",
      "Disable caching",
      "Use local CSV exports"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A data platform needs schema discovery and metadata search across datasets. Which capability is central?",
    "options": [
      "Manual spreadsheet inventory",
      "Central data catalog and crawlers",
      "Route tables",
      "NAT gateway rules"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A team sees high scan costs because users query broad date ranges unnecessarily. Which optimization helps?",
    "options": [
      "Remove partition columns",
      "Partition projection and query guardrails/training",
      "Disable query logging",
      "Convert Parquet to JSON"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A compliance team needs legal hold for selected records in object storage. Which S3 feature may be required?",
    "options": [
      "S3 Object Lock retention/legal hold",
      "S3 static website hosting",
      "S3 Transfer Acceleration",
      "S3 requester pays"
    ],
    "answer": 0,
    "topic": "Storage"
  },
  {
    "q": "A warehouse backup strategy must support point-in-time restore objectives. What should be configured?",
    "options": [
      "No snapshots",
      "Automated snapshots and tested restore runbooks",
      "Manual exports only",
      "Delete old backups daily"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A team needs data sharing between producer and consumer domains with governance boundaries. What is best?",
    "options": [
      "Duplicate all data manually",
      "Controlled sharing mechanisms with catalog permissions and contracts",
      "Publicly expose all datasets",
      "No ownership model"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A platform stores large immutable logs for years with rare reads. Which strategy is cost-effective?",
    "options": [
      "High-performance block storage",
      "Archive-optimized object storage tiering",
      "In-memory cache",
      "Small SSD volumes"
    ],
    "answer": 1,
    "topic": "Storage"
  },
  {
    "q": "A fraud system requires near-real-time event processing under one-second latency. Which service is core?",
    "options": [
      "Amazon Kinesis Data Streams",
      "AWS DataSync",
      "Amazon EFS",
      "AWS Glue crawler"
    ],
    "answer": 0,
    "topic": "Streaming"
  },
  {
    "q": "A stream processor must handle occasional producer spikes without data loss. Which capability is key?",
    "options": [
      "No buffering",
      "Sharding/partition scaling and consumer backpressure handling",
      "Disable retries",
      "Single-thread consumer only"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A team needs to replay the last 24 hours of events for bug fixes. What is required?",
    "options": [
      "Delete processed records immediately",
      "Retention window and checkpoint-aware replay design",
      "Disable offsets",
      "Manual event recreation"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "An application requires exactly-once-like outcomes in stream processing. Which pattern helps most?",
    "options": [
      "At-least-once with no safeguards",
      "Idempotent sinks and deduplication keys",
      "Drop duplicate events silently",
      "Disable checkpoints"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A team joins stream events with slowly changing reference data. What is practical?",
    "options": [
      "Fetch full reference table per event",
      "Stateful enrichment with cached reference snapshots",
      "Disable enrichment",
      "Only batch join weekly"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A pipeline uses Kafka APIs and wants managed operation on AWS. Which service is appropriate?",
    "options": [
      "Amazon MSK",
      "Amazon WorkMail",
      "AWS Artifact",
      "Amazon Athena"
    ],
    "answer": 0,
    "topic": "Streaming"
  },
  {
    "q": "A streaming job shows rising lag and delayed outputs. What should be inspected first?",
    "options": [
      "Dashboard theme",
      "Consumer throughput, checkpoint frequency, and partition balance",
      "IAM password policy",
      "S3 lifecycle rules"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A team needs event-time analytics over 5-minute windows. Which concept is essential?",
    "options": [
      "Processing time only",
      "Windowing with watermark strategy",
      "No timestamps in events",
      "Static batch partitions"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A team must route selected stream records to S3 for lake analytics with minimal code. Which service helps?",
    "options": [
      "Kinesis Data Firehose",
      "AWS CloudFormation",
      "Amazon Route 53",
      "AWS IAM Access Analyzer"
    ],
    "answer": 0,
    "topic": "Streaming"
  },
  {
    "q": "A system needs alerting when stream throughput drops below baseline. What should be configured?",
    "options": [
      "Manual checks every Friday",
      "CloudWatch alarms on throughput and consumer lag metrics",
      "Disable metrics",
      "Only error logs"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A company wants to isolate tenants in a shared stream architecture. Which design is common?",
    "options": [
      "Single shared keyspace only",
      "Partition strategy and access controls aligned to tenant boundaries",
      "Public topics",
      "No auth on consumers"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A streaming app must survive AZ failures with minimal impact. Which design principle applies?",
    "options": [
      "Single-AZ stream cluster",
      "Multi-AZ managed streaming components and resilient consumers",
      "Manual failover scripts only",
      "No checkpoint storage"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A pipeline has poison messages causing repeated failures. What pattern should be used?",
    "options": [
      "Infinite retries",
      "Dead-letter path and controlled retry policy",
      "Drop the whole stream",
      "Disable parsing"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A team needs stream-to-warehouse near-real-time loading. Which architectural concern is most important?",
    "options": [
      "Only dashboard refresh rate",
      "Delivery semantics, batching cadence, and backfill strategy",
      "UI color consistency",
      "NAT gateway count"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "A company wants a unified event schema across many producers. What should be introduced?",
    "options": [
      "Ad hoc JSON per team",
      "Schema registry/contract governance with compatibility checks",
      "No schema validation",
      "CSV over email"
    ],
    "answer": 1,
    "topic": "Streaming"
  },
  {
    "q": "For the DEA-C01 Ingestion domain, a team needs to improve reliable and scalable intake of batch and change data. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A production incident exposed weaknesses in reliable and scalable intake of batch and change data. for the Ingestion domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A regulated workload depends on strong reliable and scalable intake of batch and change data. controls in the Ingestion domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A platform team needs scalable reliable and scalable intake of batch and change data. practices for the Ingestion domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "Costs are rising in the Ingestion domain because reliable and scalable intake of batch and change data. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team wants safer change management around reliable and scalable intake of batch and change data. in the Ingestion domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "The DEA-C01 blueprint for Ingestion needs better resilience around reliable and scalable intake of batch and change data.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team cannot prove ownership or accountability for reliable and scalable intake of batch and change data. in the Ingestion domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A new workload must launch quickly with strong reliable and scalable intake of batch and change data. posture in the Ingestion domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A review shows that reliable and scalable intake of batch and change data. decisions in the Ingestion domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team needs better observability for reliable and scalable intake of batch and change data. in the Ingestion domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A postmortem shows that weak reliable and scalable intake of batch and change data. practices in the Ingestion domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "For the DEA-C01 Ingestion domain, a team needs to improve batch and cdc ingestion patterns while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A production incident exposed weaknesses in batch and cdc ingestion patterns for the Ingestion domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A regulated workload depends on strong batch and cdc ingestion patterns controls in the Ingestion domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A platform team needs scalable batch and cdc ingestion patterns practices for the Ingestion domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "Costs are rising in the Ingestion domain because batch and cdc ingestion patterns is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team wants safer change management around batch and cdc ingestion patterns in the Ingestion domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "The DEA-C01 blueprint for Ingestion needs better resilience around batch and cdc ingestion patterns. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team cannot prove ownership or accountability for batch and cdc ingestion patterns in the Ingestion domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A new workload must launch quickly with strong batch and cdc ingestion patterns posture in the Ingestion domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A review shows that batch and cdc ingestion patterns decisions in the Ingestion domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team needs better observability for batch and cdc ingestion patterns in the Ingestion domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A postmortem shows that weak batch and cdc ingestion patterns practices in the Ingestion domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "For the DEA-C01 Ingestion domain, a team needs to improve network and transfer strategy choices while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A production incident exposed weaknesses in network and transfer strategy choices for the Ingestion domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A regulated workload depends on strong network and transfer strategy choices controls in the Ingestion domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A platform team needs scalable network and transfer strategy choices practices for the Ingestion domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "Costs are rising in the Ingestion domain because network and transfer strategy choices is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team wants safer change management around network and transfer strategy choices in the Ingestion domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "The DEA-C01 blueprint for Ingestion needs better resilience around network and transfer strategy choices. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team cannot prove ownership or accountability for network and transfer strategy choices in the Ingestion domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A new workload must launch quickly with strong network and transfer strategy choices posture in the Ingestion domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A review shows that network and transfer strategy choices decisions in the Ingestion domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A team needs better observability for network and transfer strategy choices in the Ingestion domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A postmortem shows that weak network and transfer strategy choices practices in the Ingestion domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "For the DEA-C01 Ingestion domain, a team needs to improve reliability and idempotency design while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A production incident exposed weaknesses in reliability and idempotency design for the Ingestion domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A regulated workload depends on strong reliability and idempotency design controls in the Ingestion domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Ingestion"
  },
  {
    "q": "A platform team needs scalable reliability and idempotency design practices for the Ingestion domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Ingestion"
  }
];

const SERVICES = [
  {
    "name": "Ingestion",
    "emoji": "📥",
    "desc": "Reliable and scalable intake of batch and change data.",
    "bullets": [
      "Batch and CDC ingestion patterns",
      "Network and transfer strategy choices",
      "Reliability and idempotency design",
      "Schema and contract handling",
      "Cost-aware ingestion architecture"
    ]
  },
  {
    "name": "Transformation",
    "emoji": "🛠️",
    "desc": "Data cleansing, enrichment, and modeling for analytics workloads.",
    "bullets": [
      "ETL/ELT workload planning",
      "Data quality enforcement",
      "Pipeline orchestration and retries",
      "Performance tuning for jobs",
      "Governance and lineage controls"
    ]
  },
  {
    "name": "Storage",
    "emoji": "🗄️",
    "desc": "Lake and warehouse storage design for performance and cost optimization.",
    "bullets": [
      "Lake layout and partition strategy",
      "Format and compression decisions",
      "Access controls and governance",
      "Lifecycle and retention optimization",
      "Query acceleration patterns"
    ]
  },
  {
    "name": "Streaming",
    "emoji": "🌊",
    "desc": "Real-time event pipelines and low-latency processing architectures.",
    "bullets": [
      "Ordering and checkpoint semantics",
      "Windowing and state handling",
      "Backpressure and scaling tactics",
      "Replay and recovery design",
      "Observability for streaming systems"
    ]
  }
];
