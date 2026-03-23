const CERT_META = {
  "id": "saa-c03",
  "code": "SAA-C03",
  "name": "Solutions Architect Associate",
  "fullName": "AWS Certified Solutions Architect – Associate",
  "emoji": "🏗️",
  "minutes": 130,
  "passingScore": 72,
  "examQuestions": 65,
  "color": "#3b82f6",
  "badge": "Associate",
  "description": "Design resilient, high-performing, secure, and cost-optimized architectures on AWS.",
  "topics": [
    "VPC",
    "EC2",
    "S3",
    "RDS/Aurora",
    "Load Balancers",
    "Route 53",
    "Auto Scaling",
    "IAM",
    "RDS",
    "CloudFront",
    "ElastiCache",
    "EFS",
    "Connectivity",
    "Security",
    "DynamoDB",
    "SES",
    "Load Balancer",
    "SQS",
    "CloudWatch",
    "ECS",
    "Cost Optimization",
    "Lambda",
    "SNS"
  ]
};

const TOPIC_RULES = [
  [/\bvpc\b|virtual private cloud/i, "VPC"],
  [/\bec2\b|elastic compute|instance type/i, "EC2"],
  [/\bs3\b|amazon s3|object storage/i, "S3"],
  [/\brds\b|aurora|relational database/i, "RDS"],
  [/\bload balancer|alb\b|nlb\b|elb\b/i, "Load Balancer"],
  [/\broute\s*53|dns\b|routing policy/i, "Route 53"],
  [/\bauto.?scal/i, "Auto Scaling"],
  [/\biam\b|identity and access/i, "IAM"],
  [/\bcloudfront|cdn\b/i, "CloudFront"],
  [/\belasticache|redis\b|memcached/i, "ElastiCache"],
  [/\bdynamodb/i, "DynamoDB"],
  [/\blambda\b/i, "Lambda"],
  [/\bsqs\b|sqs queue/i, "SQS"],
  [/\bsns\b/i, "SNS"],
  [/\bdirect.?connect|vpn\b/i, "Connectivity"],
  [/\befs\b|elastic file/i, "EFS"],
  [/\bkms\b|encryption/i, "Security"],
  [/\bcloudwatch\b/i, "CloudWatch"],
  [/\bcost|pricing|reserved|spot instance/i, "Cost Optimization"],
  [/RDS\/Aurora/i, "RDS/Aurora"],
  [/Load Balancers/i, "Load Balancers"],
  [/SES/i, "SES"],
  [/ECS/i, "ECS"]
];

