// Last updated: 08.11.2025, 16:21:06
function generate(numRows: number): number[][] {
  const result: number[][] = [];

  while (result.length < numRows) {
    const prewRow = result[result.length - 1];
    if (!prewRow) {
      result.push([1]);
      continue;
    }
    result.push([]);
    for (let i = 0; i <= prewRow.length; i++) {
      if (i === 0 || i === prewRow.length) result[result.length - 1][i] = 1;
      else result[result.length - 1][i] = prewRow[i - 1] + prewRow[i];
    }
  }

  return result;
}