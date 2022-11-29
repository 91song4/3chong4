input = [3, 5, 6, 1, 2, 4]


def is_number_exist(number, array):
    # 이 부분을 채워보세요!
    for array_value in array:
        if array_value == number:
          return True
        else:
            return False


result = is_number_exist(3, input)
print(result)