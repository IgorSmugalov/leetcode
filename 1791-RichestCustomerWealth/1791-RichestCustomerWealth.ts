// Last updated: 08.11.2025, 16:20:15
function maximumWealth(accounts: number[][]): number {
  let max = 0;
  accounts.forEach((account) => {
    const sum = account.reduce((acc, count) => acc + count);
    if(max < sum) max = sum
  });
  return max;
}