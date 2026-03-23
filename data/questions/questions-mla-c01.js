const CERT_META = {
  "id": "mla-c01",
  "code": "MLA-C01",
  "name": "Machine Learning Engineer",
  "fullName": "AWS Certified Machine Learning Engineer - Associate",
  "emoji": "🤖",
  "minutes": 130,
  "passingScore": 72,
  "examQuestions": 65,
  "color": "#06b6d4",
  "badge": "Associate",
  "description": "ML lifecycle from data prep to MLOps in AWS production environments.",
  "topics": [
    "Data Prep",
    "Training",
    "Evaluation",
    "MLOps"
  ]
};

const TOPIC_RULES = [
  [/data prep|feature|label|imbalance|missing|quality|preprocess/i, "Data Prep"],
  [/training|hyperparameter|tuning|algorithm|epoch|overfit|underfit/i, "Training"],
  [/evaluation|metric|precision|recall|f1|auc|drift/i, "Evaluation"],
  [/mlops|deployment|pipeline|monitoring|registry|rollback|endpoint/i, "MLOps"]
];

const QUESTIONS = [
  {
    "q": "A model underperforms and analysis shows many missing values in critical features. What should be done first?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team finds label inconsistencies across annotators. Which action has highest impact?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A fraud dataset has severe class imbalance. What is a strong baseline approach?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A data scientist suspects feature leakage from future information. What should be validated first?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A training pipeline consumes duplicate events from multiple sources. What preparation control is needed?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team needs reproducible feature generation across environments. Which practice is best?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A company must enforce PII masking before model training. Where should this be implemented?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A tabular dataset includes high-cardinality categorical columns. What preparation step is often useful?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team needs to detect data quality regressions early in pipelines. What should be added?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A project uses time-series data and random shuffling in prep. What risk does this create?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team wants to reduce storage and training cost for raw data lake features. What should be optimized?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A model drifts after source schema changes. What prep safeguard is most important?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A use case requires geospatial features and joining external datasets. What control is essential?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team needs faster experimentation with large datasets. Which prep strategy helps most?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A platform team wants standardized feature definitions across models. What should be introduced?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A model overfits quickly during training. Which action is most appropriate first?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A team needs to reduce training time for large datasets. What should they evaluate?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A model underfits and performance is low on train and validation sets. What is likely needed?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A team has fixed budget and must optimize model quality. Which tuning strategy is best?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "Training jobs fail from inconsistent dependencies. Which process should be standardized?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A team needs distributed training across many workers. What design concern is key?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "An NLP model needs domain adaptation with limited labeled data. What is a common approach?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A team frequently retrains models with little gain. What should be checked before retraining?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "Training cost spikes from oversized instance selection. What should be adjusted?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A model has unstable results between runs. Which practice improves reproducibility?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A team must train with encrypted sensitive datasets. What requirement should be enforced?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A team chooses a very complex model with minor quality gains and high latency. What should be reconsidered?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A team wants to avoid wasted GPU cycles from bad configurations. What should be done?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A company needs to compare algorithm families fairly. Which protocol is recommended?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A team wants better generalization on sparse features. Which training improvement is often useful?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Training"
  },
  {
    "q": "A classifier for rare events has high accuracy but misses positives. Which metric should be prioritized?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team needs business-aligned threshold selection for binary classification. What is best practice?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A model performs well in validation but fails in production slices. What should be added to evaluation?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team needs confidence intervals for model comparisons. Which approach helps?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A regulated use case requires fairness checks across groups. What should be included?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A model shows concept drift after seasonal changes. Which monitoring signal is useful?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team evaluates recommendation quality only offline. What is missing before rollout?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A model comparison used different test sets and gave conflicting outcomes. What is wrong?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team needs robust evaluation for time-series forecasts. What split strategy is correct?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A model is optimized for AUC but business cares about precision at top-k. What should change?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team wants to detect silent degradation after deployment. What should be tracked continuously?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A model has unstable performance across random seeds. What should be analyzed?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team needs interpretable error analysis for stakeholders. What output should be produced?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A fraud detector false positives are too high for operations teams. What should be tuned?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team compares models with negligible metric differences. What additional factor should guide decision?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "Evaluation"
  },
  {
    "q": "A team needs safe rollout of new model versions in production. Which deployment pattern is best?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A model endpoint requires low-latency autoscaling under variable traffic. What should be configured?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A company needs full lineage from data to model artifact for audits. What capability is required?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A team wants reproducible deployment artifacts across environments. Which practice is best?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A model occasionally returns low-confidence predictions. What runtime behavior should be defined?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A team needs automated retraining triggered by drift signals. What architecture pattern fits?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A platform requires role-based access to model endpoints by environment. Which control is key?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A team has many models and struggles with version governance. What should be centralized?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A production model update caused regressions. Which MLOps control should have prevented this?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A team needs cost visibility per model endpoint and traffic profile. What should be added?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A company wants canary release for model versions with rollback on metric breach. What is best?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A team manually copies model files to deploy. What process should replace this?",
    "options": [
      "Manual one-off scripts per environment",
      "Standardized automation with policy checks and rollback guards",
      "No versioning of operational changes",
      "Allow production console edits by default"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A model serving stack needs secret rotation without downtime. What should be built in?",
    "options": [
      "Apply broad manual changes immediately",
      "Use managed AWS controls and telemetry-driven remediation",
      "Disable monitoring to reduce noise",
      "Delay action until monthly review"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A company needs environment promotion with approval gates for ML pipelines. What approach works best?",
    "options": [
      "Single-instance deployment with manual recovery",
      "Automated, Multi-AZ-aware design with tested runbooks",
      "Store credentials in code",
      "Turn off alarms during incidents"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "A team wants one-click incident triage for model failures. What observability data should be linked?",
    "options": [
      "Use static thresholds only and no context",
      "Define SLOs and actionable alerts with ownership metadata",
      "Alert every event to all teams",
      "Disable low-severity signals entirely"
    ],
    "answer": 1,
    "topic": "MLOps"
  },
  {
    "q": "For the MLA-C01 Data Prep domain, a team needs to improve feature engineering, labeling quality, and dataset readiness. while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A production incident exposed weaknesses in feature engineering, labeling quality, and dataset readiness. for the Data Prep domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A regulated workload depends on strong feature engineering, labeling quality, and dataset readiness. controls in the Data Prep domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A platform team needs scalable feature engineering, labeling quality, and dataset readiness. practices for the Data Prep domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "Costs are rising in the Data Prep domain because feature engineering, labeling quality, and dataset readiness. is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team wants safer change management around feature engineering, labeling quality, and dataset readiness. in the Data Prep domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "The MLA-C01 blueprint for Data Prep needs better resilience around feature engineering, labeling quality, and dataset readiness.. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team cannot prove ownership or accountability for feature engineering, labeling quality, and dataset readiness. in the Data Prep domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A new workload must launch quickly with strong feature engineering, labeling quality, and dataset readiness. posture in the Data Prep domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A review shows that feature engineering, labeling quality, and dataset readiness. decisions in the Data Prep domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team needs better observability for feature engineering, labeling quality, and dataset readiness. in the Data Prep domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A postmortem shows that weak feature engineering, labeling quality, and dataset readiness. practices in the Data Prep domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "For the MLA-C01 Data Prep domain, a team needs to improve dataset profiling while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A production incident exposed weaknesses in dataset profiling for the Data Prep domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A regulated workload depends on strong dataset profiling controls in the Data Prep domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A platform team needs scalable dataset profiling practices for the Data Prep domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "Costs are rising in the Data Prep domain because dataset profiling is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team wants safer change management around dataset profiling in the Data Prep domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "The MLA-C01 blueprint for Data Prep needs better resilience around dataset profiling. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team cannot prove ownership or accountability for dataset profiling in the Data Prep domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A new workload must launch quickly with strong dataset profiling posture in the Data Prep domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A review shows that dataset profiling decisions in the Data Prep domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team needs better observability for dataset profiling in the Data Prep domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A postmortem shows that weak dataset profiling practices in the Data Prep domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "For the MLA-C01 Data Prep domain, a team needs to improve feature quality checks while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A production incident exposed weaknesses in feature quality checks for the Data Prep domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A regulated workload depends on strong feature quality checks controls in the Data Prep domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A platform team needs scalable feature quality checks practices for the Data Prep domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "Costs are rising in the Data Prep domain because feature quality checks is handled inefficiently. Which action is most effective first?",
    "options": [
      "Increase spend permanently to avoid future reviews",
      "Right-size the design using workload telemetry, lifecycle controls, and managed-service trade-offs",
      "Duplicate every environment for safety regardless of demand",
      "Turn off metrics so cost anomalies are less visible"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team wants safer change management around feature quality checks in the Data Prep domain. Which capability helps most?",
    "options": [
      "Direct production edits without peer review or rollback plans",
      "Versioned automation with approvals, tests, and controlled rollback paths",
      "Manual hotfixes from developer laptops only",
      "A shared root account for all deployment activities"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "The MLA-C01 blueprint for Data Prep needs better resilience around feature quality checks. Which architecture decision is strongest?",
    "options": [
      "Keep a single failure domain and document recovery in a wiki",
      "Design for redundancy, failure isolation, and tested recovery workflows",
      "Disable automated health checks to avoid false alarms",
      "Depend on manual intervention for every outage scenario"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team cannot prove ownership or accountability for feature quality checks in the Data Prep domain. What should be introduced?",
    "options": [
      "Unstructured chat approvals and ad hoc spreadsheets",
      "Clear ownership metadata, audit trails, and operational runbooks tied to services",
      "More shared admin credentials across teams",
      "A policy of resolving incidents without documentation"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A new workload must launch quickly with strong feature quality checks posture in the Data Prep domain. Which pattern fits best?",
    "options": [
      "Copy an old environment manually and hope standards are similar",
      "Use approved baseline patterns with reusable automation and environment parameters",
      "Skip governance for the first release to save time",
      "Use long-lived credentials embedded in source code"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A review shows that feature quality checks decisions in the Data Prep domain are inconsistent between teams. What should happen next?",
    "options": [
      "Let each team continue independently to maximize flexibility",
      "Define shared guardrails, reference architectures, and measurable operational standards",
      "Remove central observability to reduce friction",
      "Consolidate everything into one unmanaged environment"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A team needs better observability for feature quality checks in the Data Prep domain. Which improvement is most valuable?",
    "options": [
      "Only monitor infrastructure CPU metrics and ignore business signals",
      "Track actionable service metrics, logs, and traces with clear alert ownership",
      "Replace alerts with weekly manual reviews",
      "Disable dashboards to avoid confusion during incidents"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A postmortem shows that weak feature quality checks practices in the Data Prep domain slowed recovery. Which long-term fix is best?",
    "options": [
      "Increase team size without changing the operating model",
      "Codify repeatable runbooks, automate common actions, and test failure paths regularly",
      "Accept longer recovery times as normal growth pain",
      "Reduce incident visibility so fewer teams are involved"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "For the MLA-C01 Data Prep domain, a team needs to improve leakage prevention while minimizing operational overhead. Which approach is BEST?",
    "options": [
      "Build custom tooling from scratch for every environment and team",
      "Use managed AWS capabilities with automation, observability, and policy guardrails",
      "Delay instrumentation until after production rollout",
      "Standardize on manual console changes for faster iteration"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A production incident exposed weaknesses in leakage prevention for the Data Prep domain. What should the team do first?",
    "options": [
      "Make broad changes across all workloads without validating the root cause",
      "Use telemetry to isolate the problem, then apply targeted remediation with rollback safety",
      "Disable alerting until stakeholders stop escalating the issue",
      "Move all workloads to one shared account immediately"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A regulated workload depends on strong leakage prevention controls in the Data Prep domain. Which design is most appropriate?",
    "options": [
      "Rely on tribal knowledge and periodic manual checks",
      "Use least privilege, encryption, logging, and repeatable infrastructure changes",
      "Share administrator access among all operators for faster support",
      "Prioritize speed over auditability and defer governance until later"
    ],
    "answer": 1,
    "topic": "Data Prep"
  },
  {
    "q": "A platform team needs scalable leakage prevention practices for the Data Prep domain across several workloads. What is the best approach?",
    "options": [
      "Create one-off process documents per team with no shared baseline",
      "Adopt standardized templates, automated checks, and centralized visibility",
      "Allow each workload to define conflicting controls independently",
      "Disable shared monitoring to avoid noisy dashboards"
    ],
    "answer": 1,
    "topic": "Data Prep"
  }
];

const SERVICES = [
  {
    "name": "Data Prep",
    "emoji": "🧹",
    "desc": "Feature engineering, labeling quality, and dataset readiness.",
    "bullets": [
      "Dataset profiling",
      "Feature quality checks",
      "Leakage prevention",
      "Class imbalance strategy",
      "Data governance controls"
    ]
  },
  {
    "name": "Training",
    "emoji": "🏋️",
    "desc": "Model training strategy, tuning, and compute planning.",
    "bullets": [
      "Algorithm selection",
      "Hyperparameter tuning",
      "Regularization strategy",
      "Distributed training choices",
      "Cost-performance trade-offs"
    ]
  },
  {
    "name": "Evaluation",
    "emoji": "📏",
    "desc": "Model validation, thresholding, and performance monitoring.",
    "bullets": [
      "Metric selection by objective",
      "Validation protocol",
      "Bias/fairness checks",
      "Robustness testing",
      "Drift detection readiness"
    ]
  },
  {
    "name": "MLOps",
    "emoji": "🚀",
    "desc": "Deployment pipelines, monitoring, and lifecycle governance.",
    "bullets": [
      "Model registry and lineage",
      "CI/CD for ML",
      "Online monitoring",
      "Rollback-safe deployment",
      "Compliance and access controls"
    ]
  }
];
