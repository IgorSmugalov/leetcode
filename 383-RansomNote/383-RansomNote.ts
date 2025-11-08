// Last updated: 08.11.2025, 16:20:49
function canConstruct(ransomNote: string, magazine: string) {
  if(ransomNote.length > magazine.length) return false;
  const hash: Record<string, number> = {};
  for (let char of magazine) {
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  for (let char of ransomNote) {
    if (hash[char] && hash[char] > 0) {
      hash[char]--;
    } else {
      return false;
    }
  }
  return true;
}
