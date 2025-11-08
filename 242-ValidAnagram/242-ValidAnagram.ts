// Last updated: 09.11.2025, 00:14:28
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    const sMap = parseStr(s)
    const tMap = parseStr(t)

    for(const [ char, count ] of sMap) {
        if (tMap.get(char) !== count) {
            return false;
        }
    }

    return true
};

function parseStr(string: string) {
    const map = new Map<string, number>()

    for(const s of string) {
        map.set(s, (map.get(s) ?? 0) + 1)
    }

    return map
}