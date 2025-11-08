// Last updated: 08.11.2025, 16:21:09
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let i = 0;
  let low = 0;
  let high = nums.length - 1;
  while (i <= high) {
    const num = nums[i];
    switch (num) {
      case 0:
        [nums[i], nums[low]] = [nums[low], nums[i]];
        low++;
        i++;
        break;
      case 2:
        [nums[i], nums[high]] = [nums[high], nums[i]];
        high--;
        break;
      default:
        i++;
    }
  }
}
