{
  function sum(a: number, b = 100): number {
    return a + b;
  }

  const result1 = sum(10, undefined);   // 110
  // const result2 = sum(10, 20, 30);      // err, too many parameters
  const result3 = sum(10);              // 110
  const result4 = sum(10,30);           // 40

  console.log({result1, result3, result4});
}

module.exports = sum;
