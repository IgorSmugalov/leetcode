// Last updated: 08.11.2025, 16:19:47
type Fn = (...args: any[]) => any;

function once(fn: Fn): Fn {
  let calls = 0;
  return function (...args) {
    calls++;
    return calls > 1 ? undefined : fn(...args);
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
