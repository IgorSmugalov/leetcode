function dailyTemperatures(temperatures: number[]): number[] {
  const stack: { temp: number; day: number }[] = [];
  const result: number[] = [];
  for (let day = temperatures.length - 1; day >= 0; day--) {
    const temp = temperatures[day];
    while (stack.length && temp >= stack[stack.length - 1].temp) {
      stack.pop();
    }
    if (!stack.length) {
      result[day] = 0;
    } else {
      result[day] = stack[stack.length - 1].day - day;
    }
    stack.push({ temp, day });
  }
  return result;
}