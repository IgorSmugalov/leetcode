// Last updated: 08.11.2025, 20:07:36
class NumArray {
    prefixSumArr: number[] = [0]
    constructor(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            const sum = this.prefixSumArr[i] + nums[i];
            this.prefixSumArr.push(sum);
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefixSumArr[right + 1] - this.prefixSumArr[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */