// Last updated: 08.11.2025, 16:20:59
function isIsomorphic(s: string, t: string): boolean {
  const map: Map<string, string> = new Map();
  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i];
    const tLetter = t[i];
    if (!map.has(sLetter)) {
      map.set(sLetter, tLetter);
      continue;
    } else {
      if (map.get(sLetter) !== tLetter) return false;
    }
  }
  return new Set(map.values()).size === map.size
}