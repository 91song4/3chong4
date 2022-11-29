def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26
    for char in string:
        if char.isalpha():
            char.lower()
            i = ord(char)-ord('a')
            alphabet_occurrence_array[i] += 1

    max_num = alphabet_occurrence_array[0]
    for element in alphabet_occurrence_array:
        if element > max_num:
            max_num = element

    index = alphabet_occurrence_array.index(max_num)

    return (chr(index+ord('a')))


result = find_max_occurred_alphabet
print("정답 = a 현재 풀이 값 =", result("Hello my name is sparta"))
print("정답 = a 현재 풀이 값 =", result("Sparta coding club"))
print("정답 = s 현재 풀이 값 =", result("best of best sparta"))
