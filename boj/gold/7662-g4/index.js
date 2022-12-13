const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../7662-g4/1.txt'))
  .toString()
  .trim()
  .split('\n');

const lowerBound = (target, arr) => {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const solution = (commands) => {
  const priorityArr = [];
  commands.forEach((command) => {
    const [order, value] = command.split(' ');
    const nValue = Number(value);
    if (order === 'I') {
      const insertIdx = lowerBound(nValue, priorityArr);
      priorityArr.splice(insertIdx, 0, value);
    }
    if (order === 'D') {
      if (nValue === -1) {
        priorityArr.shift();
      }
      if (nValue === 1) {
        priorityArr.pop();
      }
    }
  });
  if (priorityArr.length === 0) {
    return 'EMPTY';
  }
  const max = priorityArr[priorityArr.length - 1];
  const min = priorityArr[0];
  return `${max} ${min}`;
};

const beforeSolution = (rawInputs) => {
  const [t, ...arr] = rawInputs;
  let T = Number(t);
  let inputs = arr;
  let answer = [];
  while (T > 0) {
    const [n, ...commands] = inputs;
    const N = Number(n);
    const res = solution(commands.slice(0, N));
    answer.push(res);
    T--;
    inputs = commands.slice(N);
  }
  return answer.join('\n');
};

console.log(beforeSolution(rawInputs));

module.exports = { solution };
