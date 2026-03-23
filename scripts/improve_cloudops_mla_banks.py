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


def make_questions(topic, prompts):
    questions = []
    opt_set = [
        [
            "Apply broad manual changes immediately",
            "Use managed AWS controls and telemetry-driven remediation",
            "Disable monitoring to reduce noise",
            "Delay action until monthly review",
        ],
        [
            "Single-instance deployment with manual recovery",
            "Automated, Multi-AZ-aware design with tested runbooks",
            "Store credentials in code",
            "Turn off alarms during incidents",
        ],
        [
            "Use static thresholds only and no context",
            "Define SLOs and actionable alerts with ownership metadata",
            "Alert every event to all teams",
            "Disable low-severity signals entirely",
        ],
        [
            "Manual one-off scripts per environment",
            "Standardized automation with policy checks and rollback guards",
            "No versioning of operational changes",
            "Allow production console edits by default",
        ],
    ]
    for i, prompt in enumerate(prompts):
        options = opt_set[i % len(opt_set)]
        answer = 1
        questions.append(q(prompt, options, answer, topic))
    return questions


cloudops_meta = {
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
    "topics": ["Monitoring", "Automation", "Resilience", "Operations"],
}

cloudops_rules = [
    ("monitor|alarm|log|metric|cloudwatch|incident|observability", "Monitoring"),
    ("automation|runbook|eventbridge|lambda|systems manager|orchestration", "Automation"),
    ("resilien|backup|dr|failover|multi-az|recovery", "Resilience"),
    ("operations|governance|change|patch|capacity|cost", "Operations"),
]

cloudops_services = [
    {"name": "Monitoring", "emoji": "📈", "desc": "Operational telemetry, alarms, and incident signal quality.", "bullets": ["SLO and alert design", "Log/metric/tracing usage", "On-call readiness", "Signal-to-noise optimization", "Incident triage flow"]},
    {"name": "Automation", "emoji": "🤖", "desc": "Runbook automation and event-driven remediation at scale.", "bullets": ["Operational orchestration", "Safe automated remediations", "Policy checks in automation", "Cross-account operations", "Rollback-capable workflows"]},
    {"name": "Resilience", "emoji": "🧯", "desc": "High availability, backup strategy, and recovery confidence.", "bullets": ["Multi-AZ patterns", "DR planning and tests", "Failure isolation", "Recovery objectives", "Resilience game days"]},
    {"name": "Operations", "emoji": "⚙️", "desc": "Day-2 operations, change control, and platform governance.", "bullets": ["Patch and config hygiene", "Capacity planning", "Cost-aware ops", "Change management", "Operational security"]},
]

