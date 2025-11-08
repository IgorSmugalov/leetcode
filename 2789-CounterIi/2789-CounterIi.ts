// Last updated: 08.11.2025, 16:19:46
type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let count = init
    return {
        increment: () => count+=1,
        decrement: () => count-=1,
        reset: () => count = init,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */