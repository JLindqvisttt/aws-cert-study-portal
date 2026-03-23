import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CLF_SRC = Path('/tmp/aws-prio-sources/clf/README.md')


def classify_clf_topic(question_text: str) -> str:
    text = question_text.lower()
    if re.search(r'cost|billing|budget|price|pricing|reserved|savings|free tier|trusted advisor|consolidated', text):
        return 'Billing'
    if re.search(r'iam|mfa|security|kms|cloudtrail|compliance|waf|guardduty|least privilege|shared responsibility', text):
        return 'Security'
    if re.search(r'ec2|s3|rds|dynamodb|lambda|vpc|route 53|cloudfront|snowball|database|compute|storage', text):
        return 'Technology'
    return 'Cloud Concepts'


def parse_clf_questions(limit: int = 140):
    text = CLF_SRC.read_text(encoding='utf-8', errors='ignore')
    lines = text.splitlines()

    questions = []
    q_text = None
    options = []
    correct = []
    current_option_index = None

    def flush_question():
        nonlocal q_text, options, correct, current_option_index
        if q_text and len(options) >= 2 and correct:
            normalized_q = re.sub(r'\s+', ' ', q_text).strip()
            normalized_opts = [re.sub(r'\s+', ' ', o).strip() for o in options]
            if re.search(r'choose\s+(two|2|three|3)', normalized_q, flags=re.I) and len(correct) > 1:
                answer = correct
            elif len(correct) > 1:
                answer = correct
            else:
                answer = correct[0]

            questions.append(
                {
                    'q': normalized_q,
                    'options': normalized_opts,
                    'answer': answer,
                    'topic': classify_clf_topic(normalized_q),
                }
            )

        q_text = None
        options = []
        correct = []
        current_option_index = None

    for raw in lines:
        line = raw.rstrip('\n')

        if line.startswith('### '):
            flush_question()
            q_text = line[4:].strip()
            continue

        bullet = re.match(r'^- \[( |x|X)\]\s+(.*)$', line)
        if bullet and q_text:
            is_correct = bullet.group(1).lower() == 'x'
            option_text = bullet.group(2).strip()
            options.append(option_text)
            current_option_index = len(options) - 1
            if is_correct:
                correct.append(current_option_index)
            continue

        stripped = line.strip()
        if q_text and current_option_index is None:
            if stripped and not stripped.startswith('**[⬆') and not stripped.startswith('|') and not stripped.startswith('###'):
                q_text += ' ' + stripped
                continue

        if q_text and current_option_index is not None:
            if stripped and not stripped.startswith('**[⬆') and not stripped.startswith('###') and not re.match(r'^- \[( |x|X)\]\s+', stripped):
                options[current_option_index] += ' ' + stripped
                continue

        if q_text and stripped.startswith('**[⬆'):
            flush_question()
            if len(questions) >= limit:
                break

    flush_question()

    deduped = []
    seen = set()
    for item in questions:
        key = item['q'].lower()
        if key in seen:
            continue
        seen.add(key)
        deduped.append(item)
    return deduped[:limit]


def json_js(obj) -> str:
    return json.dumps(obj, ensure_ascii=False, indent=2)


def topic_rules_js(pairs):
    rows = [f"  [/{pattern}/i, '{topic}']" for pattern, topic in pairs]
    return '[\n' + ',\n'.join(rows) + '\n]'


def write_bank(file_name, meta, rules, questions, services):
    target = ROOT / file_name
    content = (
        'const CERT_META = ' + json_js(meta) + ';\n\n'
        'const TOPIC_RULES = ' + topic_rules_js(rules) + ';\n\n'
        'const QUESTIONS = ' + json_js(questions) + ';\n\n'
        'const SERVICES = ' + json_js(services) + ';\n'
    )
    target.write_text(content, encoding='utf-8')


def make_service(name, emoji, desc):
    return {
        'name': name,
        'emoji': emoji,
        'desc': desc,
        'bullets': [
            'Exam-focused architecture and operations patterns',
            'Reliability, security, and performance trade-offs',
            'Cost-aware implementation and operational guidance',
            'Common failure modes and practical remediation',
            'Best-practice deployment and governance considerations',
        ],
    }


