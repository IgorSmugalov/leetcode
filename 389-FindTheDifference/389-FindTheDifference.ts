// Last updated: 08.11.2025, 16:20:48
function findTheDifference(s: string, t: string): string {
  const hash: Record<string, number> = {};
  const length = t.length;
  for (let i = 0; i < length; i++) {
    const letterS = s[i];
    const letterT = t[i];
    // if (letterS === letterT) continue;
    if (hash[letterS]) {
      hash[letterS]++;
    } else {
      hash[letterS] = 1;
    }
    if (hash[letterT]) {
      hash[letterT]--;
    } else {
      hash[letterT] = -1;
    }
  }
  console.log(hash);
  return Object.keys(hash).find((key) => hash[key] < 0)!;
}