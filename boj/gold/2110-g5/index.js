const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2110-g5/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  const [inputs, ...arr] = rawInputs;
  const [n, c] = inputs.split(' ').map((v) => +v);
  const asc = arr.map((v) => +v).sort((a, b) => a - b);
  let answer = -1;

  const calc = (diff) => {
    let count = 0;
    let l = 0;
    let r = 0;
    while (l < n) {
      if (asc[r] - asc[l] < diff) {
        r++;
      } else {
        count++;
        l = r;
      }
    }
    return count;
  };

  let s = 1;
  let e = asc[n - 1];
  while (s < e) {
    const m = Math.floor((s + e) / 2);
    const k = calc(m);
    if (k < c) {
      e = m;
    } else {
      answer = m;
      s = m + 1;
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
