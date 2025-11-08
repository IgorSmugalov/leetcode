// Last updated: 08.11.2025, 15:52:36
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