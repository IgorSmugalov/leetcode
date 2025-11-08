// Last updated: 08.11.2025, 16:20:50
function topKFrequent(nums: number[], k: number): number[] {
  const hash: Map<number, number> = new Map();
  for (const num of nums) {
    if (hash.has(num)) hash.set(num, hash.get(num)! + 1);
    else hash.set(num, 1);
  }

  const arr = Array.from(hash.entries()).sort((a, b) => b[1] - a[1]);
  const res: number[] = [];
  for (let i = 0; i < k; i++) {
    const num = arr[i][0];
    res.push(num);
  }
  return res;
}