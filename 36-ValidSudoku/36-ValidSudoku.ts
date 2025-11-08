// Last updated: 08.11.2025, 16:21:15
function isValidSudoku(board: string[][]): boolean {
  const boxHash: Map<string, Set<string>> = new Map();
  for (let x = 0; x < 9; x++) {
    let row = new Set<string>();
    let column = new Set<string>();

    for (let y = 0; y < 9; y++) {
      const byRow = board[x][y];
      const byColumn = board[y][x];
      const boxName = `${Math.floor(x / 3)}:${Math.floor(y / 3)}`;
      if (byRow !== ".") {
        if (row.has(byRow)) return false;
        row.add(byRow);
        if (boxHash.get(boxName)?.has(byRow)) return false;
        boxHash.set(
          boxName,
          boxHash.get(boxName)?.add(byRow) || new Set(byRow)
        );
      }
      if (byColumn !== ".") {
        if (column.has(byColumn)) return false;
        column.add(byColumn);
      }
    }
  }
  return true;
}