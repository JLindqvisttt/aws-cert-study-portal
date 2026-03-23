# Changelog

All notable changes to this project are documented in this file.

## v1.0.0 - 2026-03-23

### Added
- Added 5-question quiz option in quick quiz actions on certification pages.
- Added 5-question option in quiz setup selector on certification pages.
- Added `scripts/ensure_minimum_question_counts.mjs` for minimum question count expansion.
- Added `scripts/validate_question_banks.mjs` for structural/schema validation.

### Changed
- Updated release version to `1.0.0` across app footer tags and docs.
- Updated certification banks so each implemented cert has at least 100 questions (except already higher banks).
- Updated README with live GitHub Pages URL.

### Removed
- Removed obsolete one-off content generation scripts in `scripts/`.

## v0.4.0 - 2026-03-23

### Added
- Expanded question banks:
  - `CLF-C02` to 140 questions.
  - `SAP-C02` to 100 questions.
  - `DOP-C02` to 100 questions.
  - `AIF-C01` to 100 questions.
  - `DEA-C01` to 100 questions.
  - `CloudOps-C01` to 100 questions.
  - `MLA-C01` to 100 questions.
- Added feedback link in nav across certification pages.
- Added release tag rendering in page footers (`Release v0.4.0`).
- Added GitHub Pages deployment workflow via GitHub Actions.

### Changed
- Updated portal totals to match expanded question banks.
- Feedback page now explicitly communicates that Slack/API feedback integration is temporarily inactive.

### Fixed
- Corrected generated content/runtime issue in DOP bank generation.
- Corrected feedback certification option from `SOA-C02` to `CloudOps-C01`.

### Notes
- Feedback backend (`aws/feedback-lambda`) remains optional and is currently not enabled in frontend config.
