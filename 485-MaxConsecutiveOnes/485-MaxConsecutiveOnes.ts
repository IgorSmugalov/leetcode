// Last updated: 09.11.2025, 14:50:26
function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0
    let current = 0
    for (let num of nums) {

        if (num === 1) {
            current++
            max = Math.max(max, current);
        } else {
            current = 0
        }
    }
    return max
};