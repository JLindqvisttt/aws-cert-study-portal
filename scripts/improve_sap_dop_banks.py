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


def q(text, opts, answer, topic):
    return {"q": text, "options": opts, "answer": answer, "topic": topic}


sap_meta = {
    "id": "sap-c02",
    "code": "SAP-C02",
    "name": "Solutions Architect",
    "fullName": "AWS Certified Solutions Architect - Professional",
    "emoji": "🏗️",
    "minutes": 180,
    "passingScore": 75,
    "examQuestions": 75,
    "color": "#f97316",
    "badge": "Professional",
    "description": "Advanced enterprise architecture, migration strategy, governance, and cost optimization on AWS.",
    "topics": ["Enterprise Design", "Migration", "Governance", "Cost Optimization"],
}

sap_topic_rules = [
    ("enterprise|landing zone|multi-account|shared services|transit gateway", "Enterprise Design"),
    ("migrat|cutover|rehost|replatform|refactor|datasync|dms", "Migration"),
    ("governance|scp|config|audit|compliance|control tower|organization", "Governance"),
    ("cost|rightsiz|savings|budget|optimization|finops", "Cost Optimization"),
]

sap_services = [
    {
        "name": "Enterprise Design",
        "emoji": "🏢",
        "desc": "Multi-account architecture, network topology, and shared platform services.",
        "bullets": [
            "Landing zone and organizational unit strategy",
            "Scalable networking and shared service patterns",
            "Resilience trade-offs across Regions and accounts",
            "Security boundaries and blast-radius reduction",
            "Design decisions for enterprise platform teams",
        ],
    },
    {
        "name": "Migration",
        "emoji": "🚚",
        "desc": "Large-scale migration patterns, cutover orchestration, and modernization pathways.",
        "bullets": [
            "Data migration sequencing and dependency mapping",
            "Hybrid connectivity during phased migration",
            "Downtime minimization and rollback planning",
            "Service selection for rehost/replatform/refactor",
            "Post-migration validation and optimization",
        ],
    },
    {
        "name": "Governance",
        "emoji": "🛡️",
        "desc": "Policy guardrails, compliance evidence, and preventive controls at scale.",
        "bullets": [
            "Preventive vs detective controls",
            "Account vending and baseline enforcement",
            "Auditability and evidence collection",
            "Identity and access guardrail design",
            "Automated remediation and policy exceptions",
        ],
    },
    {
        "name": "Cost Optimization",
        "emoji": "💰",
        "desc": "FinOps-aligned architecture decisions and continuous cost controls.",
        "bullets": [
            "Commitment strategies and workload profiling",
            "Chargeback/showback with tagging governance",
            "Storage and data transfer cost modeling",
            "Rightsizing and lifecycle automation",
            "Cost anomaly detection and response workflows",
        ],
    },
]