cloudops_prompts = {
    "Monitoring": [
        "A team has frequent false-positive alerts during traffic spikes. What should be improved first?",
        "An ops team cannot identify whether latency is caused by app code or database calls. What is the best first step?",
        "A service owner wants to reduce MTTR for recurring incidents. Which monitoring change has highest impact?",
        "A company needs centralized visibility across many AWS accounts. Which monitoring approach is best?",
        "A business-critical API needs customer-impact monitoring, not just infrastructure metrics. What should be tracked?",
        "A team sees high alert fatigue from duplicate notifications. Which control should be added?",
        "A platform wants to detect missing scheduled jobs quickly. Which signal pattern is recommended?",
        "A team needs immutable history of alert threshold changes for audit. What should they use?",
        "A workload has intermittent timeouts and little context in logs. What should be enabled first?",
        "An incident commander asks for better triage context in notifications. What should alarm payloads include?",
        "A team wants to monitor freshness of ingestion pipelines. What is best to alert on?",
        "A shared service has noisy low-priority warnings. Which tuning action is most effective?",
        "A dashboard looks healthy while users report failures. What is missing?",
        "A team needs near real-time anomaly detection on KPI drift. What pattern is best?",
        "A product owner needs confidence in release health after deployment. Which monitoring action helps most?",
    ],
    "Automation": [
        "A company wants automatic quarantine for noncompliant resources. Which architecture is best?",
        "An ops team uses manual remediation for recurring IAM misconfigurations. What should be automated first?",
        "A platform team needs repeatable incident workflows across environments. Which method is best?",
        "A team wants safe auto-remediation without causing new outages. What should be added?",
        "A company has fragmented scripts for patching and configuration drift. What should replace them?",
        "A response plan requires approval for high-risk remediations only. Which workflow pattern is best?",
        "A team needs to roll out automation to multiple accounts with governance controls. Which design works best?",
        "An incident process requires human fallback when automation fails. What should be built in?",
        "A company wants event-driven remediation from security findings. Which integration is most direct?",
        "A team needs to prove automation changes are reviewed and versioned. What is required?",
        "A runbook includes many sequential and parallel tasks. Which service pattern helps most?",
        "A team wants to prevent unauthorized scripts from changing production. Which guardrail is best?",
        "An ops workflow fails silently when upstream APIs throttle. What automation control should be added?",
        "A company wants zero-touch remediation for known low-risk issues. What should be implemented?",
        "A team needs standard automation templates for all business units. What is best approach?",
    ],
    "Resilience": [
        "A service must survive AZ failure with minimal user impact. Which design principle is most important?",
        "A team has backups but has never tested restore. What should be done first?",
        "A platform needs lower blast radius from bad deploys. Which rollout pattern is best?",
        "A company needs confidence in DR objectives. Which recurring activity is essential?",
        "A queue-based workload suffers retry storms during outages. Which resilience control helps most?",
        "An architecture has a central dependency that can fail all workloads. What should be changed?",
        "A team needs safer rollback for infrastructure changes. Which capability is most important?",
        "A workload requires rapid failover between regions for critical transactions. What should be prioritized?",
        "A service has unpredictable burst load and periodic throttling. Which resilience measure is best?",
        "A team needs exactly-once-like outcomes in event processing. What should be added?",
        "A platform needs planned maintenance without downtime. Which architecture choice supports this best?",
        "A company wants to verify failover paths under load. What practice is recommended?",
        "An incident postmortem shows dependencies timing out cascaded failures. What pattern should be used?",
        "A storage layer needs recovery from accidental deletion. Which strategy is most reliable?",
        "A team requires resilient secret retrieval during network disruptions. What should be designed?",
    ],
    "Operations": [
        "A company needs standardized change management across cloud environments. Which process should be introduced?",
        "A team has rising cloud cost from idle resources. What operations practice should be adopted?",
        "An ops team needs patch compliance evidence for audits. What should be automated?",
        "A platform needs clear ownership for services and incidents. Which control should be enforced?",
        "A company wants better capacity forecasting for seasonal peaks. Which operational input is most valuable?",
        "A team frequently performs emergency changes without review. What should be strengthened first?",
        "A business wants faster onboarding of new workloads with baseline controls. What is best?",
        "A team needs stronger operational security for admin access. Which approach is recommended?",
        "A company requires consistent tagging for cost and ownership visibility. What should be used?",
        "A platform team wants fewer configuration drifts across environments. Which operational model is best?",
        "A service has recurring incidents from undocumented runbooks. What should be improved?",
        "A team needs inventory and compliance visibility for all instances. Which operations capability is key?",
        "A company wants sustainable on-call operations. Which improvement has highest impact?",
        "A team needs safe decommissioning of obsolete resources after migrations. What is best first step?",
        "A platform needs operational KPIs tied to engineering work. What should be embedded in planning?",
    ],
}

cloudops_questions = []
for topic, prompts in cloudops_prompts.items():
    cloudops_questions.extend(make_questions(topic, prompts))

mla_meta = {
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
    "topics": ["Data Prep", "Training", "Evaluation", "MLOps"],
}

mla_rules = [
    ("data prep|feature|label|imbalance|missing|quality|preprocess", "Data Prep"),
    ("training|hyperparameter|tuning|algorithm|epoch|overfit|underfit", "Training"),
    ("evaluation|metric|precision|recall|f1|auc|drift", "Evaluation"),
    ("mlops|deployment|pipeline|monitoring|registry|rollback|endpoint", "MLOps"),
]

mla_services = [
    {"name": "Data Prep", "emoji": "🧹", "desc": "Feature engineering, labeling quality, and dataset readiness.", "bullets": ["Dataset profiling", "Feature quality checks", "Leakage prevention", "Class imbalance strategy", "Data governance controls"]},
    {"name": "Training", "emoji": "🏋️", "desc": "Model training strategy, tuning, and compute planning.", "bullets": ["Algorithm selection", "Hyperparameter tuning", "Regularization strategy", "Distributed training choices", "Cost-performance trade-offs"]},
    {"name": "Evaluation", "emoji": "📏", "desc": "Model validation, thresholding, and performance monitoring.", "bullets": ["Metric selection by objective", "Validation protocol", "Bias/fairness checks", "Robustness testing", "Drift detection readiness"]},
    {"name": "MLOps", "emoji": "🚀", "desc": "Deployment pipelines, monitoring, and lifecycle governance.", "bullets": ["Model registry and lineage", "CI/CD for ML", "Online monitoring", "Rollback-safe deployment", "Compliance and access controls"]},
]

