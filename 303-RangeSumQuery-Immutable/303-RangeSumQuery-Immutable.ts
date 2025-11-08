// Last updated: 08.11.2025, 20:06:00
class NumArray {
    prefixSumArr: number[] = []
    constructor(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            const sum = (this.prefixSumArr[i - 1] ?? 0) + nums[i];
            this.prefixSumArr.push(sum);
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefixSumArr[right] - (this.prefixSumArr[left-1] ?? 0);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */