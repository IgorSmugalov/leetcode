// Last updated: 08.11.2025, 16:19:45
/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    let key = Symbol()
    context[key] = this
    let result = context[key](...args)
    delete context[key]
    return result
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */