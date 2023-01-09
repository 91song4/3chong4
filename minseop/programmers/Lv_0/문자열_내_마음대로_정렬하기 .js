function solution(strings, n) {

    strings.sort((a,b) => {
        if (a[n] > b[n]) {
            return 1
        }
        // 12344       12345
        if (a[n] === b[n]) {
            if ( a > b ) {
                return 1
            }
                return -1
        }
        if (a[n] < b[n]) {
            return -1
        }
    })

    return strings
}
var asdf = solution(["sun", "bed", "car"],1)
// var asdf = solution(["abce", "abcd", "cdx"],2)
console.log(asdf)


// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];
//
// // value 기준으로 정렬
// items.sort(function (a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });
//
// console.log(items)