// Last updated: 13.11.2025, 23:26:40
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let zeroIdx = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[zeroIdx]] = [nums[zeroIdx], nums[i]]
            zeroIdx++
        }
    }
};
