// Last updated: 08.11.2025, 16:19:56
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i))
    }
    return result
};