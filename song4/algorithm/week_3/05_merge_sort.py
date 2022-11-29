array = [5, 3, 2, 1, 6, 8, 7, 4]


def merge_sort(array):
    if len(array) == 1:
        return array

    mid = len(array)//2

    arr_left = merge_sort(array[:mid])
    arr_right = merge_sort(array[mid:])
    arr_merge = merge(arr_left, arr_right)

    return arr_merge


def merge(array1, array2):
    new_arr = []
    while len(array1) != 0 and len(array2) != 0:
        if array1[0] < array2[0]:
            new_arr.append(array1.pop(0))
        else:
            new_arr.append(array2.pop(0))

    if len(array1):
        while len(array1):
            new_arr.append(array1.pop(0))
    else:
        while len(array2):
            new_arr.append(array2.pop(0))

    return new_arr


print(merge_sort(array))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!

print("정답 = [-7, -1, 5, 6, 9, 10, 11, 40] / 현재 풀이 값 = ",
      merge_sort([-7, -1, 9, 40, 5, 6, 10, 11]))
print("정답 = [-1, 2, 3, 5, 10, 40, 78, 100] / 현재 풀이 값 = ",
      merge_sort([-1, 2, 3, 5, 40, 10, 78, 100]))
print("정답 = [-1, -1, 0, 1, 6, 9, 10] / 현재 풀이 값 = ",
      merge_sort([-1, -1, 0, 1, 6, 9, 10]))
