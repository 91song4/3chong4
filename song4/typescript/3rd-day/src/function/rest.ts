{
  function sum(num: number, ...nums: number[] | Array<number>): number {
    let totalOfNums = 0;

    for (let key in nums) {
      totalOfNums += nums[key];
    }

    return num + totalOfNums;
  }

  const result = sum(10, 20, 30, 40);   // 100
  console.log({ result });
}

module.exports = sum;