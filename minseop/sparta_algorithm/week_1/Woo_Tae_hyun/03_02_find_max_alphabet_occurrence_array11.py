#먼저 배열을 0을 넣은 알파벳의 갯수(26개)만큼 초기화 하여 선언함
#for문을 작성하는데,char라는 변수(0)에 string의 갯수만큼 돌겠다는 얘기이다.
# 이는 문자열이 하나하나씩 담기게 해주는 for문임.
#만약 입력된 문장값이 알파벳이 아니라면 for문의 다음 인덱스로 넘어가 계속 돌며
#이때 문장값이 알파벳이라면 입력된 알파벳의 아스키코드값에서 a의 아스키코드값(97)을 빼서
#(예:s의 아스키코드값(115)에서 a의 아스키코드값(97)을 뺌, 답인 18번째 배열에 +1을 추가해준다.)
#이렇게 총 배열의 인덱스만큼을 돌고나면 배열에서 가장 높은 숫자(현재 문장에서는 a가 3으로 제일 높다)
#를 다시 배열의 인덱스의 범위만큼 돌며 숫자들을 비교해나간다.
#0~25번째 인덱스를 다 돌았을때 마지막 남은 가장 높은 인덱스의 번호
# (여기서는 a이니 max_alphabet_index는 0이고, 이때 a의 아스키값을 더하여 가장 많이 나온 알파벳의 아스키코드를 구한다.)
#그런 후에 나온 아스키코드(여기서는97)을 반환하는데, 이때 97은 a 이므로
#chr(max_alphabet_index + ord("a"))에서 97과 0을 더하여 반환하게 되는데
#chr(97)이 되므로 문자열 'a'를 반환한다.
#마지막으로 이 값은 return값에 담기게되며 이 값은 result에 'a' 라는 값으로 print에 의해 출력된다


input = "hello my name is sparta"


def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:  # 문자열이 하나하나씩 담기게 해주는 for 문
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord("a")
        alphabet_occurrence_array[arr_index] += 1
    max_occurrence = 0
    max_alphabet_index = 0
    for index in range(len(alphabet_occurrence_array)):
        alphabet_occurrence = alphabet_occurrence_array[index]
        if alphabet_occurrence > max_occurrence:
            max_occurrence = alphabet_occurrence
    return chr(max_alphabet_index + ord("a"))

result = find_max_occurred_alphabet(input)
print(result)