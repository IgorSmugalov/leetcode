// Last updated: 08.11.2025, 16:21:17
function removeElement(nums: number[] | string[], val: number): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      nums[right] = "_";
      right--;
    } else {
      left++;
    }
  }
  return right;
}