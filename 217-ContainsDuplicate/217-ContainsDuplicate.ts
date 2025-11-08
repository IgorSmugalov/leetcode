// Last updated: 08.11.2025, 16:20:58
function containsDuplicate(nums: number[]): boolean {
  let hash: Map<number, boolean> = new Map();
  for (const num of nums) {
    if (hash.has(num)) return true;
    else hash.set(num, true);
  }
  return false;
}
