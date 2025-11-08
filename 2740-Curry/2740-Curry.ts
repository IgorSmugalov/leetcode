// Last updated: 08.11.2025, 16:20:01
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...innerArgs) {
        return curried.apply(this, [...args, ...innerArgs]);
      };
    }
  };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
