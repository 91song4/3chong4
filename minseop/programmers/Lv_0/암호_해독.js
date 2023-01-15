function solution(cipher, code) {
    // var answer = '';
    // for ( let i = code-1; i < cipher.length; i += code ) {
    //         answer += cipher[i]
    // }
    return cipher.split('').filter((v,i) =>(i+1) % code ===0 ).join('')
}


let asdf = solution("dfjardstddetckdaccccdegk"	,4);
console.log(asdf);
