// Last updated: 08.11.2025, 18:36:57
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

    const nums = s.split("").map((roman) => dict.get(roman)).reverse() as number[];
    console.log(nums);
    let sum = 0;
    let prev = 0
    for (const num of nums) {
        if (num >= prev) {
            sum += num;
        } else {
            sum -= num;
        }
        prev = num;
    }

    return sum;
};