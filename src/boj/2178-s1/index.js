const path = require('path');
const fs = require('fs');
const [input, ...arr] = fs
  .readFileSync(path.resolve(__dirname, '../2178-s1/1.txt'))
  .toString()
  .trim()
  .split('\n');

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const solution = (input, arr) => {
  const [N, M] = input.split(' ').map((v) => +v);

  const visited = Array(N)
    .fill(0)
    .map((ele) => Array(M).fill(false));

  const map = arr.map((ele) => ele.split('').map((v) => +v));

  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = true;
  while (queue.length > 0) {
    const [curRow, curCol] = queue.shift();

    for (const dr of direction) {
      const nextRow = curRow + dr[0];
      const nextCol = curCol + dr[1];

      if (nextRow < 0 || nextCol < 0 || nextRow >= N || nextCol >= M) continue;
      if (visited[nextRow][nextCol]) continue;

      if (map[nextRow][nextCol] === 1) {
        map[nextRow][nextCol] = map[curRow][curCol] + 1;
        queue.push([nextRow, nextCol]);
        visited[nextRow][nextCol] = true;
      }
    }
  }

  return map[N - 1][M - 1];
};

console.log(solution(input, arr));

module.exports = { solution };
