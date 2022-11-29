input = 100


def find_prime_list_under_number(number):
    if number <= 1:
        return '숫자를 다시 입력해주세요.'
    prime_list = []*(number - 2)
    prime_num_list = [7, 5, 3, 2]
    i = 2

    # 기본값 채우기
    while i <= number:
        prime_list.append(i)
        i += 1

    prime = prime_num_list.pop()
    while prime <= number:
        i = 2
        while (prime*i) <= number:
            try:
                prime_list.remove(prime*i)
                i += 1
            except:
                i += 1
                continue

        try:
            prime = prime_num_list.pop()
        except:
            break
    return prime_list


result = find_prime_list_under_number(input)
print(result)
