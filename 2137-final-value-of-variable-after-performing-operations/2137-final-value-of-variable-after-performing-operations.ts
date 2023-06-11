function finalValueAfterOperations(operations: string[]): number {
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    if (operation === "++X" || operation === "X++") sum++;
    else sum--;
  }
  return sum;
}

