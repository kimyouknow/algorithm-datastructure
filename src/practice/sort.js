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

const insertionSort = (arr) => {
  const sortedArr = [...arr];
  const length = sortedArr.length;
  for (let i = 1; i < length; i++) {
    let temp = sortedArr[i];
    let idx = i - 1;
    while (idx >= 0 && sortedArr[idx] > temp) {
      sortedArr[idx + 1] = sortedArr[idx];
      idx--;
    }
    sortedArr[idx + 1] = temp;
  }
  return sortedArr;
};

const merge = (left, right) => {
  const mergedArr = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (left.length > leftIdx && right.length > rightIdx) {
    if (left[leftIdx] < right[rightIdx]) {
      mergedArr.push(left[leftIdx]);
      leftIdx++;
    } else {
      mergedArr.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return mergedArr.concat(left.slice(leftIdx), right.slice(rightIdx));
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort(arr1));

module.exports = {
  selectionSortWithMax,
  selectionSortWithMin,
  bubbleSort,
};
