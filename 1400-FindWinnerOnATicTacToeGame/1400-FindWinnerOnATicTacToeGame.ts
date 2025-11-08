// Last updated: 08.11.2025, 16:20:22
function tictactoe(moves: number[][]): string {
  const grid: Record<string, string> = {};
  for (let move = 0; move < moves.length; move++) {
    const [x, y] = moves[move];
    const player = move % 2 === 0 ? "A" : "B";
    if (!grid["diag1"]) grid["diag1"] = "";
    if (!grid["diag2"]) grid["diag2"] = "";
    if (!grid[`col${x}`]) grid[`col${x}`] = "";
    if (!grid[`row${y}`]) grid[`row${y}`] = "";
    grid[`col${x}`] += player;
    grid[`row${y}`] += player;
    if (x === y) grid["diag1"] += player;
    if (x + y === 2) grid["diag2"] += player;
    if (move + 1 > 4 && Object.values(grid).includes(player.repeat(3)))
      return player;
  }
  return moves.length === 9 ? "Draw" : "Pending";
};