
                                                # 0은 + 무조건 해야된다.
                                                # 1은 + 무조건 더한다.
                                                 # i 마지막 값인가요.  if문 사용

                                                # array[-1] 마지막 요소 선택.
                                                # 만약 i == len(array) { i +1 } 해라
input = [0, 3, 5, 6, 1, 2, 4]


def find_max_plus_or_multiply(array):
    # 이 부분을 채워보세요!
    num = 0
    for element in array:
                    # print(element)
                    # if element <= 1 :
                    #     num += element
        if element <= 1 or num <= 1 :
            num += element
                    # print(num)
        else:
            num *= element
    return num


result = find_max_plus_or_multiply(input)
print(result)




# input = [0, 3, 5, 6, 1, 2, 4]
# def find_max_plus_or_multiply(array):
#     # 이 부분을 채워보세요!
#     for i, element in enumerate(array):
#         plus_num = array[i]
#         multiply_num = 0
#         if array[i] == array[-i] :  # 마지막 요소 일때
#             plus_num = array[i] + array[i+1]
#
#
#     return 1
# result = find_max_plus_or_multiply(input)
# print(result)
