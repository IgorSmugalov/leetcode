// Last updated: 08.11.2025, 16:21:10
function setZeroes(matrix: number[][]): void {
  const zeroArray = Array(matrix[0].length).fill(0);
  const nonZeroedRows: Set<number> = new Set();
  const columnsForZeroing: Set<number> = new Set();
  for (let row = 0; row <= matrix.length - 1; row++) {
    let nullished = false;
    matrix[row].forEach((el, i) => {
      if (el === 0) {
        matrix[row] = [...zeroArray];
        nullished = true;
        if (!columnsForZeroing.has(i)) {
          columnsForZeroing.add(i);
        }
      }
      
    });
    if (!nullished) nonZeroedRows.add(row);
  }

  for (const row of nonZeroedRows) {
    for (const col of columnsForZeroing) {
      matrix[row][col] = 0;
    }
  }
}