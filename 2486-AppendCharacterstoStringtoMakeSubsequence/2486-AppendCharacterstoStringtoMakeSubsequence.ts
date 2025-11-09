// Last updated: 09.11.2025, 14:09:24
function appendCharacters(s: string, t: string): number {
    let finded = 0

    for(let i = 0; i < s.length; i++) {
        if (s[i] === t[finded]) {
            finded++
        }
    }

    return t.length - finded
};