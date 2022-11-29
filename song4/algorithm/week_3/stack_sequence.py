def stack_sequence(n, sequence):
    top = -1
    count = 1
    stack = []
    stack_sign = []
    for num in sequence:
        while not num in stack:
            stack.append(count)
            stack_sign.append('+')
            count += 1
            top += 1

        if stack[top] != num:
            return print('NO')
        else:
            stack.pop()
            top -= 1
            stack_sign.append('-')

    for char in stack_sign:
        print(char)


# sequence = list()
# n = int(input())
# for _ in range(n):
#     sequence.append(int(input()))
# stack_sequence(n, sequence)
stack_sequence(8, [4, 3, 6, 8, 7, 5, 2, 1])
