// Last updated: 08.11.2025, 16:19:53
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const timeOutFn = new Promise((res, rej) =>
      setTimeout(() => rej("Time Limit Exceeded"), t)
    );
    return Promise.race([timeOutFn, fn(...args)]);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */