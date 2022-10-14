const arr1 = [4, 5, 7, 1, 2, 8, 9, 3, 6, 10];

const binarySearch = (target, sortedArr) => {
  const binaryRecursion = (start, end) => {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const midValue = sortedArr[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      return binaryRecursion(mid + 1, end);
    } else if (midValue > target) {
      return binaryRecursion(start, mid - 1);
    }
  };
  const start = 0;
  const end = sortedArr.length - 1;
  return binaryRecursion(start, end);
};
