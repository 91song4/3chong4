finding_target = 1
finding_numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


def is_existing_target_number_binary(target, array):
    first = 0
    last = len(array) - 1
    mid = (last-first) // 2

    while first <= last:
        if array[mid] == target:
            return True
        elif array[mid] > target:
            last = mid - 1
        else:
            first = mid + 1
        mid = (first + last) // 2
    return False


result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)
