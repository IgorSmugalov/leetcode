// Last updated: 08.11.2025, 20:01:04
class NumArray {
    prefixSumArr: number[] = []
    constructor(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            const prefixSum = nums.slice(0, i + 1).reduce(
                (acc, num) => acc + num, 0
            );
            this.prefixSumArr.push(prefixSum);
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