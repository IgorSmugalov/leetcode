// Last updated: 08.11.2025, 16:21:11
function plusOne(digits: number[]): number[] {
    return Array.from((BigInt(digits.join("")) + BigInt(1)).toString(), Number)
    };