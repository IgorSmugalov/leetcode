// Last updated: 09.11.2025, 14:43:58
function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0
    let current = 0
    let last = 1
    for (let num of nums) {
        if (num === 1 && last === 0) {
            current = 0
        }
        if (num === 1) {
            current++
        }
        if (current > max) {
            max = current
        }
        last = num
    }
    return max
};