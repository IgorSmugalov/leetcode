// Last updated: 08.11.2025, 16:21:19
function isValid(s: string) {
  const stack: string[] = [];
  const brackets: Record<string, string> = { "{": "}", "(": ")", "[": "]" };
  for (let i = 0; i < s.length; i++) {
    const bracket: string = s[i];
    if (bracket in brackets) {
      stack.push(bracket);
      continue;
    } else {
      const delited = stack.pop();
      if (!delited || brackets[delited] !== bracket) return false;
    }
  }
  return !stack.length;
}