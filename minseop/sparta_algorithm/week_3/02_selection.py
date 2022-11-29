input = [4, 6, 2, 9, 1]

# 선택 정렬
# 배열의 크기만큼 반복했다가 앞에서부터 한 개씩 줄어들면서 반복
def selection_sort(array):  # o(N^2)
    n = len(array)
    for i in range(n -1):   # 마지막에 남은 원소를 비교하지 않는다.
        min_index = i
        for j in range(n -i):
            if array[i + j] < array[min_index]:
                min_index = i + j

        array[i], array[min_index] = array[min_index], array[i]


selection_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!