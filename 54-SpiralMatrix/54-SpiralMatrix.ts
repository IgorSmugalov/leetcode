// Last updated: 08.11.2025, 16:21:13
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  const items = matrix[0].length * matrix.length;
  let columnStart: number = 0;
  let columnEnd: number = matrix[0].length - 1;
  let rowStart: number = 0;
  let rowEnd: number = matrix.length - 1;
  while (columnStart <= columnEnd && rowStart <= rowEnd) {
    for (let column = columnStart; column <= columnEnd; column++) {
      result.push(matrix[rowStart][column]);
    }
    for (let row = rowStart + 1; row <= rowEnd; row++) {
      result.push(matrix[row][columnEnd]);
    }
    for (let column = columnEnd - 1; column > columnStart; column--) {
      if (rowStart === rowEnd) break
      result.push(matrix[rowEnd][column]);
    }
    for (let row = rowEnd; row > rowStart; row--) {
      if (columnStart === columnEnd) break
      result.push(matrix[row][columnStart]);
    }
    rowEnd--;
    columnEnd--;
    rowStart++;
    columnStart++;
  }
  return result;
}