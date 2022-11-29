numbers = [2, 3, 1]
target_number = 0


def get_count_of_ways_to_target_by_doing_plus_or_minus(array, target):
    if len(array) == 1:
        if array[0] - target == 0:
            return 1
        elif array[0] + target == 0:
            return 1
        else:
            return 0

    count = 0
    count += get_count_of_ways_to_target_by_doing_plus_or_minus(
        array[1:], target-array[0])
    count += get_count_of_ways_to_target_by_doing_plus_or_minus(
        array[1:], target+array[0])

    return count


print(get_count_of_ways_to_target_by_doing_plus_or_minus(
    numbers, target_number))  # 5를 반환해야 합니다!
