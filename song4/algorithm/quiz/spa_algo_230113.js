// 소수 찾기

function solution(n) {

  const nums = []
  for (let i = 0; i <= n; ++i) {
    nums.push(i);
  }

  for (let i = 2; i <= n; ++i) {
    if (nums[i] !== 0) {
      for (let j = i * 2; j <= n; j += i) {
        nums[j] = 0;
      }
    }
  }
  console.log(`test ${n}`);
  return nums.filter(num => num > 1).length;
}

const test = 1000
for (let i = test; i < test + 1; ++i)
  console.log(solution(i));