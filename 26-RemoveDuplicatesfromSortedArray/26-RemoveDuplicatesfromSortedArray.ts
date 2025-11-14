// Last updated: 14.11.2025, 20:10:55
function removeDuplicates(nums: number[]): number {
    let uniqueIdx = 0
    for(let i = 0; i < nums.length; i++) {
        const number = nums[i]
        const lastUnique = nums[uniqueIdx]
        if (number !== lastUnique) {
            uniqueIdx++
            nums[uniqueIdx] = number
        }
    }

    return uniqueIdx + 1
};
