// Last updated: 09.11.2025, 13:05:22
function twoSum(nums: number[], target: number): number[] {
    
    for(let i1 = 0; i1 < nums.length; i1++) {
        const first = nums[i1]
        
        for(let i2 = i1 + 1; i2 < nums.length; i2++) {
            const second = nums[i2]
            if (first + second === target) {
                return [i1, i2]
            }

        }
    }
    return []
};