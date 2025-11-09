// Last updated: 09.11.2025, 13:47:34
function isSubsequence(s: string, t: string): boolean {
    let sIdx = 0;
    let tIdx = 0;

    while (sIdx < s.length && tIdx < t.length) {
        if (s[sIdx] === t[tIdx]) {
            sIdx++
        }
        tIdx++
    }

    return s.length === sIdx
};