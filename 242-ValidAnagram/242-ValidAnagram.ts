// Last updated: 08.11.2025, 16:20:53
function isAnagram(s: string, t: string): boolean {
  const letterHash: Map<string, number> = new Map();
  if (s.length !== t.length) return false;
  for (let index = 0; index < s.length; index++) {
    const sLetter = s[index];
    const tLetter = t[index];
    if (sLetter === tLetter) continue;
    if (letterHash.has(sLetter))
      letterHash.set(sLetter, letterHash.get(sLetter)! + 1);
    else letterHash.set(sLetter, 1);
    if (letterHash.has(tLetter))
      letterHash.set(tLetter, letterHash.get(tLetter)! - 1);
    else letterHash.set(tLetter, -1);
  }
  return [...letterHash.values()].every((letter) => letter === 0);
}