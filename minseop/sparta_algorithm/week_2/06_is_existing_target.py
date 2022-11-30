finding_target = 14
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16]


def is_existing_target_number_binary(target, array):
    now_min = 0
    now_max = len(array) -1
    try_num =  (now_min + now_max) // 2
    print(now_max)

    while now_min <= now_max:
        if array[try_num] == target:
            return True
        elif array[try_num] < target:
            now_min = try_num +1
        else:
            now_max = try_num -1
        try_num = (now_max + now_min) // 2


    return False


result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)