def make_generated_questions(domains, count):
    templates = [
        'A company needs to improve {domain} outcomes while reducing operational overhead. Which approach is BEST?',
        'During a production incident related to {domain}, what should the team do first?',
        'Which design decision MOST improves reliability for {domain} workloads?',
        'A team wants lower cost without hurting outcomes in {domain}. What is the best action?',
        'Which control is most effective to reduce risk in {domain} scenarios?',
    ]

    option_sets = [
        (
            [
                'Build custom tooling for every workload',
                'Use managed AWS services and automation aligned to the use case',
                'Disable monitoring to reduce complexity',
                'Run all workloads in one AZ',
            ],
            1,
        ),
        (
            [
                'Apply broad changes immediately',
                'Use telemetry to isolate root cause before targeted remediation',
                'Disable alarms and retry later',
                'Delete and recreate all resources',
            ],
            1,
        ),
        (
            [
                'Single-instance architecture with manual failover',
                'Multi-AZ design with health checks and automated recovery',
                'No backup strategy',
                'Shared root credentials for operations',
            ],
            1,
        ),
        (
            [
                'Scale up permanently with oversized resources',
                'Right-size and use commitment/elasticity mechanisms based on demand',
                'Disable autoscaling',
                'Store all logs forever without lifecycle policies',
            ],
            1,
        ),
        (
            [
                'Rely on manual reviews only',
                'Implement least-privilege access, auditing, and policy-driven controls',
                'Disable encryption for performance',
                'Use static credentials in code',
            ],
            1,
        ),
    ]

    result = []
    i = 0
    while len(result) < count:
        domain = domains[i % len(domains)]
        template = templates[i % len(templates)]
        options, answer = option_sets[i % len(option_sets)]

        rotation = (i // len(domains)) % 4
        rotated_options = options[rotation:] + options[:rotation]
        rotated_answer = (answer - rotation) % 4

        result.append(
            {
                'q': template.format(domain=domain),
                'options': rotated_options,
                'answer': rotated_answer,
                'topic': domain,
            }
        )
        i += 1
    return result


def main():
    clf_questions = parse_clf_questions(limit=140)
    clf_meta = {
        'id': 'clf-c02',
        'code': 'CLF-C02',
        'name': 'Cloud Practitioner',
        'fullName': 'AWS Certified Cloud Practitioner',
        'emoji': '☁️',
        'minutes': 90,
        'passingScore': 70,
        'examQuestions': 65,
        'color': '#64748b',
        'badge': 'Foundational',
        'description': 'Foundational AWS cloud concepts, security, technology, and billing principles.',
        'topics': ['Cloud Concepts', 'Security', 'Technology', 'Billing'],
    }
    clf_rules = [
        ('cloud|shared responsibility|availability|elasticity|global infrastructure', 'Cloud Concepts'),
        ('iam|security|mfa|compliance|kms|cloudtrail|waf|guardduty|least privilege', 'Security'),
        ('ec2|s3|rds|dynamodb|lambda|vpc|route 53|cloudfront|database|storage|compute', 'Technology'),
        ('cost|billing|price|pricing|budget|savings|free tier|trusted advisor|consolidated billing', 'Billing'),
    ]
    clf_services = [
        make_service('Cloud Concepts', '☁️', 'Core cloud principles, elasticity, and shared responsibility model.'),
        make_service('Security', '🔐', 'Identity, access control, encryption, and compliance basics on AWS.'),
        make_service('Technology', '🧩', 'Compute, storage, networking, and database service fundamentals.'),
        make_service('Billing', '💰', 'Cost models, billing visibility, budgeting, and optimization basics.'),
    ]
    write_bank('questions-clf-c02.js', clf_meta, clf_rules, clf_questions, clf_services)

    sap_domains = ['Enterprise Design', 'Migration', 'Governance', 'Cost Optimization']
    sap_questions = make_generated_questions(sap_domains, 60)
    sap_meta = {
        'id': 'sap-c02',
        'code': 'SAP-C02',
        'name': 'Solutions Architect',
        'fullName': 'AWS Certified Solutions Architect - Professional',
        'emoji': '🏗️',
        'minutes': 180,
        'passingScore': 75,
        'examQuestions': 75,
        'color': '#f97316',
        'badge': 'Professional',
        'description': 'Advanced enterprise architecture, migration strategy, governance, and cost optimization on AWS.',
        'topics': sap_domains,
    }
    sap_rules = [
        ('enterprise|landing zone|multi-account|shared services|transit gateway', 'Enterprise Design'),
        ('migrat|cutover|rehost|replatform|refactor|datasync|dms', 'Migration'),
        ('governance|scp|config|audit|compliance|control tower|organization', 'Governance'),
        ('cost|rightsiz|savings|budget|optimization|finops', 'Cost Optimization'),
    ]
    sap_services = [
        make_service('Enterprise Design', '🏛️', 'Multi-account and multi-region architecture patterns at enterprise scale.'),
        make_service('Migration', '🚚', 'Migration planning, execution, and low-risk cutover strategies.'),
        make_service('Governance', '📜', 'Policy, compliance, security controls, and auditability in AWS estates.'),
        make_service('Cost Optimization', '💸', 'Cost-efficient architecture and continuous spend optimization practices.'),
    ]
    write_bank('questions-sap-c02.js', sap_meta, sap_rules, sap_questions, sap_services)

    dop_domains = ['CI/CD', 'Observability', 'Reliability', 'Security Automation']
    dop_questions = make_generated_questions(dop_domains, 60)
    dop_meta = {
        'id': 'dop-c02',
        'code': 'DOP-C02',
        'name': 'DevOps Engineer',
        'fullName': 'AWS Certified DevOps Engineer - Professional',
        'emoji': '⚙️',
        'minutes': 180,
        'passingScore': 75,
        'examQuestions': 75,
        'color': '#f97316',
        'badge': 'Professional',
        'description': 'CI/CD, observability, reliability engineering, and security automation for AWS workloads.',
        'topics': dop_domains,
    }
    dop_rules = [
        ('ci/cd|pipeline|codebuild|codedeploy|codepipeline|artifact|release', 'CI/CD'),
        ('observability|monitoring|cloudwatch|log|trace|x-ray|alarm|slo', 'Observability'),
        ('reliability|rollback|canary|blue/green|autoscaling|failover', 'Reliability'),
        ('security|automation|secrets|iam|policy|compliance|guardrail', 'Security Automation'),
    ]
    dop_services = [
        make_service('CI/CD', '🔄', 'Automated software delivery with quality gates and progressive deployment strategies.'),
        make_service('Observability', '📊', 'Metrics, logs, traces, and actionable operations telemetry at scale.'),
        make_service('Reliability', '✅', 'Resilient operations, automated recovery, and safe rollback patterns.'),
        make_service('Security Automation', '🧱', 'Security controls embedded in delivery workflows and runtime operations.'),
    ]
    write_bank('questions-dop-c02.js', dop_meta, dop_rules, dop_questions, dop_services)

    print(f'Updated banks: CLF={len(clf_questions)}, SAP={len(sap_questions)}, DOP={len(dop_questions)}')


if __name__ == '__main__':
    main()
