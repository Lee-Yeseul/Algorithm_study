// https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (num, counter) => {
    if (counter >= answer) return;
    if (num === 0) {
      answer = counter;
      return;
    }

    let res = num % 10;

    dfs((num - res) / 10, counter + res);
    dfs((num - res) / 10 + 1, counter + 10 - res);
  };

  dfs(storey, 0);
  return answer;
}
