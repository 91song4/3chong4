function calculateAvg(...priceList) {
  let sum = 0;
  priceList.forEach((val) => {
    sum += val;
  });
  console.log(`두 상품의 가격 총합은 ${sum}입니다.`);
  const avg = sum / priceList.length;
  return parseInt(avg);
}

console.log(`상품의 평균 값은 ${calculateAvg(1000, 2000, 3000)}입니다.`);
