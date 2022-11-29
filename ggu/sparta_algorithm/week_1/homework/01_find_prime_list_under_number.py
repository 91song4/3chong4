input = 12000

def find_prime_list_under_number(numbers):
    num = list(range(2, numbers + 1))

    prime_number = [2, 3, 5, 7]
    multiple = []
    for number in prime_number:
        i = 2
        while number * i <= numbers:
            if not number * i in multiple:
                multiple.append(number * i)
            i += 1

    setnum = set(num)
    setmultiple = set(multiple)

    num_list = list(setnum - setmultiple)
    num_list.sort()

    return num_list

result = find_prime_list_under_number(input)
print(result)
