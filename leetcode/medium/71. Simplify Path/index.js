/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const length = path.length;
  const stack = [];
  let idx = 0;

  while (idx < length) {
    let cur = path[idx];
    idx++;
    if (cur === '/') {
      // "/"를 쌓기
      while (idx < length && path[idx] === '/') {
        cur += path[idx];
        idx++;
      }
    } else {
      // "/"의 다른 단어를 쌓기
      while (idx < length && path[idx] !== '/') {
        cur += path[idx];
        idx++;
      }
    }

    // 다 쌓은 결과를 토대로
    if (cur === '..') {
      if (stack.length > 0) stack.pop();
    } else if (cur[0] !== '/' && cur !== '.') {
      stack.push(cur);
    }
  }
  const answer = stack.join('/');
  return '/' + answer;
};
