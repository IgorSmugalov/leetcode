// Last updated: 09.11.2025, 13:42:27
function isSubsequence(s: string, t: string): boolean {
    const sLength = s.length;
    let subsequenceLength = 0;
    let i = 0
    while (sLength !== subsequenceLength && i < t.length) {
        if (s[subsequenceLength] === t[i]) {
            subsequenceLength++
        }
        i++
    }

    return sLength === subsequenceLength
};