import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def write_js(path: Path, cert_meta, topic_rules, questions, services):
    path.write_text(
        "const CERT_META = " + json.dumps(cert_meta, ensure_ascii=True, indent=2) + ";\n\n"
        + "const TOPIC_RULES = [\n"
        + "\n".join(f"  [/{pattern}/i, '{topic}']," for pattern, topic in topic_rules)
        + "\n];\n\n"
        + "const QUESTIONS = "
        + json.dumps(questions, ensure_ascii=True, indent=2)
        + ";\n\n"
        + "const SERVICES = "
        + json.dumps(services, ensure_ascii=True, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def q(text, options, answer, topic):
    return {"q": text, "options": options, "answer": answer, "topic": topic}


AIF_META = {
    "id": "aif-c01",
    "code": "AIF-C01",
    "name": "AI Practitioner",
    "fullName": "AWS Certified AI Practitioner",
    "emoji": "🧠",
    "minutes": 90,
    "passingScore": 70,
    "examQuestions": 65,
    "color": "#64748b",
    "badge": "Foundational",
    "description": "AWS AI foundations, model selection, responsible AI, and managed AI services.",
    "topics": ["GenAI Basics", "Model Selection", "Responsible AI", "AWS AI Services"],
}

AIF_TOPIC_RULES = [
    ("genai|prompt|foundation model|rag|embedding|token", "GenAI Basics"),
    ("model|latency|accuracy|throughput|fine-tun|inference", "Model Selection"),
    ("responsible|bias|fairness|privacy|safety|guardrail|toxicity", "Responsible AI"),
    ("bedrock|sagemaker|comprehend|rekognition|textract|transcribe|polly", "AWS AI Services"),
]

AIF_SERVICES = [
    {
        "name": "GenAI Basics",
        "emoji": "✨",
        "desc": "Core concepts for prompts, context grounding, and LLM application patterns.",
        "bullets": [
            "Prompt structure and context design",
            "RAG architecture fundamentals",
            "Token and latency trade-offs",
            "Evaluation basics for generated output",
            "Operational constraints and scaling basics",
        ],
    },
    {
        "name": "Model Selection",
        "emoji": "🎯",
        "desc": "Choosing the right model and inference strategy for use case constraints.",
        "bullets": [
            "Quality vs latency vs cost decisions",
            "Model capability matching",
            "Batch vs real-time inference paths",
            "Fine-tuning vs prompt engineering",
            "Benchmarking and acceptance criteria",
        ],
    },
    {
        "name": "Responsible AI",
        "emoji": "🛡️",
        "desc": "Safety, privacy, fairness, and governance controls for AI systems.",
        "bullets": [
            "Risk assessment and guardrail design",
            "Data minimization and privacy controls",
            "Bias testing workflows",
            "Human oversight and escalation paths",
            "Monitoring for harmful outputs",
        ],
    },
    {
        "name": "AWS AI Services",
        "emoji": "🧩",
        "desc": "Selecting managed AWS AI services to implement production use cases quickly.",
        "bullets": [
            "Service capability mapping",
            "Integration and orchestration patterns",
            "Security and IAM for AI APIs",
            "Cost and throughput planning",
            "Observability for AI workloads",
        ],
    },
]

AIF_QUESTIONS = [
    q("A support chatbot hallucinates when users ask account-specific questions. What is the best first improvement?", ["Increase model temperature", "Add retrieval-augmented generation using trusted knowledge sources", "Switch responses to one sentence", "Disable conversation history"], 1, "GenAI Basics"),
    q("A team wants more deterministic answers from an LLM. Which prompt change helps most?", ["Use vague system instructions", "Define explicit role, constraints, and expected output format", "Always use max tokens", "Remove all examples from prompts"], 1, "GenAI Basics"),
    q("A product owner asks why generated output quality varies between requests. What is the best explanation?", ["LLMs are purely deterministic by default", "Sampling parameters and prompt context influence generation variability", "Model output depends only on API region", "Caching always changes answer semantics"], 1, "GenAI Basics"),
    q("A team needs to reduce inference cost for a simple summarization task. Which action is best?", ["Use the largest available model for all requests", "Use a smaller model that still meets quality targets", "Increase max context window unconditionally", "Duplicate inference requests for consistency"], 1, "GenAI Basics"),
    q("A GenAI app must answer from up-to-date policy documents. Which architecture is most appropriate?", ["Static prompt with no external context", "RAG pipeline with embeddings and document retrieval", "Hardcoded responses only", "Nightly model retraining"], 1, "GenAI Basics"),
    q("A team notices prompt injections in user input. What is a practical baseline control?", ["Trust user input by default", "Input filtering and prompt template isolation with instruction hierarchy", "Disable logging", "Increase token limit"], 1, "GenAI Basics"),
    q("A team wants reproducible output for regression tests. Which setup is best?", ["High temperature and broad top-p", "Low temperature with fixed prompt and evaluation dataset", "Randomized prompts for each test", "Disable test baselines"], 1, "GenAI Basics"),
    q("What is the main purpose of embeddings in GenAI applications?", ["Encrypt prompt payloads", "Represent semantic meaning for similarity search and retrieval", "Increase GPU utilization", "Replace tokenization"], 1, "GenAI Basics"),
    q("A user asks very long questions and costs spike. Which optimization should be considered first?", ["Always increase context window", "Prompt compression and context pruning", "Use multiple LLM calls per request", "Disable response caching"], 1, "GenAI Basics"),
    q("A team is new to GenAI and needs a low-risk pilot. Which approach is best?", ["Launch globally without guardrails", "Start with narrow use case, curated data, and success metrics", "Skip evaluation to move faster", "Train custom model immediately"], 1, "GenAI Basics"),
    q("Which metric is most useful for evaluating a customer-facing QA assistant early on?", ["Only token count", "Answer groundedness and task success rate", "Number of prompts per minute", "Total prompts stored"], 1, "GenAI Basics"),
    q("A business asks whether GenAI should replace all deterministic workflows. Best response?", ["Yes, always replace rules engines", "Use GenAI where probabilistic reasoning adds value; keep deterministic logic where required", "Only use GenAI for database indexing", "Avoid GenAI in all production systems"], 1, "GenAI Basics"),
    q("A chatbot should answer with citation links from source docs. Which pattern supports this?", ["Pure prompt with no retrieval", "RAG with chunk metadata and citation rendering", "Streaming disabled", "Cache-only architecture"], 1, "GenAI Basics"),
    q("A team wants better responses in a specific business domain without full fine-tuning. What should they try first?", ["RAG and prompt refinement with domain examples", "Train a new foundation model", "Disable moderation", "Set temperature to 1.0"], 0, "GenAI Basics"),
    q("An app must support multi-turn conversations while preserving context. What is needed?", ["Conversation state management and context window strategy", "Single stateless prompt only", "No token budgeting", "No guardrails"], 0, "GenAI Basics"),

    q("A use case needs very low latency and moderate quality. Which model strategy is best?", ["Largest model only", "Benchmark and select a smaller model meeting SLA", "Use offline batch processing only", "Fine-tune by default"], 1, "Model Selection"),
    q("A legal drafting assistant requires high reasoning quality over speed. What should be prioritized?", ["Lowest cost model only", "Model capability and factual reliability thresholds", "Region proximity only", "Max throughput with no eval"], 1, "Model Selection"),
    q("When should a team prefer fine-tuning over prompt engineering?", ["Immediately for any use case", "When repeated prompt patterns cannot meet quality targets and domain behavior must be learned", "Never", "Only to reduce token length"], 1, "Model Selection"),
    q("A product needs image understanding and text generation in one workflow. What is most appropriate?", ["Text-only model with OCR scripts", "Use multimodal model capability matched to requirements", "Disable images in request", "Two unrelated models without orchestration"], 1, "Model Selection"),
    q("A team compares two models. Which evaluation setup is strongest?", ["One prompt and subjective judgment", "Representative benchmark dataset with quality, latency, and cost metrics", "Only vendor marketing claims", "Single-user feedback"], 1, "Model Selection"),
    q("A chatbot handles predictable FAQ questions and occasional complex requests. Which strategy is cost efficient?", ["Always use premium model", "Tiered routing: lightweight model first, escalate to stronger model when needed", "Random model selection", "Disable fallback routing"], 1, "Model Selection"),
    q("A company needs on-demand spikes for a text generation service. What should they evaluate besides model quality?", ["Only max token setting", "Concurrency limits, throughput quotas, and autoscaling behavior", "UI theme", "Prompt language only"], 1, "Model Selection"),
    q("A team chooses a model with excellent quality but unstable latency. What is the best action?", ["Ignore latency issues", "Set acceptance SLOs and test alternative models or routing strategies", "Disable monitoring", "Increase retries indefinitely"], 1, "Model Selection"),
    q("Which factor most directly affects inference cost per request?", ["Badge color in console", "Input/output token volume and model pricing", "Number of developers", "AWS account alias"], 1, "Model Selection"),
    q("A model performs well in English but poorly in Nordic languages. What should the team do?", ["Assume translation always solves it", "Evaluate language-specific capability and test multilingual alternatives", "Disable non-English users", "Increase output tokens only"], 1, "Model Selection"),
    q("A team needs high quality summaries from long documents. Which trade-off is key?", ["Ignore context limits", "Chunking strategy, retrieval quality, and context window size", "Disable embeddings", "Use only one long static prompt"], 1, "Model Selection"),
    q("A product owner asks why model choice should be revisited quarterly. Best answer?", ["Model performance and pricing evolve; re-benchmarking maintains optimal trade-offs", "Model quality never changes", "Pricing is fixed forever", "Benchmarks are only for launch"], 0, "Model Selection"),
    q("A team wants deterministic JSON output for downstream processing. Which feature is most relevant?", ["Higher creativity settings", "Structured output constraints and schema-aware prompting", "Longer free-form responses", "Disable format validation"], 1, "Model Selection"),
    q("A use case includes sensitive data and strict residency requirements. Which model-selection consideration is critical?", ["Only benchmark score", "Data handling controls, region availability, and compliance posture", "Prompt style only", "UI latency"], 1, "Model Selection"),
    q("Which statement best describes model benchmarking for production?", ["One-time activity before launch", "Continuous process across quality, safety, cost, and latency dimensions", "Optional for low traffic", "Only needed for custom models"], 1, "Model Selection"),

    q("A GenAI assistant sometimes produces harmful language. What should be implemented first?", ["Disable logs", "Content safety filters and response guardrails", "Increase temperature", "Broaden model permissions"], 1, "Responsible AI"),
    q("A bank uses customer prompts that may contain PII. Which control is most important?", ["Store full prompts indefinitely", "Data minimization, redaction, and access controls", "Disable encryption", "Share logs to public bucket"], 1, "Responsible AI"),
    q("A compliance team asks for human oversight in high-risk decisions. Which design is best?", ["Fully autonomous approvals", "Human-in-the-loop review before final action", "No audit trail", "Bypass confidence thresholds"], 1, "Responsible AI"),
    q("A team wants to detect bias drift over time. What should they do?", ["Run fairness tests only once", "Schedule recurring bias evaluations with representative datasets", "Disable model updates", "Use random sample of one user"], 1, "Responsible AI"),
    q("An enterprise needs traceability for AI outputs used in operations. Which capability is essential?", ["Anonymous output only", "Prompt/response logging with governance and retention policies", "No versioning", "Manual screenshots"], 1, "Responsible AI"),
    q("A model occasionally invents policy details. Which mitigation is strongest?", ["Increase output length", "Ground answers in approved sources and enforce citation checks", "Disable retrieval", "Use more randomness"], 1, "Responsible AI"),
    q("A team receives red-team findings for jailbreak prompts. What should happen next?", ["Ignore if accuracy is high", "Update guardrails and test adversarial prompts in CI", "Remove moderation", "Disable incident reporting"], 1, "Responsible AI"),
    q("Which practice helps communicate AI limitations to end users?", ["Hide all uncertainty", "Transparent disclosures and fallback to human support for uncertain cases", "Guarantee perfection", "Avoid user documentation"], 1, "Responsible AI"),
    q("A company must comply with policy requiring explainability for model-assisted decisions. What is best?", ["Black-box outputs only", "Store rationale artifacts and decision context for review", "Delete intermediate outputs", "Use larger model only"], 1, "Responsible AI"),
    q("A team wants to launch quickly and postpone safety controls. Why is this risky?", ["Safety controls do not affect production", "Unmitigated harms can create legal, reputational, and operational impact", "Only latency is affected", "It improves governance"], 1, "Responsible AI"),
    q("A chatbot for children needs stricter output controls. Which approach is most appropriate?", ["Open-ended output for creativity", "Domain-specific guardrails and stricter moderation thresholds", "Disable filtering", "No age-aware policy"], 1, "Responsible AI"),
    q("A product team asks for one KPI to track responsible AI effectiveness. What is best?", ["Only token usage", "Rate of policy-violating outputs detected over time", "Requests per second", "Cache hit ratio"], 1, "Responsible AI"),
    q("A company introduces synthetic data in testing. What is the primary responsible AI benefit?", ["Guaranteed fairness by default", "Reduced exposure of sensitive real user data", "Lower model latency", "Eliminates need for security"], 1, "Responsible AI"),
    q("What is the best incident response pattern for harmful AI outputs in production?", ["Wait for monthly review", "Immediate containment, root-cause analysis, and guardrail updates", "Disable logging", "Rollback infrastructure only"], 1, "Responsible AI"),
    q("A team wants to prove policy compliance during audit. What should be versioned?", ["Only dashboard screenshots", "Prompts, model configs, guardrail policies, and evaluation results", "Model endpoint URL only", "Developer notes"], 1, "Responsible AI"),

    q("A team needs managed access to foundation models through API with governance controls. Which AWS service fits best?", ["Amazon S3", "Amazon Bedrock", "AWS DataSync", "Amazon Route 53"], 1, "AWS AI Services"),
    q("A company needs custom ML model training with full lifecycle tooling and MLOps. Which service is most suitable?", ["Amazon SageMaker", "Amazon Polly", "AWS Artifact", "Amazon CloudFront"], 0, "AWS AI Services"),
    q("An app needs OCR extraction from scanned invoices. Which service should be used?", ["Amazon Textract", "Amazon Rekognition Video", "Amazon Kinesis Data Firehose", "Amazon EBS"], 0, "AWS AI Services"),
    q("A call center needs speech-to-text for phone transcripts. Which managed service is best?", ["Amazon Transcribe", "Amazon Translate", "AWS Glue", "Amazon OpenSearch Service"], 0, "AWS AI Services"),
    q("A team wants lifelike text-to-speech for announcements. Which service is appropriate?", ["Amazon Polly", "Amazon Comprehend", "AWS Lambda", "Amazon Athena"], 0, "AWS AI Services"),
    q("A product needs sentiment analysis on customer reviews. Which service is most direct?", ["Amazon Comprehend", "Amazon EMR", "Amazon RDS", "AWS Organizations"], 0, "AWS AI Services"),
    q("A security camera app needs object and label detection in images. Which service fits best?", ["Amazon Rekognition", "Amazon Textract", "Amazon Neptune", "AWS Step Functions"], 0, "AWS AI Services"),
    q("A multilingual support app needs real-time language translation. Which service should be used?", ["Amazon Translate", "Amazon Polly", "Amazon SQS", "AWS Batch"], 0, "AWS AI Services"),
    q("A team orchestrates prompts and tools for an AI assistant workflow. Which AWS building blocks are common?", ["Bedrock plus Lambda/Step Functions integration", "CloudFormation only", "Route tables and NACLs", "IAM users with static keys"], 0, "AWS AI Services"),
    q("A team wants to monitor model invocation errors and latency. What should be added?", ["CloudWatch metrics, logs, and alarms for AI endpoints", "Disable retries", "Only local logging", "Weekly manual checks"], 0, "AWS AI Services"),
    q("A company must restrict which teams can call specific AI models. Which control is most relevant?", ["IAM policies scoped to model invocation actions", "Security groups only", "S3 bucket policy only", "No controls needed for managed APIs"], 0, "AWS AI Services"),
    q("A startup needs the fastest path to launch a Q&A assistant on internal docs. Best approach?", ["Use Bedrock with managed model + retrieval integration", "Build custom model training pipeline first", "Develop inference engine from scratch", "Use only static FAQ pages"], 0, "AWS AI Services"),
    q("A company needs document classification and entity extraction at scale. Which service can do this with minimal ML ops?", ["Amazon Comprehend", "Amazon EC2 Auto Scaling", "Amazon EKS", "AWS Direct Connect"], 0, "AWS AI Services"),
    q("A healthcare team needs strict access boundaries for PHI in AI workflows. Which is best practice?", ["Use broad admin roles", "Apply least privilege IAM and encrypt data in transit/at rest", "Disable audit logs", "Share one API key across teams"], 1, "AWS AI Services"),
    q("A team needs asynchronous processing of long audio files for transcription. What pattern is best?", ["Synchronous API request from browser only", "Batch/asynchronous transcription workflow with status tracking", "Manual human transcription only", "Disable retries and notifications"], 1, "AWS AI Services"),
]

DEA_META = {
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
    "topics": ["Ingestion", "Transformation", "Storage", "Streaming"],
}

DEA_TOPIC_RULES = [
    ("ingest|batch|cdc|dms|datasync|kinesis firehose", "Ingestion"),
    ("transform|etl|glue|spark|quality|schema", "Transformation"),
    ("storage|s3|lake|warehouse|redshift|partition", "Storage"),
    ("stream|kinesis|msk|kafka|event|window", "Streaming"),
]

DEA_SERVICES = [
    {
        "name": "Ingestion",
        "emoji": "📥",
        "desc": "Reliable and scalable intake of batch and change data.",
        "bullets": [
            "Batch and CDC ingestion patterns",
            "Network and transfer strategy choices",
            "Reliability and idempotency design",
            "Schema and contract handling",
            "Cost-aware ingestion architecture",
        ],
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
            "Governance and lineage controls",
        ],
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
            "Query acceleration patterns",
        ],
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
            "Observability for streaming systems",
        ],
    },
]

