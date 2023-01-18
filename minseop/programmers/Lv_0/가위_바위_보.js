function solution(rsp) {
  var answer = "";
  let num = rsp.split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0") answer += "5";
    if (num[i] === "2") answer += "0";
    if (num[i] === "5") answer += "2";
  }
  return answer;
}


let asdf = solution("205");
console.log(asdf);