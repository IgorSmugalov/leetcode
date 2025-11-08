// Last updated: 08.11.2025, 16:20:34
type Bill = 5 | 10 | 20;

function lemonadeChange(bills: Bill[]): boolean {
  const billsCount: Record<Bill, number> = {
    5: 0,
    10: 0,
    20: 0,
  };

  if (bills[0] !== 5 || bills[1] === 20 || bills[2] === 20) return false;
  //
  for (let operation = 0; operation < bills.length; operation++) {
    const bill = bills[operation];
    billsCount[bill]++;
    if (bill === 5) continue;
    if (bill === 10 && billsCount[5] >= 1) {
      billsCount[5]--;
      continue;
    }
    if (bill === 20) {
      if (billsCount[5] >= 1 && billsCount[10] >= 1) {
        billsCount[5]--;
        billsCount[10]--;
        continue;
      }
      if (billsCount[5] >= 3) {
        billsCount[5] -= 3;
        continue;
      }
    }
    return false;
  }
  return true;
}
