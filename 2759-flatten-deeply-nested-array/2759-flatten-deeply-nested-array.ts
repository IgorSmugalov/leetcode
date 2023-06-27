type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];
  const subFlat = (el: number | MultiDimensionalArray, depth: number) => {
    if (Array.isArray(el) && depth < n)
      el.forEach((el) => subFlat(el, depth + 1));
    else result.push(el);
  };
  arr.forEach((el) => subFlat(el, 0));
  return result;
};