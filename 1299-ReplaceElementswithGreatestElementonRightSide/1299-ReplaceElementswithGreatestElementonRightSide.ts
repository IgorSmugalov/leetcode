// Last updated: 09.11.2025, 00:41:49
function replaceElements(arr: number[]): number[] {
    const result = []
    let max
    for(let i = 0; i < arr.length - 1; i++) {
        if (!max || arr[i] === max) {
            max = Math.max(...arr.slice(-(arr.length - 1 - i)))
        }
        
        result[i] = max
    }

    result.push(-1)
    return result
};