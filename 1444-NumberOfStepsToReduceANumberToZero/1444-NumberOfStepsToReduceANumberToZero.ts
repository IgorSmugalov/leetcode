// Last updated: 08.11.2025, 16:20:21
function numberOfSteps(num: number, steps: number = 0): number {
  return num === 0
    ? steps
    : numberOfSteps(num % 2 === 0 ? num / 2 : num - 1, steps + 1);
}