// Last updated: 09.11.2025, 14:17:12
function lengthOfLastWord(s: string): number {
    const arr = s.trim().split(' ')
    return arr[arr.length - 1].length
};