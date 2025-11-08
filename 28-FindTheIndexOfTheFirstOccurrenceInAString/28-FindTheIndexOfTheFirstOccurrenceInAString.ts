// Last updated: 08.11.2025, 16:21:16
function strStr(haystack: string, needle: string): number {
let matchFrom = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      matchFrom = i;
      break;
    }
  }
  return matchFrom;
}