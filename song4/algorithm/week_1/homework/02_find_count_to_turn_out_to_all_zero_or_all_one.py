input = "0111001011010101110"

# 0,1의 빈도수 체크.
# 빈도수가 낮은 수를 선택하여 뒤집는다.
# 문제발견 빈도수 만으로 최소횟수 비교 불가.
# ex) 011110은 { 0:2, 1:4 }로 0이 빈도수가 적지만 1만 한번 뒤집으면 끝난다.
# 해결방안 연결된 숫자는 빈도수 1로 본다.
# ex) 011110 : { 0:2, 1:1 } 1이 빈도수가 낮기 때문에 1을 1번 뒤집으면 끝난다.
# ex2) 10101101 : { 0:3, 1:4 } 0의 빈도수가 낮기 때문에 0을 3번 뒤집으면 끝난다.
# ex3) 00111001111 : { 0:3, 1:2 }


def find_count_to_turn_out_to_all_zero_or_all_one(string):
    string_arr = []
    for char in string:
        string_arr.append(char)

    num_check = {}
    for i, num in enumerate(string_arr):
        if i+1 == len(string_arr):
            num_check[str(num)] += 1
        else:
            if string_arr[i] != string_arr[i+1]:
                if str(num) in num_check:
                    num_check[str(num)] += 1
                else:
                    num_check[str(num)] = 1

    if num_check['0'] > num_check['1']:
        target_num = num_check['1']
    else:
        target_num = num_check['0']

    return target_num

    ########################################################
    if num_check['0'] > num_check['1']:
        target_num = '0'
    else:
        target_num = '1'

    for i, num in enumerate(string_arr):
        if num != target_num:
            while string_arr[i] != target_num:
                string_arr[i] = target_num
                i += 1

    return ''.join(string_arr)


result = find_count_to_turn_out_to_all_zero_or_all_one(input)
print(result)
