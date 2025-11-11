// Last updated: 11.11.2025, 22:52:42
function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        const leftChar = s[left].toLowerCase()
        const rightChar = s[right].toLowerCase()

        if (!isLetter(leftChar)) {
            left++
            continue
        }

        if (!isLetter(rightChar)) {
            right--
            continue
        }
        
        left++
        right--
        
        if (leftChar !== rightChar) {
            return false
        }
        
    }

    return true
};

function isLetter(char) {
    return /^[a-zA-Zа-я0-9]$/.test(char);
}