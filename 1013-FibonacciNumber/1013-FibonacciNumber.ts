// Last updated: 08.11.2025, 16:20:30
const cache: Map<number, number> = new Map();
function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  if (!cache.has(n)) cache.set(n, fib(n - 1) + fib(n - 2));
  return cache.get(n)!;
}
