// Last updated: 09.11.2025, 13:14:58
function twoSum(nums: number[], target: number): number[] {
    const hash = new Map<number, number>()
    // key -> num in nums, value -> num index in nums
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const diff = target - num
        if (hash.has(diff)) {
            return [hash.get(diff), i]
        }
        hash.set(num, i)
    }
    return []
};