// Last updated: 08.11.2025, 16:20:14
function mergeAlternately(word1: string, word2: string): string {
  let a = 0;
  let b = 0;
  let merged = '';
  while (a < word1.length || b < word2.length) {
    if (a === b) merged += word1[a++] ?? '';
    else merged += word2[b++] ?? '';
  }
  return merged;
}