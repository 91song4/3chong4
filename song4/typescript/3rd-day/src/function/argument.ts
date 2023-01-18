function argument_sum(a: number, b: number): number {
  return a + b;
}

argument_sum(10, 20)        // a + b
// argument_sum(10, 20, 30)    // err, too many parameters
// argument_sum(10)            // err, too few parameters


function argument_sum2(a: number, b?: number): number {
  if (b === undefined)
    return a;

  return a + b;
}

argument_sum2(10, 20)        // a + b
// argument_sum2(10, 20, 30)    // err, too many parameters
argument_sum2(10)            // a | a + b

export { argument_sum, argument_sum2 };