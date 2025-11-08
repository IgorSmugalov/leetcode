// Last updated: 08.11.2025, 16:21:06
const isValidSymbol = (symbol: string): boolean =>
  /^[a-zA-Z0-9]+$/.test(symbol);

function isPalindrome(s: string): boolean {
  let front = 0;
  let rear = s.length - 1;
  while (front < rear) {
    const frontSymbol = s[front];
    const rearSymbol = s[rear];
    if (!isValidSymbol(frontSymbol)) {
      front++;
      continue;
    }
    if (!isValidSymbol(rearSymbol)) {
      rear--;
      continue;
    }
    if (frontSymbol.toLowerCase() !== rearSymbol.toLowerCase()) return false;
    front++;
    rear--;
  }
  return true;
}
