def factorial(n):   # 5! = 5 x 4 x 3 x 2 x 1 = 120
    if n == 1:      # 탈출조건 : n = 1 일때
        return 1    # 1을 반환하고 종료

    return n * factorial(n - 1)     # 자기자신을 다시 호출함 (n - 1)

print(factorial(5))
