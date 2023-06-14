const checkAfterDelete = (s: string, left: number, right: number): boolean => {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        checkAfterDelete(s, left + 1, right) ||
        checkAfterDelete(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
}