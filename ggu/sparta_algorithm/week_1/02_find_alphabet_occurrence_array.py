def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord("a")
        alphabet_occurrence_array[arr_index] += 1

    return alphabet_occurrence_array


print(find_alphabet_occurrence_array("hello my name is sparta"))



#직접해보기
#
# def find_alphabet_array(string):
#     alphabet_array = [0] * 26
#
#     # 이 부분을 채워보세요!
#
#     #string내 문자를 하나씩 차출
#     for char in string:
#         #차출된 값이 알파벳인지 확인
#         if char.isalpha() == True:
#             #알파벳의 인덱스 자리찾기
#             index = ord(char)-ord('a')
#             #배열 내 해당 인덱스 주소 내부값 +1
#             alphabet_array[index] += 1
#             print(alphabet_array)
#
#     for num in alphabet_array:
#         for compare_num in alphabet_array:
#             if num < compare_num:
#                 break
#         else:
#             return num
#
# print(find_alphabet_array("hello my name is sparta"))
#
#
# # str.isalpha()   ()문자열 확인