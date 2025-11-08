// Last updated: 08.11.2025, 16:21:08
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let a = m - 1;
  let b = n - 1;
  let insert = m + n - 1;
  while (insert >= 0 && b >= 0) {
    let num1 = nums1[a];
    let num2 = nums2[b];
    if (a >= 0 && num1 > num2) {
        nums1[insert] = num1
        a--
    } else {
        nums1[insert] = num2
        b--
    }
    insert--
  }
}

