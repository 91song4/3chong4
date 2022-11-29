def is_correct_parenthesis(string):
    stack = []
    print(range(len(string)))

    for i in range(len(string)):
        if string[i] == "(":
            stack.append(i)     # stack = [ (, ( ]
        elif string[i] == ")":
            if len(stack) == 0:
                return False
            stack.pop()         # stack = [ ]

    if len(stack) != 0:         # len(stack) == 0
        return False
    else:
        return True             # True 반환


print("정답 = True / 현재 풀이 값 = ", is_correct_parenthesis("(())"))
# print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis(")"))
# print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())))"))
# print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("())()"))
# print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())"))