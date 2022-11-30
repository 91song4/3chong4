#작동 순서
# 이 함수는 number, array를 매개변수로써 받고
# for문은 array의 element 갯수만큼 돈다.
# 이때 매개변수로 받은 number가 배열 내element와 일치할 경우는 True를
# 아니면 False를 반환한다.


def is_number_exist(number, array):
    for element in array:
        if number == element:
            return True
    return False


result = is_number_exist
print("정답 = True 현재 풀이 값 =", result(3,[3,5,6,1,2,4]))
print("정답 = Flase 현재 풀이 값 =", result(7,[6,6,6]))
print("정답 = True 현재 풀이 값 =", result(2,[6,9,2,7,1888]))