// Last updated: 08.11.2025, 16:20:43
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack: number[] = [];
  const map: Map<number, number> = new Map();
  for (let i = nums2.length - 1; i >= 0; i--) {
    const currentNum = nums2[i];
    while (stack.length > 0 && stack[stack.length - 1] < currentNum) {
      stack.pop();
    }
    map.set(currentNum, stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.push(currentNum);
  }

  return nums1.map((num) => map.get(num));
}