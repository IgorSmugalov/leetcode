// Last updated: 08.11.2025, 16:20:17
function countOdds(low: number, high: number) {
  const isLowOdd = low % 2 !== 0;
  const isHightOdd = high % 2 !== 0;
  const difIsOdd = isLowOdd && isHightOdd;
  if (difIsOdd) return (high - low + 1) / 2;
  return (high - low) / 2;
}