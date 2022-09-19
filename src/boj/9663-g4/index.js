const path = require('path');
const fs = require('fs');
const input = fs
  .readFileSync(path.resolve(__dirname, '../9663-g4/1.txt'))
  .toString()
  .trim();

const solution = (n) => {
  const board = Array.from(Array(n), () => Array(n).fill(false));
  let answer = 0;

  function checker(column, row) {
    for (let i = 1; i < n; i++) {
      if (board[i][row]) {
        return false;
      }
      if (column - i >= 0 && row - i >= 0) {
        if (board[column - i][row - i]) {
          return false;
        }
      }
      if (column + i < n && row + i < n) {
        if (board[column + i][row + i]) {
          return false;
        }
      }
      if (column - i >= 0 && row + i < n) {
        if (board[column - i][row + i]) {
          return false;
        }
      }
      if (column + i < n && row - i >= 0) {
        if (board[column + i][row - i]) {
          return false;
        }
      }
    }
    return true;
  }

  const recursion = (column) => {
    if (column >= n - 1) {
      answer += 1;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (checker(column, i)) {
        board[column][i] = true;
        recursion(column + 1);
        board[column][i] = false;
      }
    }
  };

  recursion(0);
  return answer;
};

console.log(solution(Number(input)));

module.exports = { solution };
