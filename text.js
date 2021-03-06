var common = require('./config')
var CNode = require('./src/_c-node')

/**
 * @function text
 * @param {!string} txt textContent
 * @return {!Object} Component
 */
module.exports = function textNode(txt) {
	return new CNode(common.document.createTextNode(txt))
}
