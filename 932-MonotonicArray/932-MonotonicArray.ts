// Last updated: 08.11.2025, 16:20:32
function isMonotonic(nums: number[]) {
  let dir = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (dir === 0 && nums[i + 1] !== nums[i]) {
      dir = nums[i + 1] > nums[i] ? 1 : -1;
      continue;
    }
    if (dir > 0) {
      if (!(nums[i + 1] >= nums[i])) return false;
    } else {
      if (!(nums[i + 1] <= nums[i])) return false;
    }
  }
  return true;
}