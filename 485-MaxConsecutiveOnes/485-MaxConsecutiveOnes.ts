// Last updated: 09.11.2025, 14:47:09
function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0
    let current = 0
    let prev = 1
    for (let num of nums) {

        if (num === 1) {
            current++
        } else {
            current = 0
        }

        if (current > max) {
            max = current
        }

        prev = num
    }
    return max
};