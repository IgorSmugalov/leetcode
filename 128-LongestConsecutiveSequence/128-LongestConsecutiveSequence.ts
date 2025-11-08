// Last updated: 08.11.2025, 16:21:05
function longestConsecutive(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let current = 1;
  let max = current;
  const hash: Set<number> = new Set(nums);

  for (let num of nums) {
    
    if (hash.has(num - 1)) continue;
    let checkedNum = num + 1;
    while (hash.has(checkedNum)) {
      current++;
      checkedNum++;
    }
    max = Math.max(max, current);
    current = 1;
  }
  return max;
}