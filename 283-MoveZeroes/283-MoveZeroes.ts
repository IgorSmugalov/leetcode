// Last updated: 08.11.2025, 16:20:52
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let pointerRear = 0;
  let pointerForward = pointerRear + 1;

  while (pointerForward < nums.length) {
    if (nums[pointerRear] === 0)
      if (nums[pointerForward] === 0) pointerForward++;
      else
        [nums[pointerRear], nums[pointerForward]] = [
          nums[pointerForward],
          nums[pointerRear],
        ];
    else pointerRear++, pointerForward++;
  }
}