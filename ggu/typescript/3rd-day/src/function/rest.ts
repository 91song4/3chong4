function sum1(a: number, ...nums: number[]): number {
    let totalOfNums = 0;
  
    for (let key in nums) {
      totalOfNums += nums[key];
    }
  
    return a + totalOfNums;
  }
  
  const result = sum1(10, 20, 30, 40); // 100
  console.log(result);