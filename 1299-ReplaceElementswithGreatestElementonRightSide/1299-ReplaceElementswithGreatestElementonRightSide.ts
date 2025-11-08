// Last updated: 09.11.2025, 00:57:18
function replaceElements(arr: number[]): number[] {
    let max = arr[arr.length - 1]
    arr[arr.length - 1] = -1
    

    for(let i = arr.length - 2; i >= 0; i--) {
        const current = arr[i]
        arr[i] = max
        const prev = arr[i - 1]
        if (current > max) {
            max = current
        }
    }

    return arr
};