// 부족한 금액 계산하기

function solution(price, money, count) {
  let usageAmount = 0;
  for (let i = 1; i <= count; ++i)
    usageAmount += (price * i);

  if (usageAmount < money)
    return 0;
  return usageAmount - money;
}