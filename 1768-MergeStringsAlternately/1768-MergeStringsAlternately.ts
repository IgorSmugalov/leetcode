// Last updated: 12.11.2025, 00:51:47
function mergeAlternately(word1: string, word2: string): string {
    let i = 0
    const max = Math.min(word1.length, word2.length)
    const res: string[] = []
    let suffix = ''

    if (word1.length !== word2.length) {
        suffix = word1.length > word2.length
            ? word1.slice(word2.length)
            : word2.slice(word1.length)
    }

    while(i < max) {
        res.push(word1[i], word2[i])
        i++
    }

    return res.join('') + suffix

};