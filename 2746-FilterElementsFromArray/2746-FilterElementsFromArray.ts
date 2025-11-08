// Last updated: 08.11.2025, 16:19:57
function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) result.push(arr[i])
    }
    return result
};