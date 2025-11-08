// Last updated: 08.11.2025, 16:20:46
function repeatedSubstringPattern(string: string): boolean {
  for (let index = 1; index <= string.length / 2; index++) {
    const substring = string.substring(0, index);
    const partials = string.length / substring.length;
    if (substring.repeat(partials) === string) {
      return true;
    }
  }
  return false;
}