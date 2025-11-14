// Last updated: 14.11.2025, 20:09:05
function removeDuplicates(nums: number[]): number {
    const unique = new Set<number>()
    let uniqueIdx = 0
    for(let i = 0; i < nums.length; i++) {
        const number = nums[i]
        const lastUnique = nums[uniqueIdx]
        if (number === lastUnique) {
            continue
        } else {
            uniqueIdx++
            nums[uniqueIdx] = number
        }
    }

    return uniqueIdx + 1
};
