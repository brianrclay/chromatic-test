# TokenProvider Changelog
## [2.0.0] - 07-16-2020

### Changed
- Replaces all `primary` color references to `brand`

### Added
- Support for custom fonts with the `regularFont`, `boldFont`, and `semiboldFont` arguments

## [1.0.0] - 04-17-2020

Published

## [1.0.0-alpha.0] - 03-20-2020

### Added
- Exports `ReactNativeTokenContext`.
- Implements `targets` from `mx-design-tokens`.

### Changed
- `mx-design-tokens` updated to V5.
- `useTokens` hook defaults to `targets.REACT`
- `TokenProvider` returns the appropriate context depending on the target.

