// Last updated: 08.11.2025, 16:19:59
export {};
declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn) {
  const hash: Record<string, any[]> = {};
  this.forEach((el) => {
    const id = fn(el);
    hash[id] ? hash[id].push(el) : (hash[id] = [el]);
  });
  return hash;
};
