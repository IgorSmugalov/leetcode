// Last updated: 08.11.2025, 16:20:38
interface ITemperature {
  temp: number;
  day: number;
}
function dailyTemperatures(temperatures: number[]): number[] {
  const stack: ITemperature[] = [];
  const result: number[] = new Array(temperatures.length);
  for (let day = temperatures.length - 1; day >= 0; day--) {
    const temp = temperatures[day];
    while (stack.length && temp >= stack[stack.length - 1].temp) stack.pop();
    result[day] = stack.length ? stack[stack.length - 1].day - day : 0;
    stack.push({ temp, day });
  }
  return result;
}