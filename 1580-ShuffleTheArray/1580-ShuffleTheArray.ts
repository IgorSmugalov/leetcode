// Last updated: 08.11.2025, 16:20:23
function shuffle(nums: number[], n: number): number[] {
  const res: number[] = [];
  for (let i = 0; i < nums.length / 2; i++) {
    res.push(nums[i], nums[i + n]);
  }
  return res;
}
