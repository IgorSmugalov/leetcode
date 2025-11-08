// Last updated: 08.11.2025, 16:21:01
function twoSum(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length - 1
    while (numbers[left] < numbers[right]) {
        const numLeft = numbers[left]
        const numRight = numbers[right]
        if (numLeft + numRight === target) break
        if (numLeft + numRight > target) right--
        else  left++
    }
    return [left + 1, right + 1]
};