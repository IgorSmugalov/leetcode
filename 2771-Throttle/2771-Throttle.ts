// Last updated: 08.11.2025, 16:19:49
type F = (...args: any[]) => void

function throttle(fn: F, t: number): F {
  let throttleActive = null
  let waitingArgs = null

  const throttleController = () => {
    if (waitingArgs) {
      fn(...waitingArgs)
      waitingArgs = null
    } else {
      clearInterval(throttleActive)
      throttleActive = null
    }
  }


    return function(...args) {
      if(throttleActive) {waitingArgs = args}
      else {
        fn(...args)
        throttleActive = setInterval(throttleController, t)
      }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */