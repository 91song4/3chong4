# 이 함수는 find_max_num일 다른 숫자들과 비교하는 방식으로 풀어짐
# 3부터 시작해서 5,6,1,2,4와 비교하고
# 3과 5를 비교, 3이 작음 바로 False, 5로 넘어감 5와 3을 비교 5가 더 큼, 5와 6 비교 Fasle, 6부터 시작
# 6과 3을 비교, 5과 비교, 6과 1 6과 2 6과 4를 비교했을때 6이 제일 컸었음 = 이 배열의 최댓값임
# 마지막 num으로써 반환됨.

input = [3, 5, 6, 1, 2, 4]


def find_max_num(array):
    for num in array:
        for compare_num in array:
            if num < compare_num:
                break
        else:
            return num


result = find_max_num(input)
print(result)
