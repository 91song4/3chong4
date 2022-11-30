def find_alphabet_occurrence_array(string):  # 성민섭 백죽 Lv.5
    alphabet_occurrence_array = [0] * 26

    # 이 부분을 채워보세요!
    for num in string:
        if not num.isalpha():
            continue
        asc = ord(num) - ord("a")
        alphabet_occurrence_array[asc] += 1

    max_num = 0
    index = 0


    for i, value in enumerate(alphabet_occurrence_array):

        if value > max_num:
            index = i
            max_num = value
            print(max_num)
            # print(chr(i + ord('a')))
            # print(value)
            # print(i)
            # print(ord('a'))
            # 인덱스(index) 학생 번호  // 첫번째 요소의 값이 머냐.

    return chr(index + ord('a'))


print(find_alphabet_occurrence_array("hello my name is sparta"))
