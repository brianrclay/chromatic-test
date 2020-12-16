# Input Changelog

## [1.1.6] - 09-21-2020

## Added
- New ariaHideLabel prop for PasswordInput translated aria-label hide button 
- New ariaShowLabel prop for PasswordInput translated aria-label show button 

## [1.1.5] - 09-04-2020

### Fixed
- fix undefined arguments in TextInput styles function

## [1.1.4] - 08-27-2020

### Fixed
- Fix bad publish

## [1.1.3] - 08-27-2020

### Added
- Aria label for accurate allowToggle hide/show button state

## [1.1.2] - 08-17-2020

### Added
- search input storybook example

### Fixed
- padding on left icon aligns with text

## [1.1.1] - 07-15-2020

### Fixed
- removed flexbox alignment for checkbox and radio components so that it works in all browsers

## [1.1.0] - 07-13-2020

### Fixed
- htmlFor now defaults to the element id instead of name fixing [Issue 25](https://gitlab.mx.com/mx/kyper-react/-/issues/25)
- add box sizing to checkbox to fix position
- add cursor:pointer to radio and checkbox labels
- add flexbox to ToggleBase layout to fix label and checkbox/radio button alignment

### Added
- Support for aria-invalid and aria-describedby to the error message and input description.

### Update
- updated mx-design-tokens to fix the checkbox label margin

## [1.0.0] - 06-23-2020

### Fixed
- Icon position is not affected by error messages
- Password Input icon alignment in button fixed

## [1.0.0-beta.5] - 05-26-2020

### Changed
- Moved devDependency for Icon to the parent package.

## [1.0.0-beta.4] - 05-21-2020

### Added
- `label` now supports passing in an element

### Changed
- Component now takes up 100% of the container

## [1.0.0-beta.3] - 05-06-2020

### Changed
- TextInput now supports no label.
- Refactor TextInput CSS to use boxshadow instead of border for sizing purposes.

## [1.0.0-beta.2] - 04-23-2020

### Added
- New `Radio` component
- New `CheckBox` component

### Changed
- `@kyper/icon` updated to 1.0.0
- `@kyper/tokenprovider` updated to 1.0.0

## [1.0.0-beta.1] - 04-17-2020

### Added
- New `PasswordInput` component
- `iconLeft` and `iconRight`

### Removed
- `iconPosition` prop in favor of `iconLeft` and `iconRight`
- `icon` element prop in favor of `iconLeft` and `iconRight`

## [1.0.0-beta.0] - 03-24-2020

### Added
- Initial implementation