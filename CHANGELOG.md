# Change Log

- based on [Keep a Changelog](http://keepachangelog.com/)
- adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
~~Removed, Changed, Deprecated, Added, Fixed, Security~~
--wrap in seperate function, async only, normal callback
--esm to cjs
--remove parent getter. use find
--setDocument

## [0.4.0] - 2017-06-04
### Removed
- `.wrap`, `.text`, `.id`, `.class` methods
- es6 and browser versions

### Changed
- module system from esm to cjs
- `.set` => `.c`
- `.set` => `.c`
- `setWindow` => `config.document`

## [0.3.0] - 2017-06-04
### Added
- forked from [pico-dom](https://www.npmjs.com/package/pico-dom)
- no templates
- `.wrap` helper
- `.a` short form for attributes
- cElement.id(string)
- setDocument to setWindow
