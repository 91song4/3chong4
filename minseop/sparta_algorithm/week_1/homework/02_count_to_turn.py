input = "011110"    # 00000

# 0으로 바꿨을 때 횟수 저장하는 변수
# 1로 바꿨을 때 횟수 저장하는 변수

# 첫 글자가 0이면 1로 바꾸는 횟수를 +1 하고
# 첫 글자가 1이면 0으로 바꾸는 횟수를 +1 한다.

def find_count_to_turn_out_to_all_zero_or_all_one(string):
    # 이 부분을 채워보세요!
    zero_num = 0
    one_num = 0
    num = 0
    # print(string)  # 011110 을 배열에 넣어서 인덱스로 값을 뽑고싶당
    # print(type(string))   str
    # string_list = []  # 빈 배열 만들기
    # string_list = string  # 빈 배열에 string을 넣어준댭
    # print(string_list)    #   011110
    # print(type(string_list))  #str // 문자열도 배열인거같다
    # print(type(string))   str
    # print(string[1]) # 그럼 string[]로 해도 되나연


    for i in range(len(string)-1): # None은 undefine 같은느낌쓰
        # print(i)  // 1,2,3,4,none
        if string[i] != string[i +1]:   # 0 != 1 면 0을 1로 변경 <하거나> 1을 0으로 변경
            if string[i + 1] == "0":
                # zero_num += 1
                num += 1
            if string[i + 1] == "1":
                # one_num += 1
                num += 1
    # print(zero_num, one_num)
    # print(num)


    return num
    #min(변수1, 변수2)       # 둘 중 작은 횟수를 리턴한다.


result = find_count_to_turn_out_to_all_zero_or_all_one(input)
print("최소 변환 횟수 : ", result)