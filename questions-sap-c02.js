const CERT_META = {
  "id": "sap-c02",
  "code": "SAP-C02",
  "name": "Solutions Architect",
  "fullName": "AWS Certified Solutions Architect - Professional",
  "emoji": "\ud83c\udfd7\ufe0f",
  "minutes": 180,
  "passingScore": 75,
  "examQuestions": 75,
  "color": "#f97316",
  "badge": "Professional",
  "description": "Advanced enterprise architecture, migration strategy, governance, and cost optimization on AWS.",
  "topics": [
    "Enterprise Design",
    "Migration",
    "Governance",
    "Cost Optimization"
  ]
};

const TOPIC_RULES = [
  [/enterprise|landing zone|multi-account|shared services|transit gateway/i, 'Enterprise Design'],
  [/migrat|cutover|rehost|replatform|refactor|datasync|dms/i, 'Migration'],
  [/governance|scp|config|audit|compliance|control tower|organization/i, 'Governance'],
  [/cost|rightsiz|savings|budget|optimization|finops/i, 'Cost Optimization'],
];

const QUESTIONS = [
  {
    "q": "A global enterprise wants centralized shared services while keeping application accounts isolated. Which architecture best balances scale and control?",
    "options": [
      "Single AWS account with all workloads and VPC peering",
      "Multi-account design with AWS Organizations, shared services VPC, and Transit Gateway",
      "Separate Regions for every team with no central networking",
      "One VPC per workload and manual route table exports"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "An enterprise needs deterministic DNS resolution between on-premises and many AWS accounts. What is the most maintainable pattern?",
    "options": [
      "Deploy Route 53 Resolver inbound/outbound endpoints in each account manually",
      "Use a centralized DNS account with Route 53 Resolver rules shared via AWS RAM",
      "Use hosts files on all EC2 instances",
      "Expose every private zone publicly"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A company has strict RTO requirements for a tier-1 platform spanning multiple accounts. Which design is most appropriate?",
    "options": [
      "Single-Region active-passive with manual recovery runbooks",
      "Multi-Region active-active with stateless services and replicated state stores",
      "Single AZ with frequent snapshots",
      "Warm standby without tested failover"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A central platform team must distribute hardened base AMIs to all accounts. Which approach is best?",
    "options": [
      "Build AMIs manually in each account",
      "Use EC2 Image Builder pipeline and share AMIs through Organizations",
      "Copy AMIs by CLI scripts from engineers' laptops",
      "Use only public marketplace images"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A workload requires cross-account event routing with least privilege and high throughput. Which design is best?",
    "options": [
      "Direct SNS to Lambda invokes using root credentials",
      "Amazon EventBridge event bus with resource policies and schema governance",
      "Polling DynamoDB every second",
      "S3 object notifications between all accounts"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A platform team wants consistent guardrails without blocking innovation. Which combination works best?",
    "options": [
      "SCP deny-lists only, no baseline automation",
      "Control Tower guardrails plus account baseline pipelines and exception workflow",
      "Allow full admin and audit monthly",
      "Use IAM users with static access keys"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "An application has a high-volume east-west traffic pattern across microservices in one Region. Which networking choice is most scalable?",
    "options": [
      "Many VPC peerings with transitive routing assumptions",
      "Hub-and-spoke architecture with Transit Gateway and segmented route domains",
      "Single subnet for all services",
      "Internet Gateway for internal service traffic"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A regulated enterprise needs immutable architecture history for audit and rollback. Which approach is best?",
    "options": [
      "Manually document changes in wiki pages",
      "Use infrastructure as code with versioned pipelines and mandatory change approvals",
      "Apply changes directly in the console",
      "Disable drift detection to reduce noise"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A SaaS platform must isolate noisy tenants while sharing core services. Which approach is most appropriate?",
    "options": [
      "All tenants in one account and one database",
      "Cell-based architecture with tenant segmentation and shared platform controls",
      "Dedicated Region per tenant by default",
      "Store tenant metadata in local files"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A team needs private connectivity to AWS services from hundreds of VPCs. Which pattern reduces operational overhead?",
    "options": [
      "Create NAT Gateway in every subnet",
      "Centralized interface VPC endpoints with Private DNS and shared networking model",
      "Route all traffic through on-premises proxies",
      "Use only public service endpoints"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "An organization wants secure delegation for application teams to deploy only inside approved boundaries. What is best?",
    "options": [
      "Grant AdministratorAccess to every team",
      "Permission boundaries and scoped deployment roles with CI/CD federation",
      "Long-lived access keys in secrets manager",
      "Root account access for production deploys"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A workload needs globally low latency reads while writes remain centralized. Which data strategy is best?",
    "options": [
      "Single-AZ relational database",
      "Global read replicas or globally distributed tables based on consistency needs",
      "Cache disabled to simplify operations",
      "Nightly CSV exports to each Region"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A company wants policy-driven network segmentation across environments and business units. Which control model is best?",
    "options": [
      "Subnet naming conventions only",
      "Transit Gateway route tables, security domains, and account-aligned OUs",
      "Single flat CIDR block for all environments",
      "Security groups with allow-all egress and ingress"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A central observability platform must ingest logs from all accounts with minimal custom code. What should be used?",
    "options": [
      "SSH pull logs from instances",
      "CloudWatch cross-account observability with centralized dashboards and metric streams",
      "Store logs only on local disks",
      "Email log files daily"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "An enterprise requires standardized workload deployment blueprints for new business units. Which capability helps most?",
    "options": [
      "Copy-paste CloudFormation templates from old projects",
      "Service Catalog products with approved guardrails and lifecycle updates",
      "Manual setup guides only",
      "Disable tagging to reduce friction"
    ],
    "answer": 1,
    "topic": "Enterprise Design"
  },
  {
    "q": "A migration wave includes Oracle databases with near-zero downtime requirements. Which approach is most suitable?",
    "options": [
      "Stop source DB, export dump, and import days later",
      "AWS DMS with ongoing replication and controlled cutover window",
      "Manual SQL script copy over VPN",
      "Weekly snapshot transfers"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A company is rehosting 800 VMs and needs dependency visibility before migration waves. What should they start with?",
    "options": [
      "Migrate randomly by application owner preference",
      "Use Application Discovery Service and Migration Hub to map dependencies",
      "Move all databases first",
      "Turn off logging to speed discovery"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A team needs to transfer 2 PB of archive data from a data center with limited bandwidth. What is the fastest option?",
    "options": [
      "Use only SFTP over existing WAN links",
      "Use AWS Snowball Edge devices for bulk transfer",
      "Email encrypted drives to engineering team",
      "Compress and upload through a jump host"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A company wants to modernize a monolith incrementally while preserving business continuity. Which strategy is best?",
    "options": [
      "Big-bang rewrite with one production cutover",
      "Strangler pattern with domain-by-domain extraction behind routing control",
      "Freeze all features for 18 months",
      "Replatform everything to containers in one sprint"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A migration program needs repeatable, auditable server moves with minimal agent management. Which service is best?",
    "options": [
      "AWS Application Migration Service",
      "AWS Glue",
      "AWS Backup",
      "AWS Data Exchange"
    ],
    "answer": 0,
    "topic": "Migration"
  },
  {
    "q": "An application cutover requires DNS switchover with rapid rollback capability. What should the team do?",
    "options": [
      "Use long DNS TTLs to stabilize cache",
      "Lower TTL in advance and use weighted/health-checked records for controlled shift",
      "Hardcode new IPs in clients",
      "Delete old records before testing"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A company migrates file shares used by hybrid teams. Which solution provides managed NFS/SMB compatibility?",
    "options": [
      "EC2 instances with local disks only",
      "Amazon FSx family selected by protocol and workload requirements",
      "S3 static website hosting",
      "Route 53 public records"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A migration must keep legacy apps connected to on-premises systems during transition. Which connectivity option is most resilient?",
    "options": [
      "Single internet VPN without redundancy",
      "Direct Connect with VPN backup and dynamic routing",
      "Public SSH tunnels from developer laptops",
      "No connectivity until final cutover"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A team must validate application behavior in AWS before final cutover. Which practice is best?",
    "options": [
      "Only run unit tests in dev",
      "Run production-like rehearsals with synthetic and replay traffic plus rollback drills",
      "Skip testing to reduce schedule risk",
      "Test only networking"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A company needs to replicate objects continuously to another Region during migration. Which capability should they use?",
    "options": [
      "S3 Cross-Region Replication with versioning",
      "Manual weekly copy jobs",
      "CloudFront invalidations",
      "RDS Multi-AZ"
    ],
    "answer": 0,
    "topic": "Migration"
  },
  {
    "q": "A migration office wants a single dashboard for wave status, blockers, and cutover readiness. Which service helps most?",
    "options": [
      "AWS Migration Hub",
      "Amazon Inspector",
      "AWS Secrets Manager",
      "Amazon Athena"
    ],
    "answer": 0,
    "topic": "Migration"
  },
  {
    "q": "A data warehouse migration must minimize downtime and enable parallel validation. Which pattern is best?",
    "options": [
      "Offline migration only",
      "Dual-run period with CDC synchronization and reconciliation checks",
      "Delete source after first load",
      "Skip schema mapping"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A team is migrating container workloads and wants managed orchestration with least control-plane overhead. Which option fits?",
    "options": [
      "Self-managed Kubernetes on EC2",
      "Amazon ECS with Fargate for simplified operations",
      "Manual Docker on virtual machines",
      "Batch scripts on on-prem servers"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A company wants to classify all migration applications by business criticality and dependency risk. What should be established first?",
    "options": [
      "A migration runbook only",
      "Application portfolio assessment with wave planning criteria",
      "Final cutover date for every app",
      "One shared VPC for all workloads"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A migration involves thousands of schema changes that must be consistent across environments. Which method is best?",
    "options": [
      "Manual SQL edits per environment",
      "Versioned schema migrations in CI/CD with automated validation",
      "Apply scripts directly in production",
      "Use one-time ETL jobs only"
    ],
    "answer": 1,
    "topic": "Migration"
  },
  {
    "q": "A security team wants to block creation of internet-facing resources in restricted OUs. Which control is most effective?",
    "options": [
      "IAM policy attached to one developer role",
      "Service Control Policies at OU level",
      "Tagging conventions only",
      "CloudWatch alarms without enforcement"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A compliance program needs continuous visibility into resource configuration drift. What should be implemented?",
    "options": [
      "Monthly manual screenshots",
      "AWS Config rules with conformance packs and automated remediation",
      "Disable API access outside business hours",
      "Only billing reports"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "An enterprise must prove immutable audit trails for API activity across all accounts. Which service is required?",
    "options": [
      "Amazon Athena",
      "AWS CloudTrail organization trails with log file validation",
      "Amazon SQS",
      "AWS Trusted Advisor"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A platform team needs preventive encryption controls for all new storage resources. Which approach is best?",
    "options": [
      "Post-deployment scripts run weekly",
      "SCP and preventive IaC guardrails enforcing encryption at creation",
      "Developer checklist in wiki",
      "Manual ticket reviews"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A regulated company needs evidence that only approved AMIs are used in production. What should they use?",
    "options": [
      "Instance tags reviewed quarterly",
      "EC2 allowed AMIs with policy enforcement and reporting",
      "Manual AMI naming standards",
      "CloudFront signed URLs"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A security operations team wants automatic quarantine of noncompliant workloads. Which design is best?",
    "options": [
      "Email alerts only",
      "EventBridge + Lambda remediation workflows tied to Config findings",
      "Developer self-remediation with no SLA",
      "Disable noncompliant alarms"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "An organization needs standardized account provisioning with baseline security controls. Which service is most appropriate?",
    "options": [
      "AWS Control Tower account factory",
      "Manual account creation by finance",
      "Route 53 health checks",
      "Elastic Beanstalk environments"
    ],
    "answer": 0,
    "topic": "Governance"
  },
  {
    "q": "A governance board needs near real-time detection of publicly exposed S3 buckets. Which combination is best?",
    "options": [
      "AWS Config + Security Hub + automated response playbook",
      "Monthly spreadsheet audits",
      "Only IAM Access Analyzer once per year",
      "Manual CLI scripts on demand"
    ],
    "answer": 0,
    "topic": "Governance"
  },
  {
    "q": "A company requires segregation of duties between infrastructure admins and auditors. Which model is best?",
    "options": [
      "Shared admin role for all users",
      "Federated roles with least privilege and separate audit roles",
      "Long-lived root credentials for break-glass",
      "API keys in source control"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A multinational company must retain logs according to regional legal requirements. Which practice helps most?",
    "options": [
      "Single retention policy for all regions",
      "Region-specific log retention and lifecycle policies with governance automation",
      "Delete all logs after 7 days",
      "Store logs on ephemeral disks"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A platform team wants consistent policy checks in CI/CD before deployment. Which mechanism is preferred?",
    "options": [
      "Manual PR comments only",
      "Policy-as-code validation gates in deployment pipelines",
      "Post-production compliance checks only",
      "Disable merge protection"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A company needs centralized visibility of security posture across all accounts and Regions. Which service fits best?",
    "options": [
      "AWS Security Hub with delegated admin",
      "Amazon SES",
      "AWS Budgets",
      "Amazon MQ"
    ],
    "answer": 0,
    "topic": "Governance"
  },
  {
    "q": "A governance program requires exception management with traceability and expiration. What should be established?",
    "options": [
      "Permanent exceptions by email",
      "Time-bound exception workflow with approvals and automatic revalidation",
      "Disable controls for affected teams",
      "Skip documentation for urgent cases"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A company wants organization-wide detective controls without maintaining custom polling scripts. Which approach is best?",
    "options": [
      "Use EventBridge and AWS Config managed rules",
      "Run cron jobs from one EC2 instance",
      "Collect logs only from production",
      "Rely on penetration tests only"
    ],
    "answer": 0,
    "topic": "Governance"
  },
  {
    "q": "A team needs to enforce mandatory tags for chargeback and ownership. Which control should be used?",
    "options": [
      "Tagging guidance in onboarding docs",
      "Tag policies in AWS Organizations with preventive pipeline checks",
      "Monthly reminder emails",
      "Rely on cost explorer defaults"
    ],
    "answer": 1,
    "topic": "Governance"
  },
  {
    "q": "A compute-heavy workload has steady baseline usage and occasional bursts. Which purchasing strategy is most cost-effective?",
    "options": [
      "100% On-Demand for all capacity",
      "Savings Plans for baseline plus Auto Scaling with On-Demand/Spot for burst",
      "Dedicated Hosts for all instances",
      "Use only Spot for critical baseline"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A company sees high NAT Gateway data processing charges. What action often gives the fastest savings?",
    "options": [
      "Increase instance size",
      "Use VPC endpoints for AWS service traffic to bypass NAT",
      "Disable CloudWatch logging",
      "Move all workloads to one subnet"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A storage estate has mixed access patterns and rising costs. Which approach is best?",
    "options": [
      "Move everything to S3 Standard",
      "Use lifecycle policies and Intelligent-Tiering based on access behavior",
      "Store all data on EFS",
      "Delete old versions without retention review"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A FinOps team needs confidence that rightsizing decisions will not hurt availability. What should they do?",
    "options": [
      "Apply all recommendations instantly",
      "Use staged rightsizing with performance SLO monitoring and rollback thresholds",
      "Ignore utilization metrics",
      "Resize only once per year"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A company wants to reduce inter-AZ data transfer costs for chatty workloads. Which design consideration matters most?",
    "options": [
      "Place tightly coupled services to minimize unnecessary cross-AZ traffic",
      "Disable multi-AZ",
      "Use larger AMIs",
      "Switch to dedicated hosts"
    ],
    "answer": 0,
    "topic": "Cost Optimization"
  },
  {
    "q": "A business unit wants monthly spend alerts and forecast-based anomaly detection. Which combination is best?",
    "options": [
      "AWS Budgets and Cost Anomaly Detection",
      "CloudTrail and GuardDuty",
      "Route 53 and WAF",
      "Inspector and Macie"
    ],
    "answer": 0,
    "topic": "Cost Optimization"
  },
  {
    "q": "A team runs intermittent analytics jobs and pays for idle clusters. What is the best optimization?",
    "options": [
      "Always-on cluster with manual pause reminders",
      "Use serverless or ephemeral job-based compute with automated start/stop",
      "Bigger instances with lower count",
      "Dedicated instances in every Region"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A company struggles to attribute shared platform costs to consuming teams. What should be implemented?",
    "options": [
      "One shared account without tags",
      "Mandatory cost allocation tags and chargeback model via CUR analytics",
      "Manual monthly estimates",
      "Flat overhead split for all teams"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "RDS costs have grown due to overprovisioned instances and stale snapshots. Which action is best?",
    "options": [
      "Disable backups",
      "Right-size instances, set snapshot retention lifecycle, and use Graviton where suitable",
      "Migrate all databases to EC2",
      "Increase provisioned IOPS by default"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "An application has predictable weekday traffic and low weekend demand. Which approach reduces cost safely?",
    "options": [
      "Keep peak capacity 24/7",
      "Scheduled scaling plus target tracking policies",
      "Disable Auto Scaling",
      "Move to one large instance"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A team is paying high egress due to repeated cache misses for static content. Which service helps reduce origin transfer costs?",
    "options": [
      "AWS CloudFront with optimized cache behaviors",
      "AWS Glue",
      "Amazon MQ",
      "AWS Artifact"
    ],
    "answer": 0,
    "topic": "Cost Optimization"
  },
  {
    "q": "A company needs procurement flexibility while still committing to long-term usage discounts. Which commitment model is most flexible?",
    "options": [
      "Standard Reserved Instances only",
      "Compute Savings Plans",
      "Dedicated Hosts only",
      "Spot Fleets only"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A migration landed in AWS, but old resources remain idle and still billable. What should be done first?",
    "options": [
      "Increase budget threshold",
      "Automated post-migration decommissioning workflow with approval checkpoints",
      "Ignore for one quarter",
      "Move idle resources to another account"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A workload stores large amounts of infrequently accessed compliance records. Which storage class strategy is most cost effective?",
    "options": [
      "S3 Standard only",
      "S3 Glacier classes with retrieval policy aligned to legal timelines",
      "EBS gp3 volumes",
      "EFS One Zone for all records"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  },
  {
    "q": "A product team wants to optimize costs continuously, not quarterly. Which operating model is best?",
    "options": [
      "Annual architecture review only",
      "Embed FinOps KPIs into sprint planning and engineering dashboards",
      "Finance-only ownership of cloud spend",
      "Disable cost observability tools"
    ],
    "answer": 1,
    "topic": "Cost Optimization"
  }
];

const SERVICES = [
  {
    "name": "Enterprise Design",
    "emoji": "\ud83c\udfe2",
    "desc": "Multi-account architecture, network topology, and shared platform services.",
    "bullets": [
      "Landing zone and organizational unit strategy",
      "Scalable networking and shared service patterns",
      "Resilience trade-offs across Regions and accounts",
      "Security boundaries and blast-radius reduction",
      "Design decisions for enterprise platform teams"
    ]
  },
  {
    "name": "Migration",
    "emoji": "\ud83d\ude9a",
    "desc": "Large-scale migration patterns, cutover orchestration, and modernization pathways.",
    "bullets": [
      "Data migration sequencing and dependency mapping",
      "Hybrid connectivity during phased migration",
      "Downtime minimization and rollback planning",
      "Service selection for rehost/replatform/refactor",
      "Post-migration validation and optimization"
    ]
  },
  {
    "name": "Governance",
    "emoji": "\ud83d\udee1\ufe0f",
    "desc": "Policy guardrails, compliance evidence, and preventive controls at scale.",
    "bullets": [
      "Preventive vs detective controls",
      "Account vending and baseline enforcement",
      "Auditability and evidence collection",
      "Identity and access guardrail design",
      "Automated remediation and policy exceptions"
    ]
  },
  {
    "name": "Cost Optimization",
    "emoji": "\ud83d\udcb0",
    "desc": "FinOps-aligned architecture decisions and continuous cost controls.",
    "bullets": [
      "Commitment strategies and workload profiling",
      "Chargeback/showback with tagging governance",
      "Storage and data transfer cost modeling",
      "Rightsizing and lifecycle automation",
      "Cost anomaly detection and response workflows"
    ]
  }
];
