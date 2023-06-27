type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];
  const sub = (el: number | MultiDimensionalArray, dep: number) => {
    if (Array.isArray(el) && dep < n) {
      el.forEach((el) => sub(el, dep + 1));
    } else {
      result.push(el);
    }
  };
  arr.forEach((el) => sub(el, 0));
  return result;
};