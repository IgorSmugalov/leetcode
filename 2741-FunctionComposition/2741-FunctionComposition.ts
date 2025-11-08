// Last updated: 08.11.2025, 16:20:00
type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((acc, fn) => acc = fn(acc), x);
  };
}


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */