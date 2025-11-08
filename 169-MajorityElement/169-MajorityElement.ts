// Last updated: 08.11.2025, 16:21:00
function majorityElement(nums: number[]): number {
    if (nums.length < 2) return nums[0]
    const hash = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (!hash.has(num)) {
            hash.set(num, 1)
        } else {
            const newNumCoumt = hash.get(num) + 1
            if (newNumCoumt >= nums.length / 2) return num
            hash.set(num, newNumCoumt)
        }
    }
};