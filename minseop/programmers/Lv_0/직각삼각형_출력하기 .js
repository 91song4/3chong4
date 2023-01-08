
let input = [3];
  const num = Number(input[0])
  let star = ''
  for ( let i = 0; i < num; i++ ) {
    for ( let j = 0; j <= i; j++ ) {
      star += '*'
    }
    star += '\n'
  }
  console.log(star);


// let asdf = solution(7, 15);
// console.log(asdf);

