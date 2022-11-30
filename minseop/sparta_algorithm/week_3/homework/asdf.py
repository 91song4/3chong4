# 카운트다운 만들기  # 혹시라도 저 부를까봐 최소로 해놨습니당

def count(n):
    if n == 0:
        return 0
    print(n)
    n -=1   # 9
    return count(n)
print(count(10))