// Last updated: 08.11.2025, 16:22:28
function isPalindrome(x: number): boolean {
    const str = x.toString()

    let leftIdx = 0
    let rightIdx = str.length - 1

    while (leftIdx <= rightIdx) {
        if (str[leftIdx] !== str[rightIdx]) {
            return false
        }
        leftIdx ++
        rightIdx --
    }

    return true
};