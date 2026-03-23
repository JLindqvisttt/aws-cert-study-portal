const CERT_META = {
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
  "topics": [
    "GenAI Basics",
    "Model Selection",
    "Responsible AI",
    "AWS AI Services"
  ]
};

const TOPIC_RULES = [
  [/genai|prompt|foundation model|rag|embedding|token/i, "GenAI Basics"],
  [/model|latency|accuracy|throughput|fine-tun|inference/i, "Model Selection"],
  [/responsible|bias|fairness|privacy|safety|guardrail|toxicity/i, "Responsible AI"],
  [/bedrock|sagemaker|comprehend|rekognition|textract|transcribe|polly/i, "AWS AI Services"]
];

const QUESTIONS = [
  {
    "q": "A support chatbot hallucinates when users ask account-specific questions. What is the best first improvement?",
    "options": [
      "Increase model temperature",
      "Add retrieval-augmented generation using trusted knowledge sources",
      "Switch responses to one sentence",
      "Disable conversation history"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team wants more deterministic answers from an LLM. Which prompt change helps most?",
    "options": [
      "Use vague system instructions",
      "Define explicit role, constraints, and expected output format",
      "Always use max tokens",
      "Remove all examples from prompts"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A product owner asks why generated output quality varies between requests. What is the best explanation?",
    "options": [
      "LLMs are purely deterministic by default",
      "Sampling parameters and prompt context influence generation variability",
      "Model output depends only on API region",
      "Caching always changes answer semantics"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team needs to reduce inference cost for a simple summarization task. Which action is best?",
    "options": [
      "Use the largest available model for all requests",
      "Use a smaller model that still meets quality targets",
      "Increase max context window unconditionally",
      "Duplicate inference requests for consistency"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A GenAI app must answer from up-to-date policy documents. Which architecture is most appropriate?",
    "options": [
      "Static prompt with no external context",
      "RAG pipeline with embeddings and document retrieval",
      "Hardcoded responses only",
      "Nightly model retraining"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team notices prompt injections in user input. What is a practical baseline control?",
    "options": [
      "Trust user input by default",
      "Input filtering and prompt template isolation with instruction hierarchy",
      "Disable logging",
      "Increase token limit"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team wants reproducible output for regression tests. Which setup is best?",
    "options": [
      "High temperature and broad top-p",
      "Low temperature with fixed prompt and evaluation dataset",
      "Randomized prompts for each test",
      "Disable test baselines"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "What is the main purpose of embeddings in GenAI applications?",
    "options": [
      "Encrypt prompt payloads",
      "Represent semantic meaning for similarity search and retrieval",
      "Increase GPU utilization",
      "Replace tokenization"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A user asks very long questions and costs spike. Which optimization should be considered first?",
    "options": [
      "Always increase context window",
      "Prompt compression and context pruning",
      "Use multiple LLM calls per request",
      "Disable response caching"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team is new to GenAI and needs a low-risk pilot. Which approach is best?",
    "options": [
      "Launch globally without guardrails",
      "Start with narrow use case, curated data, and success metrics",
      "Skip evaluation to move faster",
      "Train custom model immediately"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "Which metric is most useful for evaluating a customer-facing QA assistant early on?",
    "options": [
      "Only token count",
      "Answer groundedness and task success rate",
      "Number of prompts per minute",
      "Total prompts stored"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A business asks whether GenAI should replace all deterministic workflows. Best response?",
    "options": [
      "Yes, always replace rules engines",
      "Use GenAI where probabilistic reasoning adds value; keep deterministic logic where required",
      "Only use GenAI for database indexing",
      "Avoid GenAI in all production systems"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A chatbot should answer with citation links from source docs. Which pattern supports this?",
    "options": [
      "Pure prompt with no retrieval",
      "RAG with chunk metadata and citation rendering",
      "Streaming disabled",
      "Cache-only architecture"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team wants better responses in a specific business domain without full fine-tuning. What should they try first?",
    "options": [
      "RAG and prompt refinement with domain examples",
      "Train a new foundation model",
      "Disable moderation",
      "Set temperature to 1.0"
    ],
    "answer": 0,
    "topic": "GenAI Basics"
  },
  {
    "q": "An app must support multi-turn conversations while preserving context. What is needed?",
    "options": [
      "Conversation state management and context window strategy",
      "Single stateless prompt only",
      "No token budgeting",
      "No guardrails"
    ],
    "answer": 0,
    "topic": "GenAI Basics"
  },
  {
    "q": "A use case needs very low latency and moderate quality. Which model strategy is best?",
    "options": [
      "Largest model only",
      "Benchmark and select a smaller model meeting SLA",
      "Use offline batch processing only",
      "Fine-tune by default"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A legal drafting assistant requires high reasoning quality over speed. What should be prioritized?",
    "options": [
      "Lowest cost model only",
      "Model capability and factual reliability thresholds",
      "Region proximity only",
      "Max throughput with no eval"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "When should a team prefer fine-tuning over prompt engineering?",
    "options": [
      "Immediately for any use case",
      "When repeated prompt patterns cannot meet quality targets and domain behavior must be learned",
      "Never",
      "Only to reduce token length"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A product needs image understanding and text generation in one workflow. What is most appropriate?",
    "options": [
      "Text-only model with OCR scripts",
      "Use multimodal model capability matched to requirements",
      "Disable images in request",
      "Two unrelated models without orchestration"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A team compares two models. Which evaluation setup is strongest?",
    "options": [
      "One prompt and subjective judgment",
      "Representative benchmark dataset with quality, latency, and cost metrics",
      "Only vendor marketing claims",
      "Single-user feedback"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A chatbot handles predictable FAQ questions and occasional complex requests. Which strategy is cost efficient?",
    "options": [
      "Always use premium model",
      "Tiered routing: lightweight model first, escalate to stronger model when needed",
      "Random model selection",
      "Disable fallback routing"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A company needs on-demand spikes for a text generation service. What should they evaluate besides model quality?",
    "options": [
      "Only max token setting",
      "Concurrency limits, throughput quotas, and autoscaling behavior",
      "UI theme",
      "Prompt language only"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A team chooses a model with excellent quality but unstable latency. What is the best action?",
    "options": [
      "Ignore latency issues",
      "Set acceptance SLOs and test alternative models or routing strategies",
      "Disable monitoring",
      "Increase retries indefinitely"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "Which factor most directly affects inference cost per request?",
    "options": [
      "Badge color in console",
      "Input/output token volume and model pricing",
      "Number of developers",
      "AWS account alias"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A model performs well in English but poorly in Nordic languages. What should the team do?",
    "options": [
      "Assume translation always solves it",
      "Evaluate language-specific capability and test multilingual alternatives",
      "Disable non-English users",
      "Increase output tokens only"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A team needs high quality summaries from long documents. Which trade-off is key?",
    "options": [
      "Ignore context limits",
      "Chunking strategy, retrieval quality, and context window size",
      "Disable embeddings",
      "Use only one long static prompt"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A product owner asks why model choice should be revisited quarterly. Best answer?",
    "options": [
      "Model performance and pricing evolve; re-benchmarking maintains optimal trade-offs",
      "Model quality never changes",
      "Pricing is fixed forever",
      "Benchmarks are only for launch"
    ],
    "answer": 0,
    "topic": "Model Selection"
  },
  {
    "q": "A team wants deterministic JSON output for downstream processing. Which feature is most relevant?",
    "options": [
      "Higher creativity settings",
      "Structured output constraints and schema-aware prompting",
      "Longer free-form responses",
      "Disable format validation"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A use case includes sensitive data and strict residency requirements. Which model-selection consideration is critical?",
    "options": [
      "Only benchmark score",
      "Data handling controls, region availability, and compliance posture",
      "Prompt style only",
      "UI latency"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "Which statement best describes model benchmarking for production?",
    "options": [
      "One-time activity before launch",
      "Continuous process across quality, safety, cost, and latency dimensions",
      "Optional for low traffic",
      "Only needed for custom models"
    ],
    "answer": 1,
    "topic": "Model Selection"
  },
  {
    "q": "A GenAI assistant sometimes produces harmful language. What should be implemented first?",
    "options": [
      "Disable logs",
      "Content safety filters and response guardrails",
      "Increase temperature",
      "Broaden model permissions"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A bank uses customer prompts that may contain PII. Which control is most important?",
    "options": [
      "Store full prompts indefinitely",
      "Data minimization, redaction, and access controls",
      "Disable encryption",
      "Share logs to public bucket"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A compliance team asks for human oversight in high-risk decisions. Which design is best?",
    "options": [
      "Fully autonomous approvals",
      "Human-in-the-loop review before final action",
      "No audit trail",
      "Bypass confidence thresholds"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A team wants to detect bias drift over time. What should they do?",
    "options": [
      "Run fairness tests only once",
      "Schedule recurring bias evaluations with representative datasets",
      "Disable model updates",
      "Use random sample of one user"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "An enterprise needs traceability for AI outputs used in operations. Which capability is essential?",
    "options": [
      "Anonymous output only",
      "Prompt/response logging with governance and retention policies",
      "No versioning",
      "Manual screenshots"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A model occasionally invents policy details. Which mitigation is strongest?",
    "options": [
      "Increase output length",
      "Ground answers in approved sources and enforce citation checks",
      "Disable retrieval",
      "Use more randomness"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A team receives red-team findings for jailbreak prompts. What should happen next?",
    "options": [
      "Ignore if accuracy is high",
      "Update guardrails and test adversarial prompts in CI",
      "Remove moderation",
      "Disable incident reporting"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "Which practice helps communicate AI limitations to end users?",
    "options": [
      "Hide all uncertainty",
      "Transparent disclosures and fallback to human support for uncertain cases",
      "Guarantee perfection",
      "Avoid user documentation"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A company must comply with policy requiring explainability for model-assisted decisions. What is best?",
    "options": [
      "Black-box outputs only",
      "Store rationale artifacts and decision context for review",
      "Delete intermediate outputs",
      "Use larger model only"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A team wants to launch quickly and postpone safety controls. Why is this risky?",
    "options": [
      "Safety controls do not affect production",
      "Unmitigated harms can create legal, reputational, and operational impact",
      "Only latency is affected",
      "It improves governance"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A chatbot for children needs stricter output controls. Which approach is most appropriate?",
    "options": [
      "Open-ended output for creativity",
      "Domain-specific guardrails and stricter moderation thresholds",
      "Disable filtering",
      "No age-aware policy"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A product team asks for one KPI to track responsible AI effectiveness. What is best?",
    "options": [
      "Only token usage",
      "Rate of policy-violating outputs detected over time",
      "Requests per second",
      "Cache hit ratio"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A company introduces synthetic data in testing. What is the primary responsible AI benefit?",
    "options": [
      "Guaranteed fairness by default",
      "Reduced exposure of sensitive real user data",
      "Lower model latency",
      "Eliminates need for security"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "What is the best incident response pattern for harmful AI outputs in production?",
    "options": [
      "Wait for monthly review",
      "Immediate containment, root-cause analysis, and guardrail updates",
      "Disable logging",
      "Rollback infrastructure only"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A team wants to prove policy compliance during audit. What should be versioned?",
    "options": [
      "Only dashboard screenshots",
      "Prompts, model configs, guardrail policies, and evaluation results",
      "Model endpoint URL only",
      "Developer notes"
    ],
    "answer": 1,
    "topic": "Responsible AI"
  },
  {
    "q": "A team needs managed access to foundation models through API with governance controls. Which AWS service fits best?",
    "options": [
      "Amazon S3",
      "Amazon Bedrock",
      "AWS DataSync",
      "Amazon Route 53"
    ],
    "answer": 1,
    "topic": "AWS AI Services"
  },
  {
    "q": "A company needs custom ML model training with full lifecycle tooling and MLOps. Which service is most suitable?",
    "options": [
      "Amazon SageMaker",
      "Amazon Polly",
      "AWS Artifact",
      "Amazon CloudFront"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "An app needs OCR extraction from scanned invoices. Which service should be used?",
    "options": [
      "Amazon Textract",
      "Amazon Rekognition Video",
      "Amazon Kinesis Data Firehose",
      "Amazon EBS"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A call center needs speech-to-text for phone transcripts. Which managed service is best?",
    "options": [
      "Amazon Transcribe",
      "Amazon Translate",
      "AWS Glue",
      "Amazon OpenSearch Service"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A team wants lifelike text-to-speech for announcements. Which service is appropriate?",
    "options": [
      "Amazon Polly",
      "Amazon Comprehend",
      "AWS Lambda",
      "Amazon Athena"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A product needs sentiment analysis on customer reviews. Which service is most direct?",
    "options": [
      "Amazon Comprehend",
      "Amazon EMR",
      "Amazon RDS",
      "AWS Organizations"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A security camera app needs object and label detection in images. Which service fits best?",
    "options": [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Neptune",
      "AWS Step Functions"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A multilingual support app needs real-time language translation. Which service should be used?",
    "options": [
      "Amazon Translate",
      "Amazon Polly",
      "Amazon SQS",
      "AWS Batch"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A team orchestrates prompts and tools for an AI assistant workflow. Which AWS building blocks are common?",
    "options": [
      "Bedrock plus Lambda/Step Functions integration",
      "CloudFormation only",
      "Route tables and NACLs",
      "IAM users with static keys"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A team wants to monitor model invocation errors and latency. What should be added?",
    "options": [
      "CloudWatch metrics, logs, and alarms for AI endpoints",
      "Disable retries",
      "Only local logging",
      "Weekly manual checks"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A company must restrict which teams can call specific AI models. Which control is most relevant?",
    "options": [
      "IAM policies scoped to model invocation actions",
      "Security groups only",
      "S3 bucket policy only",
      "No controls needed for managed APIs"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A startup needs the fastest path to launch a Q&A assistant on internal docs. Best approach?",
    "options": [
      "Use Bedrock with managed model + retrieval integration",
      "Build custom model training pipeline first",
      "Develop inference engine from scratch",
      "Use only static FAQ pages"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A company needs document classification and entity extraction at scale. Which service can do this with minimal ML ops?",
    "options": [
      "Amazon Comprehend",
      "Amazon EC2 Auto Scaling",
      "Amazon EKS",
      "AWS Direct Connect"
    ],
    "answer": 0,
    "topic": "AWS AI Services"
  },
  {
    "q": "A healthcare team needs strict access boundaries for PHI in AI workflows. Which is best practice?",
    "options": [
      "Use broad admin roles",
      "Apply least privilege IAM and encrypt data in transit/at rest",
      "Disable audit logs",
      "Share one API key across teams"
    ],
    "answer": 1,
    "topic": "AWS AI Services"
  },
  {
    "q": "A team needs asynchronous processing of long audio files for transcription. What pattern is best?",
    "options": [
      "Synchronous API request from browser only",
      "Batch/asynchronous transcription workflow with status tracking",
      "Manual human transcription only",
      "Disable retries and notifications"
    ],
    "answer": 1,
    "topic": "AWS AI Services"
  },
  {
    "q": "For the AIF-C01 GenAI Basics domain, a team needs to improve core concepts for prompts, context grounding, and llm application patterns. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A production incident exposed weaknesses in core concepts for prompts, context grounding, and llm application patterns. for the GenAI Basics domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A regulated workload depends on strong core concepts for prompts, context grounding, and llm application patterns. controls in the GenAI Basics domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A platform team needs scalable core concepts for prompts, context grounding, and llm application patterns. practices for the GenAI Basics domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "Costs are rising in the GenAI Basics domain because core concepts for prompts, context grounding, and llm application patterns. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team wants safer change management around core concepts for prompts, context grounding, and llm application patterns. in the GenAI Basics domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "The AIF-C01 blueprint for GenAI Basics needs better resilience around core concepts for prompts, context grounding, and llm application patterns.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team cannot prove ownership or accountability for core concepts for prompts, context grounding, and llm application patterns. in the GenAI Basics domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A new workload must launch quickly with strong core concepts for prompts, context grounding, and llm application patterns. posture in the GenAI Basics domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A review shows that core concepts for prompts, context grounding, and llm application patterns. decisions in the GenAI Basics domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team needs better observability for core concepts for prompts, context grounding, and llm application patterns. in the GenAI Basics domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A postmortem shows that weak core concepts for prompts, context grounding, and llm application patterns. practices in the GenAI Basics domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "For the AIF-C01 GenAI Basics domain, a team needs to improve prompt structure and context design while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A production incident exposed weaknesses in prompt structure and context design for the GenAI Basics domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A regulated workload depends on strong prompt structure and context design controls in the GenAI Basics domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A platform team needs scalable prompt structure and context design practices for the GenAI Basics domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "Costs are rising in the GenAI Basics domain because prompt structure and context design is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team wants safer change management around prompt structure and context design in the GenAI Basics domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "The AIF-C01 blueprint for GenAI Basics needs better resilience around prompt structure and context design. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team cannot prove ownership or accountability for prompt structure and context design in the GenAI Basics domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A new workload must launch quickly with strong prompt structure and context design posture in the GenAI Basics domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A review shows that prompt structure and context design decisions in the GenAI Basics domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team needs better observability for prompt structure and context design in the GenAI Basics domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A postmortem shows that weak prompt structure and context design practices in the GenAI Basics domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "For the AIF-C01 GenAI Basics domain, a team needs to improve rag architecture fundamentals while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A production incident exposed weaknesses in rag architecture fundamentals for the GenAI Basics domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A regulated workload depends on strong rag architecture fundamentals controls in the GenAI Basics domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A platform team needs scalable rag architecture fundamentals practices for the GenAI Basics domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "Costs are rising in the GenAI Basics domain because rag architecture fundamentals is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team wants safer change management around rag architecture fundamentals in the GenAI Basics domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "The AIF-C01 blueprint for GenAI Basics needs better resilience around rag architecture fundamentals. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team cannot prove ownership or accountability for rag architecture fundamentals in the GenAI Basics domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A new workload must launch quickly with strong rag architecture fundamentals posture in the GenAI Basics domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A review shows that rag architecture fundamentals decisions in the GenAI Basics domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A team needs better observability for rag architecture fundamentals in the GenAI Basics domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A postmortem shows that weak rag architecture fundamentals practices in the GenAI Basics domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "For the AIF-C01 GenAI Basics domain, a team needs to improve token and latency trade-offs while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A production incident exposed weaknesses in token and latency trade-offs for the GenAI Basics domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A regulated workload depends on strong token and latency trade-offs controls in the GenAI Basics domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  },
  {
    "q": "A platform team needs scalable token and latency trade-offs practices for the GenAI Basics domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "GenAI Basics"
  }
];

const SERVICES = [
  {
    "name": "GenAI Basics",
    "emoji": "✨",
    "desc": "Core concepts for prompts, context grounding, and LLM application patterns.",
    "bullets": [
      "Prompt structure and context design",
      "RAG architecture fundamentals",
      "Token and latency trade-offs",
      "Evaluation basics for generated output",
      "Operational constraints and scaling basics"
    ]
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
      "Benchmarking and acceptance criteria"
    ]
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
      "Monitoring for harmful outputs"
    ]
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
      "Observability for AI workloads"
    ]
  }
];
