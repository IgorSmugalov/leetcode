// Last updated: 09.11.2025, 14:05:50
function appendCharacters(s: string, t: string): number {
    let sIdx = 0;
    let tIdx = 0;

    while(sIdx < s.length && tIdx < t.length) {
        if (s[sIdx] === t[tIdx]) {
            tIdx++
        }
        sIdx++
    }

    return t.length - tIdx
};