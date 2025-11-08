// Last updated: 08.11.2025, 16:20:26
function replaceElements(arr: number[]): number[] {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    let currentValue = arr[i];
    arr[i] = max;
    if (currentValue > max) max = currentValue;
  }
  return arr;
}
