// Last updated: 08.11.2025, 16:20:39
function calPoints(operations: string[]) {
  const record: number[] = [];
  for (let i = 0; i < operations.length; i++) {
    const element = operations[i];
    if (element === "C") {
      record.pop();
      continue;
    }
    if (element === "D") {
      record.push(record[record.length - 1] * 2);
      continue;
    }
    if (element === "+") {
      record.push(record[record.length - 1] + record[record.length - 2]);
      continue;
    }
    record.push(Number(element));
  }
  return record.reduce((acc, num) => acc + num, 0);
}