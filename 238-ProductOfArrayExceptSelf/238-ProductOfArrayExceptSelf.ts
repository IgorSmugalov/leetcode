// Last updated: 08.11.2025, 16:20:55
function productExceptSelf(nums: number[]) {
  const result: number[] = new Array(nums.length);
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }
  return result;
}