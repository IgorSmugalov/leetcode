// Last updated: 08.11.2025, 16:20:36
function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsSet = new Set(jewels)
  
  return stones.split('').reduce((acc, stone) => jewelsSet.has(stone) ? acc + 1 : acc, 0)
}