// Last updated: 12.11.2025, 01:22:24
function vowelStrings(words: string[], queries: number[][]): number[] {
    const sums: number[] = []

    for(let str of words) {
        let lastSum = sums[sums.length - 1] ?? 0

        if (isAllowedStr(str)) {
            lastSum++
        }

        sums.push(lastSum)

    }

    const results: number[] = []

    for(let [start, finish] of queries) {
        const leftSum = sums[start - 1] ?? 0
        const rightSum = sums[finish] ?? sums[sums.length - 1]

        results.push(rightSum - leftSum)
    }

    return results
};

const vowels = ['a', 'e', 'i', 'o', 'u']

function isAllowedStr(str: string): boolean {
    return vowels.includes(str[0]) && vowels.includes(str[str.length - 1])
}