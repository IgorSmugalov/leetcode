// Last updated: 08.11.2025, 23:56:37
function scoreOfString(s: string): number {
    const scores = s.split("").map((char) => char.charCodeAt(0))

    let sum = 0

    for (let i = 0; i < scores.length - 1; i++) {
        const current = scores[i]
        const next = scores[i + 1]

        sum += Math.abs(current - next)
    }

    return sum
};