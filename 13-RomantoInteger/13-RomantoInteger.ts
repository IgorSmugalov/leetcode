// Last updated: 08.11.2025, 17:45:33
function romanToInt(s: string): number {
    const romanHash: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    };
    const nums: number[] = s.split("").map((rom) => romanHash[rom]);
    return nums.reduce((sum, num, index) => {
        return num < nums[index + 1] ? sum - num : sum + num;
    }, 0);

};