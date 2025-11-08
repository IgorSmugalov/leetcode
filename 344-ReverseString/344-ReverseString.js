// Last updated: 08.11.2025, 16:20:54
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let iteration = 1; iteration <= s.length / 2; iteration++) {
    const a = s[iteration - 1];
    const b = s[s.length - iteration];
    if (a === b) continue;
    s[iteration - 1] = b;
    s[s.length - iteration] = a;
  }
  return s;
};