# input 값 만큼 배열을 만들고
# 2는 소수니까 뺀다. 3 5 7 뺀다.
# 2 3 5 7 배수를 모두 지운다
# 반복한다.

input = 113


def ggyu(number):
    # 2배수 = 2 4 6 8 10 // 3배수 = 3 6 9 ... 5,7 안들어감
    # 2 , 3 아니거나 2 , 3배수    and == true true = true // 나머진 false
    # or false false = false // 나머진 true
    full_num = list(range(2, number + 1))  # 2~ 120 배열 완성
    full_num2 = range

    i = 0
    while i < len(full_num): # 120
        num = full_num[i]   # num -> 2 ~ 120 // 2 ~ 120에서 2배인 수가 update // 2 ~ 120에서 3인 배수가 upudate
        full_num = list(filter(lambda x: x == num or x % num, full_num))
        i += 1

    return full_num

result = ggyu(input)
print(result)
print(list(range(113)))
a = [0] *10

print(type(a))




# def lam_tset(x):
#     return parameter == 2 or parameter % 2
#
# print( lam_tset(5))                           # 2 -> ture , 3 -> 1 , 4 -> 0 , 5 -> 1
# print( filter(lam_tset, range(2,121)))            # filter object at 0x0000029AD10A7E80 // 값이 저장
# print( list(filter(lam_tset, range(2,11))))      # [2, 3, 5, 7, 9]      # list 함수로 반환, print로 출력
# print( list(filter(lambda param: param == 2 or param % 2 , range(2,11))))


