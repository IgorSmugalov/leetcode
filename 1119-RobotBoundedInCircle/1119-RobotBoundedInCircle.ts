// Last updated: 08.11.2025, 16:20:28
type Direction = 0 | 90 | 180 | 270;
function isRobotBounded(instructions: string): boolean {
  let x = 0;
  let y = 0;
  let direction: Direction = 0;

  const switchDirection = (newDir: "L" | "R") => {
    if (newDir === "L") direction -= 90;
    if (newDir === "R") direction += 90;
    if (direction < 0) direction = 270;
    if (direction >= 360) direction = 0;
  };
  const move = (direction: 0 | 90 | 180 | 270) => {
    if (direction === 0) x++;
    if (direction === 180) x--;
    if (direction === 90) y++;
    if (direction === 270) y--;
  };

  const finishOrRepeat = (repeat: number = 1): boolean => {
    for (const instruction of instructions) {
      if (instruction === "G") move(direction);
      if (instruction === "L" || instruction === "R")
        switchDirection(instruction);
    }
    if (x === 0 && y === 0) return true;
    if (repeat > 4) return false;
    return finishOrRepeat(repeat + 1);
  };
  return finishOrRepeat(1);
}