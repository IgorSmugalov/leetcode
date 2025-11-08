// Last updated: 08.11.2025, 16:21:18
function removeDuplicates(nums: number[]): number {
  let candidateIndex = 0;
  let comparableIndex = 0;
  while (comparableIndex <= nums.length) {
    if (nums[candidateIndex] !== nums[comparableIndex]) {
      nums[candidateIndex + 1] = nums[comparableIndex];
      candidateIndex++;
    }
    comparableIndex++;
  }
  return candidateIndex;
}