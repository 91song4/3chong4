input = 20


def fibo_recursion(n):
    if n < 3:
        return 1
    # 구현해보세요!
    return fibo_recursion(n-1)+fibo_recursion(n-2)


print(fibo_recursion(input))  # 6765
