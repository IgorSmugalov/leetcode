// Last updated: 08.11.2025, 17:55:30
function romanToInt(s: string): number {
    const dict = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    const nums = s.split("").map((rom) => dict.get(rom)).reverse() as number[];
    return nums.reduce((sum, num, index) => {
        const nextNum = nums[index + 1] ?? 0
        return num > nextNum ? sum - nextNum : sum + nextNum;
    }, nums[0]);
};