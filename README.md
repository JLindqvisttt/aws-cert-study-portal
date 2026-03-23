# AWS Cert Study Portal

Static, offline-capable AWS certification study portal with per-cert question banks, quiz modes, progress tracking, and flashcards.

## Current Release
- Release: `1.0.0`
- Release tag is rendered in the footer on portal, cert pages, feedback, and coming-soon pages.
- See `CHANGELOG.md` for release history.

## Live Site
- GitHub Pages: `https://jlindqvisttt.github.io/aws-cert-study-portal/`

## Certification Coverage

### Implemented in Portal (13)
- CLF-C02 (Foundational) - 140 questions
- AIF-C01 (Foundational) - 100 questions
- DVA-C02 (Associate) - 476 questions
- SAA-C03 (Associate) - 100 questions
- DEA-C01 (Associate) - 100 questions
- CloudOps-C01 (Associate) - 100 questions
- MLA-C01 (Associate) - 100 questions
- GenAI-Dev-Pro (Professional) - 100 questions
- SAP-C02 (Professional) - 100 questions
- DOP-C02 (Professional) - 100 questions
- ANS-C01 (Specialty) - 100 questions
- MLS-C01 (Specialty) - 100 questions
- SCS-C02 (Specialty) - 100 questions

### Catalog by Level
- Foundational: CLF-C02, AIF-C01
- Associate: CloudOps-C01, DVA-C02, SAA-C03, DEA-C01, MLA-C01
- Professional: GenAI-Dev-Pro, SAP-C02, DOP-C02
- Specialty: ANS-C01, MLS-C01, SCS-C02

## Features
- Certification portal with level filters and progress cards
- Per-cert quiz apps with isolated question banks
- Quiz modes: study mode + exam simulation
- Study tab + flashcards
- Per-cert progress in localStorage: `aws-quiz-progress-<cert-id>`
- Feedback page linked from portal and cert pages
- Optional Slack/API feedback backend template (`aws/feedback-lambda`)

## Feedback Integration Status
- The feedback UI is active.
- Slack/API submission is intentionally inactive for now and shows "coming soon" messaging.
- To enable later, set `window.FEEDBACK_API_URL` in `feedback.js` and deploy backend from `aws/feedback-lambda/`.

## Run Locally
1. `python3 -m http.server 8000`
2. Open `http://127.0.0.1:8000/`

## Validate Question Banks
1. `node scripts/validate_question_banks.mjs`
2. The script checks each bank for required fields, answer index validity, duplicate question text, and topic consistency.

## Expand Minimum Question Counts
1. `node scripts/ensure_minimum_question_counts.mjs`
2. The script preserves existing banks and tops up implemented certifications to at least 100 questions.

## Project Structure
- `index.html` - certification portal
- `style.css` - shared styling
- `app.js` - shared quiz engine for cert pages
- `portal.js` - cert catalog and portal rendering
- `certs/` - certification pages
- `data/questions/` - per-cert question banks and explanations
- `feedback.html` / `feedback.js` - feedback UI and submission logic
- `coming-soon.html` / `coming-soon.js` - placeholder pages
- `aws/feedback-lambda/` - optional AWS SAM backend for Slack/API feedback
- `scripts/ensure_minimum_question_counts.mjs` - tops up implemented banks to minimum question count
- `scripts/validate_question_banks.mjs` - validates bank schema, answer indexes, duplicates, and topic consistency
- `QUESTION_SOURCES.md` - question source references

## Remaining Work
- Continue quality pass on newly expanded banks (scenario realism and distractor quality).
- Normalize topic metadata for the remaining validator warnings in DVA, SAA, and SCS.
- Decide final production integration path for feedback (Slack webhook vs API destination).

## Notes
- This project is for learning and exam practice.
- Not affiliated with Amazon Web Services.