mla_prompts = {
    "Data Prep": [
        "A model underperforms and analysis shows many missing values in critical features. What should be done first?",
        "A team finds label inconsistencies across annotators. Which action has highest impact?",
        "A fraud dataset has severe class imbalance. What is a strong baseline approach?",
        "A data scientist suspects feature leakage from future information. What should be validated first?",
        "A training pipeline consumes duplicate events from multiple sources. What preparation control is needed?",
        "A team needs reproducible feature generation across environments. Which practice is best?",
        "A company must enforce PII masking before model training. Where should this be implemented?",
        "A tabular dataset includes high-cardinality categorical columns. What preparation step is often useful?",
        "A team needs to detect data quality regressions early in pipelines. What should be added?",
        "A project uses time-series data and random shuffling in prep. What risk does this create?",
        "A team wants to reduce storage and training cost for raw data lake features. What should be optimized?",
        "A model drifts after source schema changes. What prep safeguard is most important?",
        "A use case requires geospatial features and joining external datasets. What control is essential?",
        "A team needs faster experimentation with large datasets. Which prep strategy helps most?",
        "A platform team wants standardized feature definitions across models. What should be introduced?",
    ],
    "Training": [
        "A model overfits quickly during training. Which action is most appropriate first?",
        "A team needs to reduce training time for large datasets. What should they evaluate?",
        "A model underfits and performance is low on train and validation sets. What is likely needed?",
        "A team has fixed budget and must optimize model quality. Which tuning strategy is best?",
        "Training jobs fail from inconsistent dependencies. Which process should be standardized?",
        "A team needs distributed training across many workers. What design concern is key?",
        "An NLP model needs domain adaptation with limited labeled data. What is a common approach?",
        "A team frequently retrains models with little gain. What should be checked before retraining?",
        "Training cost spikes from oversized instance selection. What should be adjusted?",
        "A model has unstable results between runs. Which practice improves reproducibility?",
        "A team must train with encrypted sensitive datasets. What requirement should be enforced?",
        "A team chooses a very complex model with minor quality gains and high latency. What should be reconsidered?",
        "A team wants to avoid wasted GPU cycles from bad configurations. What should be done?",
        "A company needs to compare algorithm families fairly. Which protocol is recommended?",
        "A team wants better generalization on sparse features. Which training improvement is often useful?",
    ],
    "Evaluation": [
        "A classifier for rare events has high accuracy but misses positives. Which metric should be prioritized?",
        "A team needs business-aligned threshold selection for binary classification. What is best practice?",
        "A model performs well in validation but fails in production slices. What should be added to evaluation?",
        "A team needs confidence intervals for model comparisons. Which approach helps?",
        "A regulated use case requires fairness checks across groups. What should be included?",
        "A model shows concept drift after seasonal changes. Which monitoring signal is useful?",
        "A team evaluates recommendation quality only offline. What is missing before rollout?",
        "A model comparison used different test sets and gave conflicting outcomes. What is wrong?",
        "A team needs robust evaluation for time-series forecasts. What split strategy is correct?",
        "A model is optimized for AUC but business cares about precision at top-k. What should change?",
        "A team wants to detect silent degradation after deployment. What should be tracked continuously?",
        "A model has unstable performance across random seeds. What should be analyzed?",
        "A team needs interpretable error analysis for stakeholders. What output should be produced?",
        "A fraud detector false positives are too high for operations teams. What should be tuned?",
        "A team compares models with negligible metric differences. What additional factor should guide decision?",
    ],
    "MLOps": [
        "A team needs safe rollout of new model versions in production. Which deployment pattern is best?",
        "A model endpoint requires low-latency autoscaling under variable traffic. What should be configured?",
        "A company needs full lineage from data to model artifact for audits. What capability is required?",
        "A team wants reproducible deployment artifacts across environments. Which practice is best?",
        "A model occasionally returns low-confidence predictions. What runtime behavior should be defined?",
        "A team needs automated retraining triggered by drift signals. What architecture pattern fits?",
        "A platform requires role-based access to model endpoints by environment. Which control is key?",
        "A team has many models and struggles with version governance. What should be centralized?",
        "A production model update caused regressions. Which MLOps control should have prevented this?",
        "A team needs cost visibility per model endpoint and traffic profile. What should be added?",
        "A company wants canary release for model versions with rollback on metric breach. What is best?",
        "A team manually copies model files to deploy. What process should replace this?",
        "A model serving stack needs secret rotation without downtime. What should be built in?",
        "A company needs environment promotion with approval gates for ML pipelines. What approach works best?",
        "A team wants one-click incident triage for model failures. What observability data should be linked?",
    ],
}

mla_questions = []
for topic, prompts in mla_prompts.items():
    mla_questions.extend(make_questions(topic, prompts))

write_js(ROOT / "questions-cloudops-c01.js", cloudops_meta, cloudops_rules, cloudops_questions, cloudops_services)
write_js(ROOT / "questions-mla-c01.js", mla_meta, mla_rules, mla_questions, mla_services)
print(f"Wrote CloudOps={len(cloudops_questions)} MLA={len(mla_questions)} questions")
