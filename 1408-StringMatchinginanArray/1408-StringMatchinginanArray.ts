// Last updated: 09.11.2025, 16:55:33
function stringMatching(words: string[]): string[] {
    const substrings = new Set<string>();
    for (let i = 0; i < words.length; i++) {
        let substring = words[i]

        if (words.some((word, index) => {
            if (index === i) {
                return false
            }
            return word.includes(substring)
        })) {
            substrings.add(substring);
        }
    }

    return [...substrings]
};