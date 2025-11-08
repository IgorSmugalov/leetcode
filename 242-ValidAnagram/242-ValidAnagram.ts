// Last updated: 09.11.2025, 00:25:50
function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false;
    }

    const hash: Record<string, number> = { }
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] ?? 0) + 1
        hash[t[i]] = (hash[t[i]] ?? 0) - 1
    }

    return Object.values(hash).every(value => value === 0)
};