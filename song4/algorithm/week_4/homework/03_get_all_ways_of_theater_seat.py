seat_count = 9
vip_seat_array = [4, 7]


def get_all_ways_of_theater_seat(total_count, fixed_seat_array):
    link_count = 0
    number_of_cases = []
    vip = fixed_seat_array.pop(0)
    for i in range(1, total_count+1):
        if i == vip or i == total_count:
            if i == total_count:
                link_count+=1
            if 1 < link_count:
                number_of_cases.append(link_count)
            link_count = -1
            if len(fixed_seat_array):
                vip = fixed_seat_array.pop(0)
        link_count +=1
    
    result =1
    temp_result =0
    fibo = [1, 2]
    for multiply in number_of_cases:
        if multiply == 2:
            temp_result = 2
        for i in range(2, multiply):
            if i >= len(fibo):
                fibo.append(fibo[-1]+fibo[-2])
            temp_result=fibo[i]
        result*= temp_result
    return result


# 12가 출력되어야 합니다!
print(get_all_ways_of_theater_seat(seat_count, vip_seat_array))

print("정답 = 4 / 현재 풀이 값 = ", get_all_ways_of_theater_seat(9,[2,4,7]))
print("정답 = 26 / 현재 풀이 값 = ", get_all_ways_of_theater_seat(11,[2,5]))
print("정답 = 6 / 현재 풀이 값 = ", get_all_ways_of_theater_seat(10,[2,6,9]))