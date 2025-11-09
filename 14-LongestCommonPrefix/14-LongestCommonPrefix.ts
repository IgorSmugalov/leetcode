// Last updated: 09.11.2025, 15:03:28
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) {
        return strs[0]
    }

    if (strs.some(str => str === "")) {
        return ""
    }

    let prefix = ''
    let i = 0

    while (strs.every(str => Boolean(str[i]) && str[i] === strs[0][i])) {
        prefix += strs[0][i]
        i++
    }

    return prefix
};