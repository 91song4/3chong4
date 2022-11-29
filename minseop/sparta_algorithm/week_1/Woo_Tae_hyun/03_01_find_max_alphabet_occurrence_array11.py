# for문을 이용하여 알파벳을 하나하나 꺼내서 문자열에 있는 문자와 동일하다면 occurrence를 하나씩 증가시켜
# max_occurence를 증가하는 방식의 코드
#이는 알파벳마다 문자열을 돌며 몇 글자 나오는지 확인하는 방법
#a -> 3
#b -> 0 ....

#alaphabet_array에 다 적어넣은 이유? -> a랑 이 문자열이랑 비교해줘야되기때문에.
#이 alphabet_array에서 하나하나 꺼내어 input과 비교를 할것임.

#나온 문자가 있다면 하나씩 빈도수를 업데이트를 가장 최고가 나오는 값을 반환하는 방식으로.
#최고로 많이 나온 변수의 빈도를 저장하는 함수 max_occuurence, 최고로 많이 나온 알파벳을 저장하기위한 변수 두가지가 필요함 max_alphabet
#0번째 있는 원소를 넣고 for문을 돌며 몇번이나 나온지 확인함
#alphabet_array에서  alphabet이라는 변수에 하나하나 원소를 담아주고
# occurence라는 변수를 0으로 지정후 for문을 돌며 만약 이떄 char가 alphabet과 동일하다면
# occurence는 하나씩 증가된다.
# 만약 occurence가 max_occurence보다 크다면 max_occurence에 occurence를 넣고
# max_alphabet에 alphabet을 넣어준다.



#
input = "hello my name is sparta"


def find_max_occurred_alphabet(string):
    for char in string:
        alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                          "n", "o", "p", "q", "r", "s", "t", "u", "q", "r", "w", "x", "y", "z"]
        max_occurrence = 0
        max_alphabet = alphabet_array[0]

        for alphbet in alphabet_array:
            occurrence = 0
            for char in string:
                if char == alphbet:
                    occurrence +=1
            if occurrence > max_occurrence:
                max_occurrence = occurrence
                max_alphabet = alphbet
    # 이 부분을 채워보세요!
    return max_alphabet


result = find_max_occurred_alphabet(input)
print(result)