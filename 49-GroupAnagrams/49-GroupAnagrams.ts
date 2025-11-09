// Last updated: 09.11.2025, 17:06:17
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()

    for (const str of strs) {
        const sorted = str.split('').sort().join('')
        if (map.has(sorted)) {
            map.get(sorted)!.push(str)
        } else {
            map.set(sorted, [str])
        }
    }

    return Array.from(map.values())
};