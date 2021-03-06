var common = require('./config')
var CElement = require('./src/_c-element')
var svgURI = 'http://www.w3.org/2000/svg'

/**
 * @function svg
 * @param {!string} tag tagName
 * @return {!Object} Component
 */
module.exports = function svg(tag) {
	return new CElement(common.document.createElementNS(svgURI, tag))
}
