function solution(my_string, letter) {  // abcdef
    // f = "a"
    // console.log(my_string.match(/f/))

    let answer = '';
    let replace_num = my_string

    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === letter) {
            answer = my_string[i]
            replace_num = replace_num.replace(answer, '')
        }
    }
    return replace_num
}

// var asdf = solution("abcdef", "f")
var asdf = solution("BCBdbe", "B")
console.log(asdf)
