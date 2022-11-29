const priceList = [
  1000, 2000, 5000, 7000, 10000, 9000, 3000, 15000, 20000, 17000,
];

let sum = 0;
for (const price of priceList) {
  sum += price;
}
const avg = sum / priceList.length;

console.log(`All price: ${sum}, avg: ${avg}`);
