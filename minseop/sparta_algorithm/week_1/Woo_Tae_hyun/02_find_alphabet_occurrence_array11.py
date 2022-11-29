def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26

    # 이 부분을 채워보세요!
    for char in string: # 문자열이 하나하나씩 담기게 해주는 for 문
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord("a")
        alphabet_occurrence_array[arr_index] += 1

    return alphabet_occurrence_array


print(find_alphabet_occurrence_array("hello my name is sparta"))