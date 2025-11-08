// Last updated: 08.11.2025, 16:20:10
function buildArray(nums: number[]): number[] {
  const res = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[nums[i]];
  }
  return res;
}