DEA_QUESTIONS = [
    q("A company needs nightly ingestion of CSV files from on-premises to S3 with minimal custom code. Which approach is best?", ["Build custom SCP transfer scripts", "Use AWS DataSync scheduled tasks", "Use CloudFront file uploads", "Use IAM users and manual copies"], 1, "Ingestion"),
    q("A database migration requires continuous replication with minimal downtime. Which service is most suitable?", ["AWS DMS with CDC", "Amazon Redshift Spectrum", "AWS Glue DataBrew", "Amazon Athena"], 0, "Ingestion"),
    q("A team ingests API events and must avoid duplicates during retries. Which design is best?", ["No retry policy", "Idempotent writes using deterministic event keys", "Disable persistence", "Increase batch size only"], 1, "Ingestion"),
    q("A partner sends files irregularly and the pipeline must trigger automatically when files arrive. What should be used?", ["Manual cron checks", "S3 event notifications to ingestion workflow", "Weekly polling from desktop", "Disable notifications"], 1, "Ingestion"),
    q("A company ingests 10 TB/day and wants cost-efficient transfer to S3. Which first optimization is practical?", ["Store files uncompressed", "Compress and parallelize transfer with managed service tuning", "Use one small transfer thread", "Disable checksum validation"], 1, "Ingestion"),
    q("An ingestion pipeline reads from SaaS APIs with strict rate limits. What should be implemented?", ["Unbounded concurrency", "Adaptive throttling with backoff and checkpointing", "No retries", "Delete failed records"], 1, "Ingestion"),
    q("A team needs secure cross-account ingestion to a central data lake. Which control is most important?", ["Shared root credentials", "Cross-account roles and bucket policies with least privilege", "Public bucket access", "No encryption"], 1, "Ingestion"),
    q("A batch feed often arrives with schema changes. How can ingestion remain resilient?", ["Reject all changed files forever", "Use schema versioning and contract validation with quarantine path", "Disable validation", "Convert all fields to strings silently"], 1, "Ingestion"),
    q("A pipeline ingests IoT data and occasionally sees late-arriving events. Which ingestion principle is key?", ["Assume strict ordering", "Design for out-of-order handling and event-time metadata", "Drop late data", "Use only wall-clock time"], 1, "Ingestion"),
    q("A company ingests audit logs and needs immutable retention. Which storage setting helps most?", ["S3 Object Lock where required by policy", "Local temp storage", "Disable versioning", "Overwrite files daily"], 0, "Ingestion"),
    q("A team wants ingestion SLA alerts for delayed data arrival. What should be monitored?", ["Only CPU utilization", "Freshness metrics and expected-arrival lag alarms", "Disk space on laptops", "Number of IAM users"], 1, "Ingestion"),
    q("A new source must be onboarded quickly with standardized patterns. Which approach is best?", ["Create custom pipeline each time", "Template-driven ingestion framework with configuration-based source adapters", "One-off manual imports", "Skip metadata capture"], 1, "Ingestion"),
    q("A team ingests clickstream data from mobile apps at high burst rates. Which service pair is common?", ["Kinesis Data Streams and Firehose", "Amazon Route 53 and SNS", "EBS and EC2 only", "CloudFormation and IAM"], 0, "Ingestion"),
    q("A pipeline receives malformed records that must not block good data. What should be implemented?", ["Fail entire batch", "Dead-letter/quarantine path with validation report", "Ignore parsing errors silently", "Delete raw inputs"], 1, "Ingestion"),
    q("A migration project requires moving 500 TB in a limited WAN environment. Which option should be considered?", ["Manual internet upload only", "AWS Snow Family for bulk transfer", "Use email attachments", "Disable integrity checks"], 1, "Ingestion"),

    q("A data team runs complex nightly ETL and wants serverless scaling. Which service is most suitable?", ["AWS Glue jobs", "Amazon S3 static hosting", "AWS WAF", "Amazon Cognito"], 0, "Transformation"),
    q("A pipeline must enforce column-level quality rules before publishing curated data. Which approach is best?", ["Skip validation in staging", "Apply data quality checks and fail/route bad records", "Validate once per quarter", "Trust source system blindly"], 1, "Transformation"),
    q("A transformation job is slow due to data skew. What is the best first action?", ["Increase retries", "Analyze partition distribution and rebalance keys", "Disable parallelism", "Use single worker"], 1, "Transformation"),
    q("A company needs repeatable transformations across environments. Which practice is best?", ["Manual notebook runs in prod", "Versioned pipeline code with CI/CD and parameterized environments", "Copy scripts ad hoc", "No code reviews"], 1, "Transformation"),
    q("A team needs to standardize PII masking in all downstream datasets. Where should this be enforced?", ["At dashboard layer only", "In transformation layer with reusable masking policies", "Only in source DB", "Not required for internal users"], 1, "Transformation"),
    q("A transformation pipeline depends on three upstream datasets with different schedules. What is best for orchestration?", ["Fixed cron only", "Event-driven workflow with dependency checks", "Manual triggers daily", "Run all pipelines continuously"], 1, "Transformation"),
    q("A team needs SQL-based transformations without managing clusters. Which service is suitable?", ["AWS Glue Studio/Jobs or serverless SQL-based pipeline pattern", "Amazon EBS", "AWS Direct Connect", "Amazon WorkSpaces"], 0, "Transformation"),
    q("A pipeline often fails halfway and reprocessing doubles records. Which control is key?", ["Disable retries", "Checkpointing and idempotent merge/upsert logic", "Delete partial outputs", "Manual dedup monthly"], 1, "Transformation"),
    q("A company must track lineage from raw to curated tables. Which capability is most important?", ["Manual wiki diagrams", "Metadata catalog and lineage-aware transformations", "CloudWatch billing alerts", "Route 53 health checks"], 1, "Transformation"),
    q("A Spark-based ETL job has rising cost from small files. What should be improved?", ["Increase file fragmentation", "Compaction and optimized file sizing strategy", "Disable compression", "Write one file per record"], 1, "Transformation"),
    q("A team needs to join large historical data with small reference data efficiently. What is common optimization?", ["Broadcast/small-table join strategy when appropriate", "Nested loops by default", "Disable partition pruning", "No indexing or bucketing"], 0, "Transformation"),
    q("A company wants to run transformations near-real-time and batch with shared logic. What is best?", ["Two separate codebases with drift", "Reusable transformation modules with mode-specific orchestration", "Manual copy-paste", "No tests"], 1, "Transformation"),
    q("A transformation output breaks downstream consumers after schema change. What process should be added?", ["Immediate overwrite without checks", "Schema contract tests and compatibility gates", "Disable notifications", "Freeze all schema evolution"], 1, "Transformation"),
    q("A data quality SLA requires alerting when null rates exceed threshold. Which pattern is best?", ["Check once yearly", "Automated quality metrics and threshold alarms", "Manual dashboard review only", "Ignore nulls in critical columns"], 1, "Transformation"),
    q("A team needs fast enrichment of event streams with reference data. Which architecture is suitable?", ["Per-event full table scans", "Cached lookup datasets with periodic refresh", "Store reference data in local text files", "Disable enrichment"], 1, "Transformation"),

    q("A data lake query workload on S3 is slow and expensive. Which first design improvement is most impactful?", ["Store all files as CSV in one folder", "Use partitioning and columnar formats like Parquet", "Disable compression", "Use one giant object"], 1, "Storage"),
    q("A team needs ACID updates on lake tables with time-travel support. Which approach is best?", ["Plain CSV append only", "Table format that supports transaction logs and versioning", "Manual overwrite scripts", "No metadata management"], 1, "Storage"),
    q("A company needs hot analytics on historical data in a warehouse. Which service is most suitable?", ["Amazon Redshift", "AWS IAM", "Amazon Route 53", "AWS WAF"], 0, "Storage"),
    q("A lake has many tiny files causing poor query performance. What should be done?", ["Increase number of files", "Implement compaction strategy and optimize file size", "Disable partitioning", "Use text files only"], 1, "Storage"),
    q("A team must control access to specific columns with sensitive data. Which approach is best?", ["Bucket-level allow all", "Fine-grained permissions with data catalog and policy controls", "Share one admin role", "No metadata tags"], 1, "Storage"),
    q("A company stores raw, curated, and serving datasets. Which layout is most maintainable?", ["Single flat folder", "Medallion/layered lake zones with clear contracts", "Random folder naming", "Keep only curated data"], 1, "Storage"),
    q("A storage cost review finds old infrequently accessed data in expensive tiers. What should be done?", ["Keep all data in highest-cost tier", "Lifecycle policies to move data to cheaper classes", "Delete all old data", "Disable versioning"], 1, "Storage"),
    q("A team needs fast ad hoc SQL on S3 without provisioning infrastructure. Which service fits?", ["Amazon Athena", "Amazon MQ", "AWS Backup", "AWS Artifact"], 0, "Storage"),
    q("A warehouse workload requires high concurrency for BI dashboards. Which capability is valuable?", ["Single queue only", "Workload management and scalable compute separation", "Disable caching", "Use local CSV exports"], 1, "Storage"),
    q("A data platform needs schema discovery and metadata search across datasets. Which capability is central?", ["Manual spreadsheet inventory", "Central data catalog and crawlers", "Route tables", "NAT gateway rules"], 1, "Storage"),
    q("A team sees high scan costs because users query broad date ranges unnecessarily. Which optimization helps?", ["Remove partition columns", "Partition projection and query guardrails/training", "Disable query logging", "Convert Parquet to JSON"], 1, "Storage"),
    q("A compliance team needs legal hold for selected records in object storage. Which S3 feature may be required?", ["S3 Object Lock retention/legal hold", "S3 static website hosting", "S3 Transfer Acceleration", "S3 requester pays"], 0, "Storage"),
    q("A warehouse backup strategy must support point-in-time restore objectives. What should be configured?", ["No snapshots", "Automated snapshots and tested restore runbooks", "Manual exports only", "Delete old backups daily"], 1, "Storage"),
    q("A team needs data sharing between producer and consumer domains with governance boundaries. What is best?", ["Duplicate all data manually", "Controlled sharing mechanisms with catalog permissions and contracts", "Publicly expose all datasets", "No ownership model"], 1, "Storage"),
    q("A platform stores large immutable logs for years with rare reads. Which strategy is cost-effective?", ["High-performance block storage", "Archive-optimized object storage tiering", "In-memory cache", "Small SSD volumes"], 1, "Storage"),

    q("A fraud system requires near-real-time event processing under one-second latency. Which service is core?", ["Amazon Kinesis Data Streams", "AWS DataSync", "Amazon EFS", "AWS Glue crawler"], 0, "Streaming"),
    q("A stream processor must handle occasional producer spikes without data loss. Which capability is key?", ["No buffering", "Sharding/partition scaling and consumer backpressure handling", "Disable retries", "Single-thread consumer only"], 1, "Streaming"),
    q("A team needs to replay the last 24 hours of events for bug fixes. What is required?", ["Delete processed records immediately", "Retention window and checkpoint-aware replay design", "Disable offsets", "Manual event recreation"], 1, "Streaming"),
    q("An application requires exactly-once-like outcomes in stream processing. Which pattern helps most?", ["At-least-once with no safeguards", "Idempotent sinks and deduplication keys", "Drop duplicate events silently", "Disable checkpoints"], 1, "Streaming"),
    q("A team joins stream events with slowly changing reference data. What is practical?", ["Fetch full reference table per event", "Stateful enrichment with cached reference snapshots", "Disable enrichment", "Only batch join weekly"], 1, "Streaming"),
    q("A pipeline uses Kafka APIs and wants managed operation on AWS. Which service is appropriate?", ["Amazon MSK", "Amazon WorkMail", "AWS Artifact", "Amazon Athena"], 0, "Streaming"),
    q("A streaming job shows rising lag and delayed outputs. What should be inspected first?", ["Dashboard theme", "Consumer throughput, checkpoint frequency, and partition balance", "IAM password policy", "S3 lifecycle rules"], 1, "Streaming"),
    q("A team needs event-time analytics over 5-minute windows. Which concept is essential?", ["Processing time only", "Windowing with watermark strategy", "No timestamps in events", "Static batch partitions"], 1, "Streaming"),
    q("A team must route selected stream records to S3 for lake analytics with minimal code. Which service helps?", ["Kinesis Data Firehose", "AWS CloudFormation", "Amazon Route 53", "AWS IAM Access Analyzer"], 0, "Streaming"),
    q("A system needs alerting when stream throughput drops below baseline. What should be configured?", ["Manual checks every Friday", "CloudWatch alarms on throughput and consumer lag metrics", "Disable metrics", "Only error logs"], 1, "Streaming"),
    q("A company wants to isolate tenants in a shared stream architecture. Which design is common?", ["Single shared keyspace only", "Partition strategy and access controls aligned to tenant boundaries", "Public topics", "No auth on consumers"], 1, "Streaming"),
    q("A streaming app must survive AZ failures with minimal impact. Which design principle applies?", ["Single-AZ stream cluster", "Multi-AZ managed streaming components and resilient consumers", "Manual failover scripts only", "No checkpoint storage"], 1, "Streaming"),
    q("A pipeline has poison messages causing repeated failures. What pattern should be used?", ["Infinite retries", "Dead-letter path and controlled retry policy", "Drop the whole stream", "Disable parsing"], 1, "Streaming"),
    q("A team needs stream-to-warehouse near-real-time loading. Which architectural concern is most important?", ["Only dashboard refresh rate", "Delivery semantics, batching cadence, and backfill strategy", "UI color consistency", "NAT gateway count"], 1, "Streaming"),
    q("A company wants a unified event schema across many producers. What should be introduced?", ["Ad hoc JSON per team", "Schema registry/contract governance with compatibility checks", "No schema validation", "CSV over email"], 1, "Streaming"),
]


write_js(ROOT / "questions-aif-c01.js", AIF_META, AIF_TOPIC_RULES, AIF_QUESTIONS, AIF_SERVICES)
write_js(ROOT / "questions-dea-c01.js", DEA_META, DEA_TOPIC_RULES, DEA_QUESTIONS, DEA_SERVICES)
print(f"Wrote AIF={len(AIF_QUESTIONS)} DEA={len(DEA_QUESTIONS)} questions")
