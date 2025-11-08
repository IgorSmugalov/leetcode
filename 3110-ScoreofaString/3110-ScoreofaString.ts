// Last updated: 08.11.2025, 23:58:35
function scoreOfString(s: string): number {
    let sum = 0

    for (let i = 0; i < s.length - 1; i++) {
        const current = s.charCodeAt(i)
        const next = s.charCodeAt(i + 1)

        sum += Math.abs(current - next)
    }

    return sum
};