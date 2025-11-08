// Last updated: 08.11.2025, 17:40:10
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

    const numArr = s.split('').map(char => Number(dict.get(char))).reverse();

    return numArr.reduce((acc, num, idx) => {
        const nextNum = numArr[idx + 1] ?? 0
        return num > nextNum ? acc - nextNum : acc + nextNum
    }, numArr[0])
};