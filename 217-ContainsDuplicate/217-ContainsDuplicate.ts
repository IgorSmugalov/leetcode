// Last updated: 08.11.2025, 23:35:21
function containsDuplicate(nums: number[]): boolean {
    const unique = new Set(nums)

    return nums.length !== unique.size
};