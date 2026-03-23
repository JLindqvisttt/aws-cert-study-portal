# AWS Cert Study Portal

Static, offline-capable AWS certification study portal with per-cert question banks, quiz modes, progress tracking, and flashcards.

## Current Release
- Release: `v0.4.0`
- Release tag is rendered in the footer on portal, cert pages, feedback, and coming-soon pages.
- See `CHANGELOG.md` for release history.

## Certification Coverage

### Implemented in Portal (13)
- CLF-C02 (Foundational) - 140 questions
- AIF-C01 (Foundational) - 60 questions
- DVA-C02 (Associate) - 476 questions
- SAA-C03 (Associate) - 35 questions
- DEA-C01 (Associate) - 60 questions
- CloudOps-C01 (Associate) - 60 questions
- MLA-C01 (Associate) - 60 questions
- GenAI-Dev-Pro (Professional) - 12 questions
- SAP-C02 (Professional) - 60 questions
- DOP-C02 (Professional) - 60 questions
- ANS-C01 (Specialty) - 12 questions
- MLS-C01 (Specialty) - 12 questions
- SCS-C02 (Specialty) - 35 questions

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

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow for Pages deployment.

1. Push to `main`.
2. In GitHub: Settings -> Pages -> Build and deployment -> Source: `GitHub Actions`.
3. The workflow in `.github/workflows/deploy-pages.yml` will publish the site.

## Project Structure
- `index.html` - certification portal
- `style.css` - shared styling
- `app.js` - shared quiz engine for cert pages
- `portal.js` - cert catalog and portal rendering
- `questions-*.js` - per-cert question banks
- `feedback.html` / `feedback.js` - feedback UI and submission logic
- `coming-soon.html` / `coming-soon.js` - placeholder pages
- `aws/feedback-lambda/` - optional AWS SAM backend for Slack/API feedback
- `scripts/` - generators and content expansion scripts
- `docs/QUESTION_SOURCES.md` - question source references

## Remaining Work
- Expand lower-count banks:
	- GenAI-Dev-Pro (12)
	- ANS-C01 (12)
	- MLS-C01 (12)
	- SAA-C03 (35)
	- SCS-C02 (35)
- Continue quality pass on newly expanded banks (scenario realism and distractor quality).
- Add lightweight smoke test script for question bank schema validation.
- Decide final production integration path for feedback (Slack webhook vs API destination).

## Notes
- This project is for learning and exam practice.
- Not affiliated with Amazon Web Services.
