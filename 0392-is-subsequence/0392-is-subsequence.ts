function isSubsequence(s: string, t: string): boolean {
  let sChar = 0;
  let tChar = 0;

  while (tChar < t.length && sChar < s.length) {
    if (s[sChar] === t[tChar]) sChar++;
    tChar++;
  }
  return sChar === s.length;
};