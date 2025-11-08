// Last updated: 08.11.2025, 16:19:52
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let acc = init
    for (let index = 0; index < nums.length; index++) {
        acc = fn(acc, nums[index])
    }
    return acc
};