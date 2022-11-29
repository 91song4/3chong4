#문자열이 중복되지 않는 첫번째 문자를 반환하기

#이것도 바로 O(N) 만큼 걸립니다. 함수 구문 하나하나를 보지 않더라도, 1차 반복문이 나왔고,
# array 의 길이 만큼 반복한다? 그러면 O(N) 이겠구나! 생각해주시면 됩니다. 다른 계수는 다 버려버리자구요~!


#첫번째 for문
#배열을 알파벳 갯수만큼 0을 담아 26개를 선언한다.
#string이라는 매개변수에 입력한 인풋값을 담아서
#이 inuput값을 하나씩 알파벳이 맞는지 아닌지 검사하고
#아니라면 다음 input값 글자로 넘어간다.
#알파벳이라면 해당하는 알파벳을 아스키코드로 변환 후 아스키코드 a의 값(97)에서 빼준다.
#그 빼진 값을 alphabet_occurrence_array 각 배열에 해당하는 인덱스에 +1을 더해준다.

#두번째 for문
#첫번재 for문이 다 돌았으면 중복되지 않는 알파벳을 찾기위해
#not_repeating_character_array를 빈 배열로써 선언한다.
#두번째 for문은 index의 범위(0, 26)만큼 도는데
#alphabet_occurrence는 alphabet_occurrence_array내 값으로 한다. 첫번째 print문은 [0]이라면 4 [1]이라면 1
#이때 alphabet_occurrence의 값이 1이라면 True, 아니면 False가 성립되는데
#조건문을 만족하는 인덱스는 [2] [3] 이므로
# [2] + 97 = 99 = 'c', [3] + 97 = 100 = 'd' / 'c'와 'd'가
#not_repeating_character_array에 배열로써 담기게 된다.
#문제는 문자열이 중복되지 않는 첫번째 문자를 반환하는 것이므로, d를 반환하여야 한다.

#3번째 for문
#이제 각 string(abadabac)은 한글자 한글자 not_repeating_character_array['c','d']와 비교를 하여
#만약 조건문이 True일 경우에는 바로 그 char(해당하는 인풋값)를 리턴한다.
#첫 print문에서는 d이므로 d가 반환되는 모습을 볼 수 있다.


def find_not_repeating_first_character(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord("a")
        alphabet_occurrence_array[arr_index] += 1

    not_repeating_character_array = []
    for index in range(len(alphabet_occurrence_array)):
        alphabet_occurrence = alphabet_occurrence_array[index]

        if alphabet_occurrence == 1:
            not_repeating_character_array.append(chr(index + ord("a")))

    for char in string:
        if char in not_repeating_character_array:
            return char

    return "_"


result = find_not_repeating_first_character
print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))