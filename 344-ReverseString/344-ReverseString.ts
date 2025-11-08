// Last updated: 08.11.2025, 16:20:51
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let l = 0
  let r = s.length - 1
  while (l < r) {
      let temp = s[l]
      s[l] = s[r]
      s[r] = temp
      l++
      r--
  }
};