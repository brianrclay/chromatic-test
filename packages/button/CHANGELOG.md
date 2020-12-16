# Button Changelog

## [2.0.0] - 08-31-2020

### Added
- Added `link-destructive` button variant
- Updated `mx-design-tokens` package to v8.3.0 which included the necessary color tokens
for the `link-destructive` button variant

## [1.1.1] - 05-19-2020

### Fixed
- Removed px from lineHeight since it already has px in the token value
- Set button to default to `type="button"` so that non submit buttons won't try to submit forms by default.

### Changed
- Use `aria-disabled` instead of regular disabled prop and prevent default button click so that disabled buttons can still receive focus and screen readers will read that the button is disabled

## [1.1.0] - 04-21-2020

### Added
- ButtonGroup component for proper spacing of inline buttons.

## [1.0.1] - 04-28-2020

### Fixed
- Uses ButtonPadding from mx-design-tokens correctly.
- Uses Time.Short from mx-design-tokens correctly.

## [1.0.0] - 04-17-2020

Published
