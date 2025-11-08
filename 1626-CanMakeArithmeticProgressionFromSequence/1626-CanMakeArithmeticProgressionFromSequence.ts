// Last updated: 08.11.2025, 16:20:18
function canMakeArithmeticProgression(arr: number[]): boolean {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const diff = (max - min) / (arr.length - 1);
  let current = min;
  while (current < max) {
    current += diff;
    if (!arr.includes(current)) {
      return false;
    }
  }
  return true;
};