#find_max_num 이라는 함수를 구현할 방법은 지정 변수로 구현함
#max_num이라는 변수를 설정후 가장 큰 녀석을 기록하도록 함
# 3, 5 비교시 5가 더 크니 max_num에 담기고, 
# 5, 6 비교시 6이 더 크니 다시 max_num에 담기고
# 1, 6 .. 중략
# 2, 6
# 4, 6 비교시 6이 더크니 현상 유지 하는데 배열의 갯수만큼 다 돌았으니 
# max_num을 return값에 넣어 반환해줌.



input = [3, 5, 6, 1, 2, 4]

def find_max_num(array):
    max_num = array[0]
    for num in array:
        if num > max_num:
            max_num = num
    return max_num


result = find_max_num(input)
print(result)