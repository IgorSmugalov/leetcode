// Last updated: 12.11.2025, 23:27:48
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let up = m - 1
    let down = n - 1
    let target = m + n - 1

    while(down >= 0) {

        if (up >= 0 && nums1[up] > nums2[down]) {
            nums1[target] = nums1[up]
            up--
        } else {
            nums1[target] = nums2[down]
            down--
        }
        
        target--
    }
};
