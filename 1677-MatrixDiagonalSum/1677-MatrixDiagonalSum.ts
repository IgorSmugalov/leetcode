// Last updated: 08.11.2025, 16:20:16
function diagonalSum(mat: number[][]): number {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    const row = i;
    const mainY = i;
    const secY = mat.length - 1 - i;
    if (mainY !== secY) sum += mat[row][mainY] + mat[row][secY];
    else sum += mat[row][mainY];
  }
  return sum;
}