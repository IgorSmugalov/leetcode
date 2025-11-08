// Last updated: 08.11.2025, 16:20:19
function average(salary: number[]): number {
  const max = Math.max(...salary);
  const min = Math.min(...salary);
  return (
    (salary.reduce((acc, el) => acc + el) - max - min) / (salary.length - 2)
  );
}