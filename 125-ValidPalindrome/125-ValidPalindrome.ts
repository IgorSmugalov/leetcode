// Last updated: 11.11.2025, 22:57:29
function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isLetter(s[left])) {
            left++;
        }
        while (left < right && !isLetter(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isLetter(char: string) {
    return /^[\p{L}\p{N}]$/u.test(char);
}