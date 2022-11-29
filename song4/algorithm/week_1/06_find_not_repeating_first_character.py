input = "abadabac"


def find_not_repeating_first_character(string):
    overlap_dic = {}
    for char in string:
        if char in overlap_dic:
            overlap_dic[char] += 1
        else:
            overlap_dic[char] = 0

    for check in overlap_dic:
        result = '_'
        if overlap_dic[check] == 0:
            result = check
            break

    return result


result = find_not_repeating_first_character
print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))
