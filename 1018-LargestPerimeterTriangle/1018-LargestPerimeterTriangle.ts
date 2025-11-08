// Last updated: 08.11.2025, 16:20:29
function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    const A = nums[i];
    const B = nums[i + 1];
    const C = nums[i + 2];
    if (A < B + C) return A + B + C;
  }
  return 0;
}