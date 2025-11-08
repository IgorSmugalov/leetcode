// Last updated: 08.11.2025, 16:20:04
function createCounter(n: number): () => number {
    return ()=> n++
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */