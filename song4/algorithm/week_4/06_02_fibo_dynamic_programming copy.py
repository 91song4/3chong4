input = 100

# memo 라는 변수에 Fibo(1)과 Fibo(2) 값을 저장해놨습니다!
memo = {
    1: 1,
    2: 1,
}


def fibo_dynamic_programming(n, fibo_memo):
    if n in memo:
        return memo[n]

    length = len(fibo_memo)
    while length != n:
        fibo_memo[length+1] = \
            fibo_dynamic_programming(length, fibo_memo) +\
            fibo_dynamic_programming(length-1, fibo_memo)

        length = len(fibo_memo)

    return memo[n]


print(fibo_dynamic_programming(input, memo))
