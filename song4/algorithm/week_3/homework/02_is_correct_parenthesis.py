from collections import deque


def is_correct_parenthesis(string):
    parentheses_open = 0
    parentheses_close = 0
    for sign in string:
        if sign == '(':
            parentheses_open += 1
        else:
            parentheses_close += 1

        if parentheses_open < parentheses_close:
            return False

    if parentheses_open == parentheses_close:
        return True
    return False


print("정답 = True / 현재 풀이 값 = ", is_correct_parenthesis("(())"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis(")"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())))"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("())()"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis("((())"))
