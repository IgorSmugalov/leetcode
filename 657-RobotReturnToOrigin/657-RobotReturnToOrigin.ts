// Last updated: 08.11.2025, 16:20:41
function judgeCircle(moves: string): boolean {
  let x = 0;
  let y = 0;
  let movesArr = moves.split("");
  movesArr.forEach((move) => {
    if (move === "U") return y++;
    if (move === "D") return y--;
    if (move === "L") return x--;
    if (move === "R") return x++;
  });
  return x === 0 && y === 0
}