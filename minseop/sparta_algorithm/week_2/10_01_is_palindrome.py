input = "abcba"


def is_palindrome(string):
    n = len(string)
    print(n)
    for i in range(n):
        # print(string[n-1-i])
        if string[i] != string[n - 1 -i]:
            return False

    return True


print(is_palindrome(input))