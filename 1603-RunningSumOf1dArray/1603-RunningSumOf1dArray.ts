// Last updated: 08.11.2025, 16:20:19
function runningSum(nums: number[]): number[] {
    let prevSum = 0
    return nums.map((num) => prevSum += num
    )
};