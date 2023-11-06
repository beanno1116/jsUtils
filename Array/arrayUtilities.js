export const uniqueArray = (_ele, _idx, _arr) => {
  const flatArrCopy = _arr.map(ele => JSON.stringify(ele));
  const setFromFlatArrCopy = new Set(flatArrCopy);
  const arrayFromSet = Array.from(setFromFlatArrCopy).map(ele => JSON.parse(ele));
  return arrayFromSet;
}
