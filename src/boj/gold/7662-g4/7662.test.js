const { solution } = require('./index');

const parser = (inputs) => inputs.split('\n');

describe('7662-g4 tester', () => {
  it('1', () => {
    const inputs = parser('I 16\nI -5643\nD -1\nD 1\nD 1\nI 123\nD -1');
    expect(solution(inputs)).toBe('EMPTY');
  });
  it('2', () => {
    const inputs = parser(
      'I -45\nI 653\nD 1\nI -642\nI 45\nI 97\nD 1\nD -1\nI 333'
    );
    expect(solution(inputs)).toBe('333 -45');
  });
  it('3', () => {
    const inputs = parser('I 10\nI 10\nD 1\nI 10\nI 10\nD 1\nD -1\n');
    expect(solution(inputs)).toBe('10 10');
  });
  it('4', () => {
    const inputs = parser('I 10\nD 1\nI 10\nI 10\nD 1\nD -1\n');
    expect(solution(inputs)).toBe('EMPTY');
  });
  it('5', () => {
    const inputs = parser('I 10\nD 1\nD 1\nD -1\nI 3\nI 10\n');
    expect(solution(inputs)).toBe('10 3');
  });
});
