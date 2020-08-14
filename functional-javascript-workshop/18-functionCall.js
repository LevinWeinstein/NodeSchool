const slice = (...args) => Function.prototype.call.call(Array.prototype.slice, ...args)
module.exports = slice