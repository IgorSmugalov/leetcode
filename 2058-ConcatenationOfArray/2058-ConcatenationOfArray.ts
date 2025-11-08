// Last updated: 08.11.2025, 16:20:11
function getConcatenation(nums: number[]): number[] {
  const initialLength = nums.length
  for (let i = 0; i < initialLength; i++) {
    nums.push(nums[i]);
  }
  return nums;
}
