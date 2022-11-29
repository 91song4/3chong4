# input 값 만큼 배열을 만들고
# 2는 소수니까 뺀다. 3 5 7 뺀다.
# 2 3 5 7 배수를 모두 지운다
# 반복한다.

input = 120


def ggyu(number):
    default_sosu = [2, 3, 5, 7]  # 기본 소수 # pop
    full_num = list(range(2, number + 1))  # 2~ 120 배열 완성
    asdf = [0]*input

        # 2배수 = 2 4 6 8 10 // 3배수 = 3 6 9 ... 5,7 안들어감
        # 2 , 3 아니거나 2 , 3배수 and
    for i in range(4):
        if len(default_sosu) != 0:          # 예외처리
            sosu_num = default_sosu.pop(0)

        for j in range(2,number +1):
            if number >= sosu_num * j:
                if sosu_num * j in full_num:    # 풀넘안에 소수넘이 있다면 true
                    full_num.remove(sosu_num * j)

    return full_num


result = ggyu(input)
print(result)

