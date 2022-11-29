input = [4, 6, 2, 9, 1]


def bubble_sort(array):     # 시간복잡도 O(N^n)
    n = len(array)  # 5
    for i in range(n -1):   # range(4) => 0 1 2 3
        for j in range(n -i -1):
            print(range(n -i -1))   # 5 - 0 - 1 = 4 / 5 - 1 - 1 = 3 / 5 - 2 - 1 = 2
            if array[j] > array[j +1]:
                array[j], array[j +1] = array[j +1], array[j]
    return


bubble_sort(input)
print(input)  # [1, 2, 4, 6, 9] 가 되어야 합니다!