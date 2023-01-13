// 최대공약수와 최소공배수


function solution(n, m) {
  // 공약수는 제한적, 공배수는 무한하다.

  const commonFactor = new Set();
  let maxCommonFactor;

  // n의 약수를 구한다
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0)
      commonFactor.add(i);
  }

  // m의 약수를 구한다.
  // n, m의 최대 공약수를 구한다
  for (let i = 1; i <= m; ++i) {
    if (m % i === 0) {
      if (commonFactor.has(i)) {
        maxCommonFactor = i;
      }
    }
  }

  let minCommonMultiple;
  let tempBigNum, tempSmallNum;
  // 공배수는 무한하기에 바로바로 비교하며 진행한다.
  if (n < m) {
    tempSmallNum = n;
    tempBigNum = m;
  } else {
    tempSmallNum = m;
    tempBigNum = n;
  }

  for (let i = 1; ; ++i) {  // 10
    for (let j = i; tempSmallNum * j <= tempBigNum * i; ++j) { // 8
      if (tempSmallNum * j === tempBigNum * i) {
        minCommonMultiple = tempSmallNum * j;       
        return [maxCommonFactor, minCommonMultiple];
      }
    }
  }
}

console.log(8%10);