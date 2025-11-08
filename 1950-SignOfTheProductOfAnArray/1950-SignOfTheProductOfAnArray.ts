// Last updated: 08.11.2025, 16:20:13
function arraySign(nums: number[]): number {
  if (nums.includes(0)) return 0;
  if (nums.filter((value) => value < 0).length % 2 !== 0) return -1;
  return 1;
};