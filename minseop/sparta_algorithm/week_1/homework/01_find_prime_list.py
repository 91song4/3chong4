input = 100 # 1 3 5 7 11 13 17 19

# 소수는 1과 자신으로만 나누어진다
# 소수x 2 ~ 자신의 수로 나누어 나머지가 없는 수
# 약수 = 나누어 떨어지는 수

# 소수 X = 나눴을때 몫이 == 0
# 소수 = 나눴을때 몫이 발생합니다.

def find_prime_list_under_number(number):
    # 이 부분을 채워보세요!
    prime_nums = []
    for i in range(2, number+1):    #range ( 2, 20+1 21,) //
        for j in range(2, i):       # 그냥 안돈다. 빈값이여서 그냥 for문을 빠져나간다.  2 3 4 5 6
            if i % j == 0:
                break               # for ~ else 는 if값을 충족안할때 결과값을 도출하기위해서 사용
        else:
            prime_nums.append(i)

    return prime_nums


result = find_prime_list_under_number(input)
print(result)

