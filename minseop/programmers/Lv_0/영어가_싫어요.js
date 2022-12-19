function solution(numbers) {
    // const find = {zero:0,one:1,two:2,three:3,four:4,five:5,six:6, seven:7,eight:8, nine:9}
    // console.log(RegExp)
    let find = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    find.forEach((item,index) => {
        numbers = numbers.replaceAll(item, index);

    })
    // for (let i = 0; i <numbers.length; i++) {
    //     console.log(numbers.split(find[i]).join(i))
    //     console.log(i)
    // }

    return Number(numbers)
}

let asdf = solution("onetwothreefourfivesixseveneightnine")
console.log(asdf)