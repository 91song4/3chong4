function solution(my_string) {

    return my_string.replace(/['a','e','i','o','u']/g,'')
}

var asdf = solution("nice to meet you")
console.log(asdf)