const QUESTIONS = [
  {
    "q": "A company needs to host a web application that requires high availability. The application must remain available even if an entire AWS Availability Zone becomes unavailable. Which combination of AWS services should a solutions architect recommend?",
    "options": [
      "Deploy the application on a single EC2 instance with an Elastic IP address.",
      "Deploy the application across multiple EC2 instances in multiple Availability Zones behind an Application Load Balancer.",
      "Deploy the application in a single Availability Zone with an Auto Scaling group.",
      "Deploy the application on EC2 instances in a single Availability Zone with Amazon CloudFront."
    ],
    "answer": 1,
    "topic": "EC2"
  },
  {
    "q": "A company stores sensitive data in Amazon S3. The company must ensure that data is encrypted at rest and that the encryption keys are managed by the company. Which S3 encryption option meets these requirements?",
    "options": [
      "SSE-S3 (Server-Side Encryption with Amazon S3-Managed Keys)",
      "SSE-KMS (Server-Side Encryption with AWS KMS-Managed Keys)",
      "SSE-C (Server-Side Encryption with Customer-Provided Keys)",
      "Client-side encryption using a client-managed master key"
    ],
    "answer": 2,
    "topic": "S3"
  },
  {
    "q": "A solutions architect is designing a network architecture for a three-tier web application. The architecture must ensure that the database tier cannot be directly accessed from the internet. Which approach BEST meets this requirement?",
    "options": [
      "Place the database tier in a public subnet and use security groups to restrict access.",
      "Place all tiers in a public subnet and use NACLs to restrict database access.",
      "Place the database tier in a private subnet with no internet gateway route.",
      "Place the database tier in a public subnet and disable the public IP assignment."
    ],
    "answer": 2,
    "topic": "VPC"
  },
  {
    "q": "A company runs an application that regularly queries an Amazon RDS for MySQL database. The application is experiencing slow query performance due to high read traffic. Which solution improves read performance with the LEAST operational overhead?",
    "options": [
      "Upgrade the RDS instance to a larger instance type.",
      "Create an Amazon RDS read replica to offload read traffic.",
      "Enable Multi-AZ deployment for the RDS instance.",
      "Migrate the data to Amazon DynamoDB."
    ],
    "answer": 1,
    "topic": "RDS"
  },
  {
    "q": "A solutions architect needs to ensure that a website continues to serve traffic if the primary AWS Region becomes unavailable. What should the architect configure?",
    "options": [
      "Amazon CloudFront with multiple origins in the same Region.",
      "Amazon Route 53 health checks with failover routing to a secondary Region.",
      "An Application Load Balancer across multiple Availability Zones.",
      "Amazon S3 cross-region replication with a static website endpoint."
    ],
    "answer": 1,
    "topic": "Route 53"
  },
  {
    "q": "An application running on Amazon EC2 instances needs to be scaled automatically based on demand. The instances are behind an Application Load Balancer. What should a solutions architect configure?",
    "options": [
      "EC2 Auto Scaling with a target tracking scaling policy based on the ALB RequestCountPerTarget metric.",
      "AWS Lambda functions triggered by CloudWatch alarms to start new EC2 instances.",
      "An AWS Batch job that launches additional EC2 instances when CPU exceeds 80%.",
      "Amazon ECS with Fargate to automatically scale based on requests."
    ],
    "answer": 0,
    "topic": "Auto Scaling"
  },
  {
    "q": "A company wants to reduce costs for its Amazon RDS for PostgreSQL database that is used only during business hours (8 AM to 6 PM Monday through Friday). Which approach provides the MOST cost savings?",
    "options": [
      "Purchase Reserved Instances for the RDS instance.",
      "Use Multi-AZ RDS to eliminate the need for read replicas.",
      "Use an RDS Proxy to reduce connection overhead.",
      "Use AWS Lambda to stop the RDS instance outside of business hours and start it before business hours."
    ],
    "answer": 3,
    "topic": "RDS"
  },
  {
    "q": "A company has a website with users distributed globally. The website serves static content stored in Amazon S3. The company wants to reduce latency for global users. Which solution achieves this at the LOWEST cost?",
    "options": [
      "Use AWS Global Accelerator to route traffic to the nearest AWS endpoint.",
      "Deploy EC2 instances in multiple Regions and use Route 53 latency-based routing.",
      "Configure Amazon CloudFront with the S3 bucket as the origin.",
      "Enable S3 Transfer Acceleration on the bucket."
    ],
    "answer": 2,
    "topic": "CloudFront"
  },
  {
    "q": "A solutions architect is designing a VPC architecture. The architect needs to allow EC2 instances in a private subnet to access the internet for software updates, while preventing inbound connections from the internet. Which solution should the architect implement?",
    "options": [
      "Attach an Internet Gateway to the private subnet.",
      "Deploy a NAT Gateway in a public subnet and update the private subnet route table.",
      "Use a VPC endpoint for all internet traffic.",
      "Assign Elastic IP addresses to all EC2 instances in the private subnet."
    ],
    "answer": 1,
    "topic": "VPC"
  },
  {
    "q": "A company stores user session data in an in-memory cache on a single EC2 instance. When the instance fails, users lose their sessions. The company wants a managed, highly available in-memory caching solution. What should a solutions architect recommend?",
    "options": [
      "Amazon ElastiCache for Redis with Multi-AZ replication.",
      "Amazon DynamoDB with DynamoDB Accelerator (DAX).",
      "Amazon RDS for MySQL with read replicas.",
      "Amazon S3 with client-side caching."
    ],
    "answer": 0,
    "topic": "ElastiCache"
  },
  {
    "q": "Which Amazon Route 53 routing policy should be used to route traffic based on the geographic location of the user making the DNS request?",
    "options": [
      "Latency-based routing",
      "Weighted routing",
      "Geolocation routing",
      "Failover routing"
    ],
    "answer": 2,
    "topic": "Route 53"
  },
  {
    "q": "A company needs to run a batch workload that is not time-sensitive and can be interrupted. The workload processes large amounts of data and requires the lowest possible compute cost. Which EC2 purchasing option should the solutions architect recommend?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances (Standard)",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    "answer": 2,
    "topic": "EC2"
  },
  {
    "q": "An application requires block storage with consistent, low-latency performance for a database workload on EC2. Which AWS service should a solutions architect use?",
    "options": [
      "Amazon S3",
      "Amazon EFS",
      "Amazon EBS",
      "Amazon S3 Glacier"
    ],
    "answer": 2,
    "topic": "EC2"
  },
  {
    "q": "A solutions architect is designing a solution where multiple EC2 instances across different Availability Zones need to access a shared file system simultaneously. Which storage solution should be used?",
    "options": [
      "Amazon EBS with Multi-Attach enabled",
      "Amazon S3 with S3 File Gateway",
      "Amazon EFS",
      "Amazon FSx for Windows File Server"
    ],
    "answer": 2,
    "topic": "EFS"
  },
  {
    "q": "A company wants to migrate its on-premises data center to AWS and needs a private, dedicated network connection between its data center and AWS with consistent network performance. Which AWS service should the company use?",
    "options": [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS Global Accelerator",
      "AWS PrivateLink"
    ],
    "answer": 1,
    "topic": "Connectivity"
  },
  {
    "q": "An Amazon RDS database is experiencing high availability requirements. If the primary database instance fails, the company needs failover to occur automatically with minimal data loss. Which RDS feature should be configured?",
    "options": [
      "Read Replicas",
      "Multi-AZ deployment",
      "RDS Proxy",
      "Enhanced Monitoring"
    ],
    "answer": 1,
    "topic": "RDS"
  },
  {
    "q": "A solutions architect must design a solution that replicates Amazon S3 objects from a bucket in us-east-1 to a bucket in eu-west-1 for disaster recovery. Which S3 feature should be used?",
    "options": [
      "S3 Lifecycle policies",
      "S3 Cross-Region Replication (CRR)",
      "S3 Transfer Acceleration",
      "S3 Versioning only"
    ],
    "answer": 1,
    "topic": "S3"
  },
  {
    "q": "A company wants to allow users to upload files directly to Amazon S3 from a web browser without routing traffic through a web server. The upload URL must be temporary and expire after 15 minutes. Which feature of Amazon S3 should be used?",
    "options": [
      "S3 bucket policies",
      "S3 ACLs",
      "S3 Presigned URLs",
      "Amazon Cognito with S3 integration"
    ],
    "answer": 2,
    "topic": "S3"
  },
  {
    "q": "An application hosted on AWS needs to communicate with an Amazon S3 bucket without traffic leaving the AWS network and without requiring a NAT Gateway. Which feature should be configured?",
    "options": [
      "AWS Direct Connect",
      "VPC Gateway Endpoint for S3",
      "VPC Interface Endpoint",
      "AWS PrivateLink for S3"
    ],
    "answer": 1,
    "topic": "VPC"
  },
  {
    "q": "A company wants to improve the resilience of its application. The application must automatically recover from failures within minutes with a Recovery Time Objective (RTO) of 5 minutes. Which disaster recovery strategy meets this requirement at lowest cost?",
    "options": [
      "Multi-site active-active across two Regions",
      "Warm standby with resources running at reduced capacity in a secondary Region",
      "Pilot light with core services running in a secondary Region",
      "Backup and restore using automated snapshots"
    ],
    "answer": 1,
    "topic": "Route 53"
  },
  {
    "q": "Which Amazon S3 storage class is MOST cost-effective for data that is accessed once a month and must be retrieved within a few hours?",
    "options": [
      "S3 Standard",
      "S3 Standard-Infrequent Access (S3 Standard-IA)",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Instant Retrieval"
    ],
    "answer": 2,
    "topic": "S3"
  },
  {
    "q": "A solutions architect designs a HIGHLY AVAILABLE application. Which combination of resources should the architect recommend?",
    "options": [
      "Single EC2 instance with EBS storage in one Availability Zone",
      "Multiple EC2 instances behind an ALB in multiple Availability Zones",
      "Multiple EC2 instances in a single Availability Zone behind an NLB",
      "EC2 instances in a placement group for low latency"
    ],
    "answer": 1,
    "topic": "EC2"
  },
  {
    "q": "An Auto Scaling group needs to add instances when the average CPU utilization exceeds 70%. Which scaling policy type should be configured?",
    "options": [
      "Scheduled scaling",
      "Simple scaling",
      "Step scaling",
      "Target tracking scaling with CPU utilization target of 70%"
    ],
    "answer": 3,
    "topic": "Auto Scaling"
  },
  {
    "q": "A company is running a stateless web application on EC2 instances behind an ALB. The application needs to handle variable traffic. Which approach provides the MOST cost-effective and elastic solution?",
    "options": [
      "Use Reserved Instances with Auto Scaling.",
      "Use On-Demand Instances with Auto Scaling and target tracking policies.",
      "Use Dedicated Hosts with a fixed number of instances.",
      "Use Spot Instances only for all traffic."
    ],
    "answer": 1,
    "topic": "Auto Scaling"
  },
  {
    "q": "A solutions architect needs to ensure that Amazon RDS database credentials are stored securely, rotated automatically, and accessible to the application without hardcoding. Which AWS service should be used?",
    "options": [
      "AWS Systems Manager Parameter Store with Standard tier",
      "AWS Secrets Manager with automatic rotation enabled",
      "IAM roles with database credentials embedded",
      "AWS KMS with direct encryption of credentials in application code"
    ],
    "answer": 1,
    "topic": "Security"
  },
  {
    "q": "A company wants to reduce data transfer costs between its EC2 instances and an Amazon S3 bucket in the same region. What should be configured?",
    "options": [
      "Enable S3 Transfer Acceleration",
      "Use an S3 VPC Gateway Endpoint",
      "Deploy a NAT Gateway for S3 traffic",
      "Use AWS DataSync"
    ],
    "answer": 1,
    "topic": "VPC"
  },
  {
    "q": "An application uses Amazon DynamoDB. During peak hours, some read operations are failing due to throughput limits. The reads are for frequently accessed items. What should a solutions architect recommend to resolve this with minimal code changes?",
    "options": [
      "Increase the DynamoDB provisioned read capacity.",
      "Enable DynamoDB Auto Scaling.",
      "Add Amazon ElastiCache as a caching layer in front of DynamoDB.",
      "Add a DynamoDB Accelerator (DAX) cluster."
    ],
    "answer": 3,
    "topic": "DynamoDB"
  },
  {
    "q": "A company needs to send hundreds of thousands of emails to customers monthly. Which AWS service should be used?",
    "options": [
      "Amazon SNS",
      "Amazon SES (Simple Email Service)",
      "Amazon SQS",
      "AWS Lambda with SMTP integration"
    ],
    "answer": 1,
    "topic": "SES"
  },
  {
    "q": "A solutions architect must choose between an Application Load Balancer (ALB) and a Network Load Balancer (NLB). Which scenario requires an NLB?",
    "options": [
      "Routing HTTP/HTTPS traffic based on URL path",
      "Routing WebSocket connections for a chat application",
      "Handling millions of TCP connections with ultra-low latency for a gaming application",
      "Authenticating users via Cognito before routing requests"
    ],
    "answer": 2,
    "topic": "Load Balancer"
  },
  {
    "q": "A company hosts a monolithic application on a single large EC2 instance. The application has one component that requires large CPU bursts and another that requires high memory. A solutions architect must decouple the components to optimize costs and performance. The two components should be able to communicate asynchronously. Which service enables decoupled, asynchronous communication?",
    "options": [
      "Amazon SQS",
      "Amazon API Gateway",
      "AWS AppSync",
      "Amazon SNS with direct invocation"
    ],
    "answer": 0,
    "topic": "SQS"
  },
  {
    "q": "A company wants to be alerted when the number of unhealthy hosts behind an Application Load Balancer exceeds 2 for more than 5 minutes. What is the correct approach?",
    "options": [
      "Create an AWS Config rule that monitors the ALB target group and sends an SNS notification",
      "Create a CloudWatch alarm on the UnHealthyHostCount metric for the target group and set the threshold to 2, with an SNS notification action",
      "Enable ALB access logs and use Athena to query for unhealthy hosts",
      "Create an EventBridge rule that triggers a Lambda function to poll the ALB every 5 minutes"
    ],
    "answer": 1,
    "topic": "CloudWatch"
  },
  {
    "q": "A company has 10 VPCs in the same AWS Region and needs all of them to communicate with each other and share a single AWS Direct Connect connection to the on-premises data center. Which architecture achieves this with the LEAST operational overhead?",
    "options": [
      "Create VPC peering connections between all VPCs and configure each VPC with its own Direct Connect virtual interface",
      "Use AWS Transit Gateway to connect all 10 VPCs and attach the Direct Connect gateway to the Transit Gateway",
      "Deploy a transit VPC using EC2-based routers and route all traffic through it",
      "Create a hub-and-spoke VPC peering topology where one central VPC handles all Direct Connect traffic"
    ],
    "answer": 1,
    "topic": "Connectivity"
  },
  {
    "q": "A development team wants to run containerized microservices without managing the underlying EC2 infrastructure. The workload has variable traffic and the team wants per-second billing for compute. Which solution meets these requirements?",
    "options": [
      "Amazon ECS with EC2 launch type and Auto Scaling groups",
      "Amazon ECS with Fargate launch type",
      "Amazon EC2 with Docker installed manually",
      "Amazon EKS with self-managed node groups"
    ],
    "answer": 1,
    "topic": "ECS"
  },
  {
    "q": "A company plans to commit to a 3-year term to save costs on compute and needs the flexibility to change instance families, operating systems, and AWS Regions. Which purchasing model provides the MOST flexibility?",
    "options": [
      "Standard Reserved Instances",
      "Convertible Reserved Instances",
      "Compute Savings Plans",
      "EC2 Instance Savings Plans"
    ],
    "answer": 2,
    "topic": "Cost Optimization"
  },
  {
    "q": "A company needs to migrate 50 TB of on-premises data to Amazon S3. The on-premises network has a 1 Gbps Direct Connect link. The migration must complete within one week. Which solution meets the time requirement?",
    "options": [
      "Upload data directly over the Direct Connect link using the AWS CLI",
      "Use AWS DataSync over the Direct Connect link to transfer the data",
      "Use multiple AWS Snowball Edge Storage Optimized devices to ship the data",
      "Use S3 Transfer Acceleration with multipart upload over the internet"
    ],
    "answer": 2,
    "topic": "S3"
  },
  {
    "q": "For the SAA-C03 EC2 & Auto Scaling domain, a team needs to improve amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A production incident exposed weaknesses in amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. for the EC2 & Auto Scaling domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A regulated workload depends on strong amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. controls in the EC2 & Auto Scaling domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A platform team needs scalable amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. practices for the EC2 & Auto Scaling domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "Costs are rising in the EC2 & Auto Scaling domain because amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team wants safer change management around amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. in the EC2 & Auto Scaling domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "The SAA-C03 blueprint for EC2 & Auto Scaling needs better resilience around amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team cannot prove ownership or accountability for amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. in the EC2 & Auto Scaling domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A new workload must launch quickly with strong amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. posture in the EC2 & Auto Scaling domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A review shows that amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. decisions in the EC2 & Auto Scaling domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team needs better observability for amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. in the EC2 & Auto Scaling domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A postmortem shows that weak amazon ec2 provides resizable compute capacity. auto scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization. practices in the EC2 & Auto Scaling domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "For the SAA-C03 EC2 & Auto Scaling domain, a team needs to improve instance families: general purpose, compute optimized, memory optimized, storage optimized while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A production incident exposed weaknesses in instance families: general purpose, compute optimized, memory optimized, storage optimized for the EC2 & Auto Scaling domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A regulated workload depends on strong instance families: general purpose, compute optimized, memory optimized, storage optimized controls in the EC2 & Auto Scaling domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A platform team needs scalable instance families: general purpose, compute optimized, memory optimized, storage optimized practices for the EC2 & Auto Scaling domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "Costs are rising in the EC2 & Auto Scaling domain because instance families: general purpose, compute optimized, memory optimized, storage optimized is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team wants safer change management around instance families: general purpose, compute optimized, memory optimized, storage optimized in the EC2 & Auto Scaling domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "The SAA-C03 blueprint for EC2 & Auto Scaling needs better resilience around instance families: general purpose, compute optimized, memory optimized, storage optimized. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team cannot prove ownership or accountability for instance families: general purpose, compute optimized, memory optimized, storage optimized in the EC2 & Auto Scaling domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A new workload must launch quickly with strong instance families: general purpose, compute optimized, memory optimized, storage optimized posture in the EC2 & Auto Scaling domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A review shows that instance families: general purpose, compute optimized, memory optimized, storage optimized decisions in the EC2 & Auto Scaling domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team needs better observability for instance families: general purpose, compute optimized, memory optimized, storage optimized in the EC2 & Auto Scaling domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A postmortem shows that weak instance families: general purpose, compute optimized, memory optimized, storage optimized practices in the EC2 & Auto Scaling domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "For the SAA-C03 EC2 & Auto Scaling domain, a team needs to improve purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A production incident exposed weaknesses in purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated for the EC2 & Auto Scaling domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A regulated workload depends on strong purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated controls in the EC2 & Auto Scaling domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A platform team needs scalable purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated practices for the EC2 & Auto Scaling domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "Costs are rising in the EC2 & Auto Scaling domain because purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team wants safer change management around purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated in the EC2 & Auto Scaling domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "The SAA-C03 blueprint for EC2 & Auto Scaling needs better resilience around purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team cannot prove ownership or accountability for purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated in the EC2 & Auto Scaling domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A new workload must launch quickly with strong purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated posture in the EC2 & Auto Scaling domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A review shows that purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated decisions in the EC2 & Auto Scaling domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team needs better observability for purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated in the EC2 & Auto Scaling domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A postmortem shows that weak purchasing options: on-demand, reserved (1 or 3 year), spot, savings plans, dedicated practices in the EC2 & Auto Scaling domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "For the SAA-C03 EC2 & Auto Scaling domain, a team needs to improve ami: snapshot-based image used to launch instances while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A production incident exposed weaknesses in ami: snapshot-based image used to launch instances for the EC2 & Auto Scaling domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A regulated workload depends on strong ami: snapshot-based image used to launch instances controls in the EC2 & Auto Scaling domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A platform team needs scalable ami: snapshot-based image used to launch instances practices for the EC2 & Auto Scaling domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "Costs are rising in the EC2 & Auto Scaling domain because ami: snapshot-based image used to launch instances is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team wants safer change management around ami: snapshot-based image used to launch instances in the EC2 & Auto Scaling domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "The SAA-C03 blueprint for EC2 & Auto Scaling needs better resilience around ami: snapshot-based image used to launch instances. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team cannot prove ownership or accountability for ami: snapshot-based image used to launch instances in the EC2 & Auto Scaling domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A new workload must launch quickly with strong ami: snapshot-based image used to launch instances posture in the EC2 & Auto Scaling domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A review shows that ami: snapshot-based image used to launch instances decisions in the EC2 & Auto Scaling domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team needs better observability for ami: snapshot-based image used to launch instances in the EC2 & Auto Scaling domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A postmortem shows that weak ami: snapshot-based image used to launch instances practices in the EC2 & Auto Scaling domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "For the SAA-C03 EC2 & Auto Scaling domain, a team needs to improve placement groups: cluster, spread, partition while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A production incident exposed weaknesses in placement groups: cluster, spread, partition for the EC2 & Auto Scaling domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A regulated workload depends on strong placement groups: cluster, spread, partition controls in the EC2 & Auto Scaling domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A platform team needs scalable placement groups: cluster, spread, partition practices for the EC2 & Auto Scaling domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "Costs are rising in the EC2 & Auto Scaling domain because placement groups: cluster, spread, partition is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team wants safer change management around placement groups: cluster, spread, partition in the EC2 & Auto Scaling domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "The SAA-C03 blueprint for EC2 & Auto Scaling needs better resilience around placement groups: cluster, spread, partition. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team cannot prove ownership or accountability for placement groups: cluster, spread, partition in the EC2 & Auto Scaling domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A new workload must launch quickly with strong placement groups: cluster, spread, partition posture in the EC2 & Auto Scaling domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A review shows that placement groups: cluster, spread, partition decisions in the EC2 & Auto Scaling domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A team needs better observability for placement groups: cluster, spread, partition in the EC2 & Auto Scaling domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A postmortem shows that weak placement groups: cluster, spread, partition practices in the EC2 & Auto Scaling domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "For the SAA-C03 EC2 & Auto Scaling domain, a team needs to improve auto scaling: launch template + scaling policies (target tracking, step, scheduled) while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A production incident exposed weaknesses in auto scaling: launch template + scaling policies (target tracking, step, scheduled) for the EC2 & Auto Scaling domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A regulated workload depends on strong auto scaling: launch template + scaling policies (target tracking, step, scheduled) controls in the EC2 & Auto Scaling domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "A platform team needs scalable auto scaling: launch template + scaling policies (target tracking, step, scheduled) practices for the EC2 & Auto Scaling domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  },
  {
    "q": "Costs are rising in the EC2 & Auto Scaling domain because auto scaling: launch template + scaling policies (target tracking, step, scheduled) is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "EC2 & Auto Scaling"
  }
];

const SERVICES = [
  {
    "name": "EC2 & Auto Scaling",
    "emoji": "💻",
    "desc": "Amazon EC2 provides resizable compute capacity. Auto Scaling automatically adjusts the number of instances based on demand, ensuring availability and cost optimization.",
    "bullets": [
      "Instance families: General Purpose, Compute Optimized, Memory Optimized, Storage Optimized",
      "Purchasing options: On-Demand, Reserved (1 or 3 year), Spot, Savings Plans, Dedicated",
      "AMI: snapshot-based image used to launch instances",
      "Placement groups: Cluster, Spread, Partition",
      "Auto Scaling: launch template + scaling policies (target tracking, step, scheduled)"
    ]
  },
  {
    "name": "VPC & Networking",
    "emoji": "🌐",
    "desc": "Amazon VPC lets you provision logically isolated sections of AWS Cloud. You control IP ranges, subnets, route tables, and network gateways.",
    "bullets": [
      "Public subnet: route to Internet Gateway; private subnet: no direct internet route",
      "NAT Gateway: outbound-only internet for private subnets (deployed in public subnet)",
      "Security Groups: stateful, instance-level; NACLs: stateless, subnet-level",
      "VPC Peering: direct private connection between two VPCs (non-transitive)",
      "VPC Endpoints: access S3/DynamoDB without internet (Gateway) or other services (Interface)"
    ]
  },
  {
    "name": "S3",
    "emoji": "🪣",
    "desc": "Amazon S3 is object storage offering 11 nines of durability. Choose from multiple storage classes based on access patterns and retrieval needs.",
    "bullets": [
      "Storage classes: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, Glacier Deep Archive",
      "Cross-Region Replication (CRR) requires versioning; replicates objects asynchronously",
      "Presigned URLs: time-limited access to private objects",
      "S3 Event Notifications → SQS, SNS, or Lambda",
      "Lifecycle policies: transition to cheaper tiers or expire objects automatically"
    ]
  },
  {
    "name": "RDS & Aurora",
    "emoji": "🐘",
    "desc": "Amazon RDS is a managed relational database supporting multiple engines. Aurora is a cloud-native database up to 5x faster than MySQL.",
    "bullets": [
      "Multi-AZ: synchronous standby replica with automatic failover (HA, not performance)",
      "Read Replicas: asynchronous, for horizontal read scaling (up to 5 for RDS, 15 for Aurora)",
      "Aurora Serverless: automatically scales capacity, ideal for variable workloads",
      "Automated backups: enabled by default, point-in-time recovery up to 35 days",
      "RDS Proxy: reduces connection overhead, good for Lambda workloads"
    ]
  },
  {
    "name": "Load Balancers",
    "emoji": "⚖️",
    "desc": "Elastic Load Balancing automatically distributes incoming traffic across multiple targets. Choose ALB for HTTP/HTTPS, NLB for TCP/UDP at scale.",
    "bullets": [
      "ALB (Layer 7): path-based and host-based routing, WebSocket, Cognito auth",
      "NLB (Layer 4): ultra-high performance, static IP, handles millions of TCP/UDP req/s",
      "CLB: legacy, avoid for new workloads",
      "Target groups: EC2 instances, containers, Lambda, IP addresses",
      "ALB Access Logs, NLB supports TLS termination"
    ]
  },
  {
    "name": "Route 53",
    "emoji": "🌍",
    "desc": "Amazon Route 53 is a highly available DNS service with health checking and traffic routing. It integrates with AWS resources and supports diverse routing policies.",
    "bullets": [
      "Routing policies: Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multivalue",
      "Health checks: monitor endpoints, CloudWatch alarms, or other health checks",
      "Alias records: point to AWS resources (free, no TTL charge)",
      "Private hosted zones: DNS resolution within a VPC",
      "Failover: primary/secondary with health check — active-passive HA"
    ]
  },
  {
    "name": "CloudFront",
    "emoji": "⚡",
    "desc": "Amazon CloudFront is a CDN with 400+ edge locations globally. It reduces latency by caching content closer to users and integrates with Shield for DDoS protection.",
    "bullets": [
      "Origins: S3, ALB, EC2, custom HTTP servers",
      "Cache behaviors: define TTL, query string forwarding, compression",
      "Signed URLs and Cookies: restrict access to private content",
      "Lambda@Edge: run code closer to users for request/response manipulation",
      "Invalidation: remove objects from edge caches before TTL expires"
    ]
  },
  {
    "name": "IAM",
    "emoji": "🔐",
    "desc": "AWS IAM controls who can do what in your AWS account. Use least-privilege principles, roles over long-term credentials, and regularly audit permissions.",
    "bullets": [
      "Policies: identity-based, resource-based, permission boundaries, SCPs",
      "Explicit deny overrides any allow; all requests denied by default",
      "IAM Roles: used by EC2, Lambda, cross-account access — no long-term credentials",
      "IAM Access Analyzer: identifies external access to resources",
      "STS AssumeRole: temporary credentials for cross-account or federated access"
    ]
  },
  {
    "name": "ElastiCache",
    "emoji": "🧠",
    "desc": "Amazon ElastiCache provides managed Redis and Memcached. Use it to reduce database load by caching frequently accessed data in memory.",
    "bullets": [
      "Redis: persistence, replication, pub/sub, Sorted Sets, Lua scripting",
      "Memcached: simpler, multi-threaded, no persistence, good for pure caching",
      "Lazy loading: populate cache only on miss (risk: stale data)",
      "Write-through: write to cache on every DB write (no stale data, adds latency)",
      "Redis Multi-AZ: automatic failover with read replicas"
    ]
  },
  {
    "name": "Well-Architected",
    "emoji": "🏛️",
    "desc": "The AWS Well-Architected Framework provides best practices across five pillars to help architects design reliable, secure, efficient, and cost-effective systems.",
    "bullets": [
      "Operational Excellence: automation, small changes, learn from failures",
      "Security: defense in depth, least privilege, encryption everywhere",
      "Reliability: multi-AZ, auto recovery, backups, chaos engineering",
      "Performance Efficiency: use managed services, pick right resource types",
      "Cost Optimization: use right-sizing, Spot, Reserved, delete unused resources"
    ]
  },
  {
    "name": "VPC",
    "emoji": "🧩",
    "desc": "VPC study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "EC2",
    "emoji": "🧩",
    "desc": "EC2 study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "RDS",
    "emoji": "🧩",
    "desc": "RDS study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "Load Balancer",
    "emoji": "🧩",
    "desc": "Load Balancer study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "Auto Scaling",
    "emoji": "🧩",
    "desc": "Auto Scaling study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "DynamoDB",
    "emoji": "🧩",
    "desc": "DynamoDB study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "Lambda",
    "emoji": "🧩",
    "desc": "Lambda study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "SQS",
    "emoji": "🧩",
    "desc": "SQS study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "SNS",
    "emoji": "🧩",
    "desc": "SNS study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "Connectivity",
    "emoji": "🧩",
    "desc": "Connectivity study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "EFS",
    "emoji": "🧩",
    "desc": "EFS study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "Security",
    "emoji": "🧩",
    "desc": "Security study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "CloudWatch",
    "emoji": "🧩",
    "desc": "CloudWatch study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  },
  {
    "name": "Cost Optimization",
    "emoji": "🧩",
    "desc": "Cost Optimization study guide coverage for SAA-C03.",
    "bullets": [
      "Architecture and design trade-offs",
      "Reliability, security, and governance considerations",
      "Operational patterns and troubleshooting focus",
      "Scalability, cost, and change-management guidance",
      "Exam-style scenario practice aligned to the topic"
    ]
  }
];