sap_questions = [
    q(
        "A global enterprise wants centralized shared services while keeping application accounts isolated. Which architecture best balances scale and control?",
        [
            "Single AWS account with all workloads and VPC peering",
            "Multi-account design with AWS Organizations, shared services VPC, and Transit Gateway",
            "Separate Regions for every team with no central networking",
            "One VPC per workload and manual route table exports",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "An enterprise needs deterministic DNS resolution between on-premises and many AWS accounts. What is the most maintainable pattern?",
        [
            "Deploy Route 53 Resolver inbound/outbound endpoints in each account manually",
            "Use a centralized DNS account with Route 53 Resolver rules shared via AWS RAM",
            "Use hosts files on all EC2 instances",
            "Expose every private zone publicly",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A company has strict RTO requirements for a tier-1 platform spanning multiple accounts. Which design is most appropriate?",
        [
            "Single-Region active-passive with manual recovery runbooks",
            "Multi-Region active-active with stateless services and replicated state stores",
            "Single AZ with frequent snapshots",
            "Warm standby without tested failover",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A central platform team must distribute hardened base AMIs to all accounts. Which approach is best?",
        [
            "Build AMIs manually in each account",
            "Use EC2 Image Builder pipeline and share AMIs through Organizations",
            "Copy AMIs by CLI scripts from engineers' laptops",
            "Use only public marketplace images",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A workload requires cross-account event routing with least privilege and high throughput. Which design is best?",
        [
            "Direct SNS to Lambda invokes using root credentials",
            "Amazon EventBridge event bus with resource policies and schema governance",
            "Polling DynamoDB every second",
            "S3 object notifications between all accounts",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A platform team wants consistent guardrails without blocking innovation. Which combination works best?",
        [
            "SCP deny-lists only, no baseline automation",
            "Control Tower guardrails plus account baseline pipelines and exception workflow",
            "Allow full admin and audit monthly",
            "Use IAM users with static access keys",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "An application has a high-volume east-west traffic pattern across microservices in one Region. Which networking choice is most scalable?",
        [
            "Many VPC peerings with transitive routing assumptions",
            "Hub-and-spoke architecture with Transit Gateway and segmented route domains",
            "Single subnet for all services",
            "Internet Gateway for internal service traffic",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A regulated enterprise needs immutable architecture history for audit and rollback. Which approach is best?",
        [
            "Manually document changes in wiki pages",
            "Use infrastructure as code with versioned pipelines and mandatory change approvals",
            "Apply changes directly in the console",
            "Disable drift detection to reduce noise",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A SaaS platform must isolate noisy tenants while sharing core services. Which approach is most appropriate?",
        [
            "All tenants in one account and one database",
            "Cell-based architecture with tenant segmentation and shared platform controls",
            "Dedicated Region per tenant by default",
            "Store tenant metadata in local files",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A team needs private connectivity to AWS services from hundreds of VPCs. Which pattern reduces operational overhead?",
        [
            "Create NAT Gateway in every subnet",
            "Centralized interface VPC endpoints with Private DNS and shared networking model",
            "Route all traffic through on-premises proxies",
            "Use only public service endpoints",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "An organization wants secure delegation for application teams to deploy only inside approved boundaries. What is best?",
        [
            "Grant AdministratorAccess to every team",
            "Permission boundaries and scoped deployment roles with CI/CD federation",
            "Long-lived access keys in secrets manager",
            "Root account access for production deploys",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A workload needs globally low latency reads while writes remain centralized. Which data strategy is best?",
        [
            "Single-AZ relational database",
            "Global read replicas or globally distributed tables based on consistency needs",
            "Cache disabled to simplify operations",
            "Nightly CSV exports to each Region",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A company wants policy-driven network segmentation across environments and business units. Which control model is best?",
        [
            "Subnet naming conventions only",
            "Transit Gateway route tables, security domains, and account-aligned OUs",
            "Single flat CIDR block for all environments",
            "Security groups with allow-all egress and ingress",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A central observability platform must ingest logs from all accounts with minimal custom code. What should be used?",
        [
            "SSH pull logs from instances",
            "CloudWatch cross-account observability with centralized dashboards and metric streams",
            "Store logs only on local disks",
            "Email log files daily",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "An enterprise requires standardized workload deployment blueprints for new business units. Which capability helps most?",
        [
            "Copy-paste CloudFormation templates from old projects",
            "Service Catalog products with approved guardrails and lifecycle updates",
            "Manual setup guides only",
            "Disable tagging to reduce friction",
        ],
        1,
        "Enterprise Design",
    ),
    q(
        "A migration wave includes Oracle databases with near-zero downtime requirements. Which approach is most suitable?",
        [
            "Stop source DB, export dump, and import days later",
            "AWS DMS with ongoing replication and controlled cutover window",
            "Manual SQL script copy over VPN",
            "Weekly snapshot transfers",
        ],
        1,
        "Migration",
    ),
    q(
        "A company is rehosting 800 VMs and needs dependency visibility before migration waves. What should they start with?",
        [
            "Migrate randomly by application owner preference",
            "Use Application Discovery Service and Migration Hub to map dependencies",
            "Move all databases first",
            "Turn off logging to speed discovery",
        ],
        1,
        "Migration",
    ),
    q(
        "A team needs to transfer 2 PB of archive data from a data center with limited bandwidth. What is the fastest option?",
        [
            "Use only SFTP over existing WAN links",
            "Use AWS Snowball Edge devices for bulk transfer",
            "Email encrypted drives to engineering team",
            "Compress and upload through a jump host",
        ],
        1,
        "Migration",
    ),
    q(
        "A company wants to modernize a monolith incrementally while preserving business continuity. Which strategy is best?",
        [
            "Big-bang rewrite with one production cutover",
            "Strangler pattern with domain-by-domain extraction behind routing control",
            "Freeze all features for 18 months",
            "Replatform everything to containers in one sprint",
        ],
        1,
        "Migration",
    ),
    q(
        "A migration program needs repeatable, auditable server moves with minimal agent management. Which service is best?",
        [
            "AWS Application Migration Service",
            "AWS Glue",
            "AWS Backup",
            "AWS Data Exchange",
        ],
        0,
        "Migration",
    ),
    q(
        "An application cutover requires DNS switchover with rapid rollback capability. What should the team do?",
        [
            "Use long DNS TTLs to stabilize cache",
            "Lower TTL in advance and use weighted/health-checked records for controlled shift",
            "Hardcode new IPs in clients",
            "Delete old records before testing",
        ],
        1,
        "Migration",
    ),
    q(
        "A company migrates file shares used by hybrid teams. Which solution provides managed NFS/SMB compatibility?",
        [
            "EC2 instances with local disks only",
            "Amazon FSx family selected by protocol and workload requirements",
            "S3 static website hosting",
            "Route 53 public records",
        ],
        1,
        "Migration",
    ),
    q(
        "A migration must keep legacy apps connected to on-premises systems during transition. Which connectivity option is most resilient?",
        [
            "Single internet VPN without redundancy",
            "Direct Connect with VPN backup and dynamic routing",
            "Public SSH tunnels from developer laptops",
            "No connectivity until final cutover",
        ],
        1,
        "Migration",
    ),
    q(
        "A team must validate application behavior in AWS before final cutover. Which practice is best?",
        [
            "Only run unit tests in dev",
            "Run production-like rehearsals with synthetic and replay traffic plus rollback drills",
            "Skip testing to reduce schedule risk",
            "Test only networking",
        ],
        1,
        "Migration",
    ),
    q(
        "A company needs to replicate objects continuously to another Region during migration. Which capability should they use?",
        [
            "S3 Cross-Region Replication with versioning",
            "Manual weekly copy jobs",
            "CloudFront invalidations",
            "RDS Multi-AZ",
        ],
        0,
        "Migration",
    ),
    q(
        "A migration office wants a single dashboard for wave status, blockers, and cutover readiness. Which service helps most?",
        [
            "AWS Migration Hub",
            "Amazon Inspector",
            "AWS Secrets Manager",
            "Amazon Athena",
        ],
        0,
        "Migration",
    ),
    q(
        "A data warehouse migration must minimize downtime and enable parallel validation. Which pattern is best?",
        [
            "Offline migration only",
            "Dual-run period with CDC synchronization and reconciliation checks",
            "Delete source after first load",
            "Skip schema mapping",
        ],
        1,
        "Migration",
    ),
    q(
        "A team is migrating container workloads and wants managed orchestration with least control-plane overhead. Which option fits?",
        [
            "Self-managed Kubernetes on EC2",
            "Amazon ECS with Fargate for simplified operations",
            "Manual Docker on virtual machines",
            "Batch scripts on on-prem servers",
        ],
        1,
        "Migration",
    ),
    q(
        "A company wants to classify all migration applications by business criticality and dependency risk. What should be established first?",
        [
            "A migration runbook only",
            "Application portfolio assessment with wave planning criteria",
            "Final cutover date for every app",
            "One shared VPC for all workloads",
        ],
        1,
        "Migration",
    ),
    q(
        "A migration involves thousands of schema changes that must be consistent across environments. Which method is best?",
        [
            "Manual SQL edits per environment",
            "Versioned schema migrations in CI/CD with automated validation",
            "Apply scripts directly in production",
            "Use one-time ETL jobs only",
        ],
        1,
        "Migration",
    ),
    q(
        "A security team wants to block creation of internet-facing resources in restricted OUs. Which control is most effective?",
        [
            "IAM policy attached to one developer role",
            "Service Control Policies at OU level",
            "Tagging conventions only",
            "CloudWatch alarms without enforcement",
        ],
        1,
        "Governance",
    ),
    q(
        "A compliance program needs continuous visibility into resource configuration drift. What should be implemented?",
        [
            "Monthly manual screenshots",
            "AWS Config rules with conformance packs and automated remediation",
            "Disable API access outside business hours",
            "Only billing reports",
        ],
        1,
        "Governance",
    ),
    q(
        "An enterprise must prove immutable audit trails for API activity across all accounts. Which service is required?",
        [
            "Amazon Athena",
            "AWS CloudTrail organization trails with log file validation",
            "Amazon SQS",
            "AWS Trusted Advisor",
        ],
        1,
        "Governance",
    ),
    q(
        "A platform team needs preventive encryption controls for all new storage resources. Which approach is best?",
        [
            "Post-deployment scripts run weekly",
            "SCP and preventive IaC guardrails enforcing encryption at creation",
            "Developer checklist in wiki",
            "Manual ticket reviews",
        ],
        1,
        "Governance",
    ),
    q(
        "A regulated company needs evidence that only approved AMIs are used in production. What should they use?",
        [
            "Instance tags reviewed quarterly",
            "EC2 allowed AMIs with policy enforcement and reporting",
            "Manual AMI naming standards",
            "CloudFront signed URLs",
        ],
        1,
        "Governance",
    ),
    q(
        "A security operations team wants automatic quarantine of noncompliant workloads. Which design is best?",
        [
            "Email alerts only",
            "EventBridge + Lambda remediation workflows tied to Config findings",
            "Developer self-remediation with no SLA",
            "Disable noncompliant alarms",
        ],
        1,
        "Governance",
    ),
    q(
        "An organization needs standardized account provisioning with baseline security controls. Which service is most appropriate?",
        [
            "AWS Control Tower account factory",
            "Manual account creation by finance",
            "Route 53 health checks",
            "Elastic Beanstalk environments",
        ],
        0,
        "Governance",
    ),
    q(
        "A governance board needs near real-time detection of publicly exposed S3 buckets. Which combination is best?",
        [
            "AWS Config + Security Hub + automated response playbook",
            "Monthly spreadsheet audits",
            "Only IAM Access Analyzer once per year",
            "Manual CLI scripts on demand",
        ],
        0,
        "Governance",
    ),
    q(
        "A company requires segregation of duties between infrastructure admins and auditors. Which model is best?",
        [
            "Shared admin role for all users",
            "Federated roles with least privilege and separate audit roles",
            "Long-lived root credentials for break-glass",
            "API keys in source control",
        ],
        1,
        "Governance",
    ),
    q(
        "A multinational company must retain logs according to regional legal requirements. Which practice helps most?",
        [
            "Single retention policy for all regions",
            "Region-specific log retention and lifecycle policies with governance automation",
            "Delete all logs after 7 days",
            "Store logs on ephemeral disks",
        ],
        1,
        "Governance",
    ),
    q(
        "A platform team wants consistent policy checks in CI/CD before deployment. Which mechanism is preferred?",
        [
            "Manual PR comments only",
            "Policy-as-code validation gates in deployment pipelines",
            "Post-production compliance checks only",
            "Disable merge protection",
        ],
        1,
        "Governance",
    ),
    q(
        "A company needs centralized visibility of security posture across all accounts and Regions. Which service fits best?",
        [
            "AWS Security Hub with delegated admin",
            "Amazon SES",
            "AWS Budgets",
            "Amazon MQ",
        ],
        0,
        "Governance",
    ),
    q(
        "A governance program requires exception management with traceability and expiration. What should be established?",
        [
            "Permanent exceptions by email",
            "Time-bound exception workflow with approvals and automatic revalidation",
            "Disable controls for affected teams",
            "Skip documentation for urgent cases",
        ],
        1,
        "Governance",
    ),
    q(
        "A company wants organization-wide detective controls without maintaining custom polling scripts. Which approach is best?",
        [
            "Use EventBridge and AWS Config managed rules",
            "Run cron jobs from one EC2 instance",
            "Collect logs only from production",
            "Rely on penetration tests only",
        ],
        0,
        "Governance",
    ),
    q(
        "A team needs to enforce mandatory tags for chargeback and ownership. Which control should be used?",
        [
            "Tagging guidance in onboarding docs",
            "Tag policies in AWS Organizations with preventive pipeline checks",
            "Monthly reminder emails",
            "Rely on cost explorer defaults",
        ],
        1,
        "Governance",
    ),
    q(
        "A compute-heavy workload has steady baseline usage and occasional bursts. Which purchasing strategy is most cost-effective?",
        [
            "100% On-Demand for all capacity",
            "Savings Plans for baseline plus Auto Scaling with On-Demand/Spot for burst",
            "Dedicated Hosts for all instances",
            "Use only Spot for critical baseline",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A company sees high NAT Gateway data processing charges. What action often gives the fastest savings?",
        [
            "Increase instance size",
            "Use VPC endpoints for AWS service traffic to bypass NAT",
            "Disable CloudWatch logging",
            "Move all workloads to one subnet",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A storage estate has mixed access patterns and rising costs. Which approach is best?",
        [
            "Move everything to S3 Standard",
            "Use lifecycle policies and Intelligent-Tiering based on access behavior",
            "Store all data on EFS",
            "Delete old versions without retention review",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A FinOps team needs confidence that rightsizing decisions will not hurt availability. What should they do?",
        [
            "Apply all recommendations instantly",
            "Use staged rightsizing with performance SLO monitoring and rollback thresholds",
            "Ignore utilization metrics",
            "Resize only once per year",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A company wants to reduce inter-AZ data transfer costs for chatty workloads. Which design consideration matters most?",
        [
            "Place tightly coupled services to minimize unnecessary cross-AZ traffic",
            "Disable multi-AZ",
            "Use larger AMIs",
            "Switch to dedicated hosts",
        ],
        0,
        "Cost Optimization",
    ),
    q(
        "A business unit wants monthly spend alerts and forecast-based anomaly detection. Which combination is best?",
        [
            "AWS Budgets and Cost Anomaly Detection",
            "CloudTrail and GuardDuty",
            "Route 53 and WAF",
            "Inspector and Macie",
        ],
        0,
        "Cost Optimization",
    ),
    q(
        "A team runs intermittent analytics jobs and pays for idle clusters. What is the best optimization?",
        [
            "Always-on cluster with manual pause reminders",
            "Use serverless or ephemeral job-based compute with automated start/stop",
            "Bigger instances with lower count",
            "Dedicated instances in every Region",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A company struggles to attribute shared platform costs to consuming teams. What should be implemented?",
        [
            "One shared account without tags",
            "Mandatory cost allocation tags and chargeback model via CUR analytics",
            "Manual monthly estimates",
            "Flat overhead split for all teams",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "RDS costs have grown due to overprovisioned instances and stale snapshots. Which action is best?",
        [
            "Disable backups",
            "Right-size instances, set snapshot retention lifecycle, and use Graviton where suitable",
            "Migrate all databases to EC2",
            "Increase provisioned IOPS by default",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "An application has predictable weekday traffic and low weekend demand. Which approach reduces cost safely?",
        [
            "Keep peak capacity 24/7",
            "Scheduled scaling plus target tracking policies",
            "Disable Auto Scaling",
            "Move to one large instance",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A team is paying high egress due to repeated cache misses for static content. Which service helps reduce origin transfer costs?",
        [
            "AWS CloudFront with optimized cache behaviors",
            "AWS Glue",
            "Amazon MQ",
            "AWS Artifact",
        ],
        0,
        "Cost Optimization",
    ),
    q(
        "A company needs procurement flexibility while still committing to long-term usage discounts. Which commitment model is most flexible?",
        [
            "Standard Reserved Instances only",
            "Compute Savings Plans",
            "Dedicated Hosts only",
            "Spot Fleets only",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A migration landed in AWS, but old resources remain idle and still billable. What should be done first?",
        [
            "Increase budget threshold",
            "Automated post-migration decommissioning workflow with approval checkpoints",
            "Ignore for one quarter",
            "Move idle resources to another account",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A workload stores large amounts of infrequently accessed compliance records. Which storage class strategy is most cost effective?",
        [
            "S3 Standard only",
            "S3 Glacier classes with retrieval policy aligned to legal timelines",
            "EBS gp3 volumes",
            "EFS One Zone for all records",
        ],
        1,
        "Cost Optimization",
    ),
    q(
        "A product team wants to optimize costs continuously, not quarterly. Which operating model is best?",
        [
            "Annual architecture review only",
            "Embed FinOps KPIs into sprint planning and engineering dashboards",
            "Finance-only ownership of cloud spend",
            "Disable cost observability tools",
        ],
        1,
        "Cost Optimization",
    ),
]


dop_meta = {
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
    "topics": ["CI/CD", "Observability", "Reliability", "Security Automation"],
}

dop_topic_rules = [
    ("ci\\/cd|pipeline|codebuild|codedeploy|codepipeline|artifact|release", "CI/CD"),
    ("observability|monitoring|cloudwatch|log|trace|x-ray|alarm|slo", "Observability"),
    ("reliability|rollback|canary|blue\\/green|autoscaling|failover", "Reliability"),
    ("security|automation|secrets|iam|policy|compliance|guardrail", "Security Automation"),
]

dop_services = [
    {
        "name": "CI/CD",
        "emoji": "🔄",
        "desc": "Automated software delivery with quality gates and progressive deployment strategies.",
        "bullets": [
            "Pipeline architecture and release safety patterns",
            "Artifact security, provenance, and promotion strategy",
            "Automated tests and deployment approvals",
            "Rollback design and blast-radius control",
            "Cross-account deployment governance",
        ],
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
            "Operational analytics and runbook linkage",
        ],
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
            "Backup and disaster recovery integration",
        ],
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
            "Automated compliance evidence collection",
        ],
    },
]

dop_questions = [
    q(
        "A team wants one pipeline definition for dev, staging, and prod with account-level isolation. Which pattern is best?",
        [
            "Separate manually maintained pipelines per environment",
            "Single CodePipeline with cross-account deployment roles and parameterized stages",
            "Deploy directly from developer machines",
            "Use one shared production account",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A release process needs immutable artifacts and cryptographic verification before production. Which approach is best?",
        [
            "Rebuild artifacts in each environment",
            "Sign build artifacts and verify signatures at promotion gates",
            "Store artifacts on developer laptops",
            "Skip provenance checks to improve speed",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A company experiences frequent deployment failures due to environment drift. What should be done first?",
        [
            "Increase deployment timeout",
            "Adopt infrastructure as code with deterministic environment provisioning",
            "Disable pre-deployment checks",
            "Allow manual hotfixes only",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A platform team needs manual approval only for high-risk production changes. Which design works best?",
        [
            "Manual approval on every commit",
            "Risk-based conditional approval stage with automated change classification",
            "No approvals at all",
            "Separate production pipeline with no tests",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A service has zero-downtime requirements and wants gradual rollout with automatic rollback on alarms. Which strategy is best?",
        [
            "All-at-once deployment",
            "Canary or linear deployment with alarm-driven rollback",
            "Blue/green without health checks",
            "Manual DNS switch after deployment",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A team wants to reduce lead time by parallelizing tests without lowering confidence. What should they do?",
        [
            "Run only unit tests",
            "Split test suites by risk and run in parallel with quality thresholds",
            "Remove integration tests",
            "Run all tests post-production",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A deployment framework must support safe database schema evolution across versions. Which practice is best?",
        [
            "Breaking schema changes first",
            "Backward-compatible expand/contract migration pattern",
            "Manual DB edits in production",
            "No schema versioning",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A company needs centralized pipeline governance but autonomous team releases. Which model is best?",
        [
            "One monolithic pipeline for every team",
            "Golden pipeline templates with team-owned repositories and controls",
            "No standardization",
            "Release windows only once per month",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A security audit requires proof that code in production came from reviewed commits. Which control is most important?",
        [
            "Branch naming standards",
            "Protected branches, required reviews, and signed commit/build traceability",
            "Manual release notes",
            "Periodic screenshot evidence",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A team wants to speed deployment by caching dependencies, but builds must remain reproducible. What is best?",
        [
            "Share mutable cache across all branches",
            "Versioned dependency caches with lockfiles and cache invalidation rules",
            "Disable lockfiles",
            "Download latest dependencies each run",
        ],
        1,
        "CI/CD",
    ),
    q(
        "An application has frequent rollback events due to config drift. Which control reduces this risk most?",
        [
            "Hardcode environment variables in code",
            "Centralized configuration management with versioning and promotion flow",
            "Manual console edits",
            "Store config in CI job history",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A pipeline must deploy to private subnets without opening inbound access. Which approach is best?",
        [
            "Public bastion with shared credentials",
            "Use deployment agents/roles with VPC endpoints and outbound-only control channels",
            "Disable network ACLs",
            "Temporarily open SSH from internet",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A company needs rapid rollback of container releases across multiple clusters. Which pattern is best?",
        [
            "Rebuild old image on rollback",
            "Immutable versioned images with release metadata and instant traffic reversion",
            "Delete old images immediately",
            "Patch containers in place",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A platform team wants to prevent accidental production deploys from feature branches. What should be implemented?",
        [
            "Convention-based warnings",
            "Branch protections and explicit deployment policy checks in pipeline",
            "Disable CI for feature branches",
            "Separate git server per team",
        ],
        1,
        "CI/CD",
    ),
    q(
        "A release includes risky infrastructure changes and new application code. Which sequence is safest?",
        [
            "Deploy both at once",
            "Provision infrastructure first, verify, then progressive app rollout",
            "Deploy app first then infra",
            "Skip verification to shorten downtime",
        ],
        1,
        "CI/CD",
    ),
    q(
        "An operations team wants to reduce alert fatigue from noisy alarms. Which action should be prioritized?",
        [
            "Create more alarms for every metric",
            "Define SLO-based alerts with deduplication and actionable thresholds",
            "Disable all warning alarms",
            "Route all alerts to one email inbox",
        ],
        1,
        "Observability",
    ),
    q(
        "A microservices platform needs end-to-end transaction visibility. Which telemetry strategy is best?",
        [
            "Logs only",
            "Distributed tracing with correlation IDs across services",
            "CPU metrics only",
            "Weekly packet captures",
        ],
        1,
        "Observability",
    ),
    q(
        "A company wants a single dashboard across many AWS accounts and Regions. Which approach is most maintainable?",
        [
            "Manual dashboard copies per account",
            "Cross-account observability with centralized metrics/log ingestion",
            "SSH and tail logs from instances",
            "One dashboard per service owner only",
        ],
        1,
        "Observability",
    ),
    q(
        "A critical API has intermittent latency spikes. What should be done first during investigation?",
        [
            "Scale all components immediately",
            "Correlate traces, logs, and dependency metrics for the affected path",
            "Restart production services",
            "Disable request logging",
        ],
        1,
        "Observability",
    ),
    q(
        "A team needs near real-time anomaly detection for business and technical KPIs. Which pattern is best?",
        [
            "Daily batch reporting only",
            "Streaming metrics with anomaly detection and incident hooks",
            "Weekly manual review",
            "Static dashboards without alerts",
        ],
        1,
        "Observability",
    ),
    q(
        "A platform team cannot identify who changed alarm thresholds. Which control is required?",
        [
            "Store alarm configs in chat messages",
            "Manage alarm definitions as code with audited change history",
            "Allow direct console edits",
            "Recreate alarms monthly",
        ],
        1,
        "Observability",
    ),
    q(
        "An incident response team needs faster triage from alerts. What should be added to alarms?",
        [
            "Longer names",
            "Runbook links, ownership metadata, and context-rich descriptions",
            "Random tags",
            "Extra SNS topics only",
        ],
        1,
        "Observability",
    ),
    q(
        "A service emits high-cardinality metrics that drive up cost. What is the best optimization?",
        [
            "Stop metric collection",
            "Review dimensions and aggregate where high-cardinality adds limited value",
            "Increase retention indefinitely",
            "Duplicate metrics across namespaces",
        ],
        1,
        "Observability",
    ),
    q(
        "A team needs long-term queryable logs for compliance and troubleshooting. Which architecture fits best?",
        [
            "Store logs only on ephemeral volumes",
            "Tiered log storage with lifecycle to cost-efficient analytics",
            "Delete logs after 24 hours",
            "Export logs to local desktops",
        ],
        1,
        "Observability",
    ),
    q(
        "A production issue spans queueing, API, and database layers. Which observability capability is most valuable?",
        [
            "Single host CPU graph",
            "Service map with dependency health and latency breakdown",
            "Weekly status meeting",
            "Manual ping checks",
        ],
        1,
        "Observability",
    ),
    q(
        "A team wants to detect silent failures in scheduled jobs. What should be implemented?",
        [
            "Only failure logs",
            "Heartbeat metrics and missing-signal alarms",
            "Lower cron frequency",
            "Disable retries",
        ],
        1,
        "Observability",
    ),
    q(
        "A company needs to measure customer impact during incidents, not only system metrics. What is best?",
        [
            "Monitor server CPU only",
            "Track user-journey SLIs and error budgets",
            "Count deploys per week",
            "Use log volume as availability metric",
        ],
        1,
        "Observability",
    ),
    q(
        "A central team wants safer production troubleshooting. Which logging practice should be avoided?",
        [
            "Structured logs with request IDs",
            "Logging secrets and personal data in plaintext",
            "Consistent log schema",
            "Redaction controls",
        ],
        1,
        "Observability",
    ),
    q(
        "A deployment introduced a subtle performance regression. Which approach helps confirm root cause fastest?",
        [
            "Scale out blindly",
            "Compare pre/post deployment traces and latency histograms",
            "Rollback without analysis",
            "Restart database",
        ],
        1,
        "Observability",
    ),
    q(
        "A team wants to correlate incidents with release events automatically. Which integration is best?",
        [
            "Manual spreadsheet tracking",
            "Emit deployment markers and annotate dashboards/alerts",
            "Disable deployment notifications",
            "Use only calendar invites",
        ],
        1,
        "Observability",
    ),
    q(
        "A critical API requires zero-impact releases under variable traffic. Which deployment strategy is best?",
        [
            "All-at-once updates",
            "Blue/green or canary with automatic health-based rollback",
            "Manual restart during peak",
            "Single server deployment",
        ],
        1,
        "Reliability",
    ),
    q(
        "A team needs to validate disaster recovery readiness continuously. What should they implement?",
        [
            "Annual tabletop only",
            "Automated DR game days with measurable RTO/RPO outcomes",
            "Disable failover tests in production-like environments",
            "Document-only DR plan",
        ],
        1,
        "Reliability",
    ),
    q(
        "A queue-backed workload suffers from retry storms during downstream outages. Which control is best?",
        [
            "Unlimited retries with no delay",
            "Exponential backoff, jitter, and dead-letter handling",
            "Disable retries entirely",
            "Increase thread count only",
        ],
        1,
        "Reliability",
    ),
    q(
        "A stateful service needs resilience against AZ failure. Which architecture is most appropriate?",
        [
            "Single-AZ persistent store",
            "Multi-AZ data replication with automatic failover",
            "Nightly backups only",
            "Manual snapshot restore",
        ],
        1,
        "Reliability",
    ),
    q(
        "A team wants to reduce incident blast radius from bad deploys. Which approach works best?",
        [
            "Deploy globally at once",
            "Phased regional rollout with stop conditions and rollback hooks",
            "Disable alarms during deploy",
            "Use one shared account for all stages",
        ],
        1,
        "Reliability",
    ),
    q(
        "A service is overprovisioned for peak but idle most hours. Which reliability-safe optimization is best?",
        [
            "Disable autoscaling",
            "Use target tracking autoscaling with tested min capacity floors",
            "Single large instance only",
            "Spot instances for critical baseline with no fallback",
        ],
        1,
        "Reliability",
    ),
    q(
        "A business-critical workflow requires exactly-once semantics in processing. Which design helps most?",
        [
            "At-least-once without idempotency",
            "Idempotent handlers with deduplication keys and transactional boundaries",
            "Disable retries",
            "Manual replay only",
        ],
        1,
        "Reliability",
    ),
    q(
        "A team needs confidence that rollback will succeed under load. What should they do?",
        [
            "Trust theoretical runbooks",
            "Continuously test rollback paths in production-like traffic scenarios",
            "Rollback only in emergencies",
            "Avoid release metadata",
        ],
        1,
        "Reliability",
    ),
    q(
        "An event-driven system needs protection against poison messages. Which pattern is best?",
        [
            "Infinite retries",
            "Retry policy with DLQ and quarantine/inspection workflow",
            "Drop failed messages silently",
            "Pause all consumers permanently",
        ],
        1,
        "Reliability",
    ),
    q(
        "A team wants resilience against dependency outages in upstream services. Which mechanism is best?",
        [
            "Increase timeout everywhere",
            "Circuit breakers with graceful degradation and fallback responses",
            "Synchronous retries only",
            "Disable caching",
        ],
        1,
        "Reliability",
    ),
    q(
        "A service needs predictable recovery from accidental data deletion. Which strategy is best?",
        [
            "Periodic manual exports",
            "Automated backups, point-in-time recovery, and restore validation",
            "No backup for non-production",
            "Restore only after customer reports",
        ],
        1,
        "Reliability",
    ),
    q(
        "An architecture review finds a single shared dependency that can fail all tenants. What should be done?",
        [
            "Increase instance size",
            "Remove single points of failure with isolation boundaries and redundancy",
            "Add more logging only",
            "Run in one AZ for consistency",
        ],
        1,
        "Reliability",
    ),
    q(
        "A team needs controlled rollback of infrastructure changes. Which capability is most important?",
        [
            "Manual console edits",
            "Versioned IaC with stack policy and automated drift detection",
            "One shared admin credential",
            "No change set previews",
        ],
        1,
        "Reliability",
    ),
    q(
        "A latency-sensitive service wants high availability with minimal failover impact. Which approach is best?",
        [
            "Warm standby tested yearly",
            "Active-active routing with health checks and state replication",
            "Cold backup on tape",
            "One Region only",
        ],
        1,
        "Reliability",
    ),
    q(
        "A release caused high error rates in one region only. What immediate action is most appropriate?",
        [
            "Continue rollout globally",
            "Halt rollout and rollback affected region while preserving healthy regions",
            "Disable alerts",
            "Delete deployment history",
        ],
        1,
        "Reliability",
    ),
    q(
        "A company wants to prevent secrets from being exposed in CI logs and build artifacts. Which control is most effective?",
        [
            "Store secrets in environment variables in plaintext",
            "Use secrets manager integration with masked outputs and short-lived credentials",
            "Commit encrypted secrets with shared key in repo",
            "Email secrets to release managers",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A security team needs mandatory vulnerability scans before production deployment. Which pipeline pattern is best?",
        [
            "Run scans after deployment",
            "Add blocking security scan stages with severity-based policy gates",
            "Manual scans once per quarter",
            "Skip scan for hotfixes",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A team must enforce least privilege for deployment roles across accounts. What is best?",
        [
            "AdministratorAccess everywhere",
            "Scoped IAM roles with permission boundaries and session controls",
            "Long-lived root keys",
            "Shared static credentials",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A compliance program requires tamper-evident evidence of pipeline actions. Which source is primary?",
        [
            "Chat transcripts",
            "CloudTrail audit logs with centralized immutable storage",
            "Screenshot archives",
            "Developer memory",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A platform team wants to block deployment of unapproved container images. Which control is best?",
        [
            "Naming conventions only",
            "Admission/policy checks validating trusted registry and signatures",
            "Post-deployment warning emails",
            "Manual review after incident",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A company needs automatic key rotation for application secrets without code changes. Which design helps most?",
        [
            "Hardcoded secrets in config files",
            "Managed secrets rotation with runtime retrieval",
            "Quarterly manual key updates",
            "Store secrets in build artifacts",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A release process must ensure dependencies have no critical CVEs. Which workflow is best?",
        [
            "Ignore transitive dependencies",
            "Software composition analysis with policy gate and approved exception path",
            "Scan only production branches monthly",
            "Manual package reviews only",
        ],
        1,
        "Security Automation",
    ),
    q(
        "An organization needs to prevent privilege escalation via CI runners. Which control is most important?",
        [
            "Use shared runners with broad permissions",
            "Ephemeral isolated runners with scoped tokens and no persistent credentials",
            "Store runner credentials in plain text",
            "Allow sudo for all build steps",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A team must prove production artifacts were built from approved source. Which capability is key?",
        [
            "Manual changelog edits",
            "Artifact provenance and attestations linked to signed commits",
            "Release notes in spreadsheets",
            "Random sampling",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A company wants automatic response to high-risk IAM changes. Which pattern is best?",
        [
            "Weekly manual audits",
            "Event-driven detection with immediate rollback/quarantine workflow",
            "Disable IAM activity logs",
            "Open support ticket after incidents",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A platform team needs policy checks for infrastructure templates before merge. What should be used?",
        [
            "Manual linting only",
            "Policy-as-code static checks integrated into PR pipeline",
            "Post-production drift reports only",
            "Skip checks for trusted contributors",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A service handles sensitive data and must ensure encryption is never disabled by mistake. Which control is best?",
        [
            "Runbook reminders",
            "Preventive policy guardrails plus deployment-time validation",
            "Quarterly audits only",
            "Developer conventions",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A team needs secure temporary access for incident remediation without static credentials. Which method is best?",
        [
            "Shared emergency user account",
            "Federated just-in-time role assumption with short session duration",
            "Permanent admin API keys",
            "Disable MFA for responders",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A CI pipeline publishes logs to centralized storage; auditors require PII protection. What should be implemented?",
        [
            "Store logs unfiltered",
            "Log redaction/tokenization and access controls with least privilege",
            "Delete all logs after deploy",
            "Expose logs publicly for transparency",
        ],
        1,
        "Security Automation",
    ),
    q(
        "A team needs continuous compliance reporting with minimal manual work. Which architecture is best?",
        [
            "Spreadsheet-based monthly review",
            "Automated control evaluation, aggregation dashboard, and evidence retention",
            "Penetration test only",
            "One-time audit before launch",
        ],
        1,
        "Security Automation",
    ),
]


write_js(ROOT / "questions-sap-c02.js", sap_meta, sap_topic_rules, sap_questions, sap_services)
write_js(ROOT / "questions-dop-c02.js", dop_meta, dop_topic_rules, dop_questions, dop_services)
print(f"Wrote SAP={len(sap_questions)} DOP={len(dop_questions)} questions")
