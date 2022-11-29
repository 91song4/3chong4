input = "abcba"


def is_palindrome(string):
    check = len(string)-1

    for i, char in enumerate(string):
        if i == check:
            return True
        if char == string[check]:
            check -= 1
        else:
            break

    return False


print(is_palindrome(input))
