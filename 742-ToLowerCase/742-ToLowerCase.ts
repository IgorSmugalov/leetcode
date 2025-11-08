// Last updated: 08.11.2025, 16:20:35
function toLowerCase(str: string): string {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code > 64 && code < 91) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}
