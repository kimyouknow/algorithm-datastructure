const arr1 = [4, 5, 7, 1, 2, 8, 9, 3, 6, 10];

// 가장 큰 수 탐색해서 맨 뒤로 보내기
const selectionSortWithMax = (arr) => {
  const sortedArr = [...arr];
  const length = arr.length - 1;
  let idx = 0;
  for (let i = length; i >= 0; i--) {
    let max = 0;
    for (let j = 0; j <= i; j++) {
      if (sortedArr[j] > max) {
        idx = j;
        max = sortedArr[j];
      }
    }
    const temp = sortedArr[i];
    sortedArr[i] = max;
    sortedArr[idx] = temp;
  }
  return sortedArr;
};

// 가장 작 수 탐색해서 맨 앞으로 보내기
const selectionSortWithMin = (arr) => {
  const sortedArr = [...arr];
  const length = arr.length - 1;
  let idx = 0;
  for (let i = 0; i < length; i++) {
    let min = 999;
    for (let j = i; j < length; j++) {
      if (sortedArr[j] < min) {
        idx = j;
        min = sortedArr[j];
      }
    }
    const temp = sortedArr[i];
    sortedArr[i] = min;
    sortedArr[idx] = temp;
  }
  return sortedArr;
};

const bubbleSort = (arr) => {
  const sortedArr = [...arr];
  const length = sortedArr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      const current = sortedArr[j];
      const next = sortedArr[j + 1];
      if (current > next) {
        sortedArr[j + 1] = current;
        sortedArr[j] = next;
      }
    }
  }
  return sortedArr;
};

module.exports = {
  selectionSortWithMax,
  selectionSortWithMin,
  bubbleSort,
};
