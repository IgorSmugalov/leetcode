// Last updated: 08.11.2025, 16:20:24
function checkStraightLine(coordinates: number[][]): boolean {
  const initX = coordinates[0][0];
  const initY = coordinates[0][1];
  const offsetX = coordinates[1][0] - initX;
  const offsetY = coordinates[1][1] - initY;
  return coordinates.every(
    ([X, Y]) => offsetY * (X - initX) === offsetX * (Y - initY)
  );
}