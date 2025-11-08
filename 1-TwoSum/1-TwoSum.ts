// Last updated: 08.11.2025, 15:42:30
function twoSum(nums: number[], target: number): number[] {
    for (let i1 = 0; i1 < nums.length; i1++) {

        for (let i2 = i1 + 1; i2 < nums.length; i2++) {

            if (nums[i1] + nums[i2] === target) {
                return [i1, i2]
            }
        }
    }
    return []
}