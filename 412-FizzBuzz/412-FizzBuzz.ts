// Last updated: 08.11.2025, 16:20:45
function fizzBuzz(n: number): string[] {
  return new Array<string>(n).fill(".").map((_, idx) => {
    const num = idx + 1;
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num.toString();
  })
}