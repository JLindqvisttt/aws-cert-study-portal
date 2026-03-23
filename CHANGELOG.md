# Changelog

All notable changes to this project are documented in this file.

## v0.4.0 - 2026-03-23

### Added
- Expanded question banks:
  - `CLF-C02` to 140 questions.
  - `SAP-C02` to 60 questions.
  - `DOP-C02` to 60 questions.
  - `AIF-C01` to 60 questions.
  - `DEA-C01` to 60 questions.
  - `CloudOps-C01` to 60 questions.
  - `MLA-C01` to 60 questions.
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
