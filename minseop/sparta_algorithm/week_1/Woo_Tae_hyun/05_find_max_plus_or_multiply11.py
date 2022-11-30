# 곱하기 혹은 더하기를 해서 가장 큰수를 반환해라! 라고 하면 4 + 9 = 13, 4 ✕ 9 = 36 이니까 당연히 ✕ 를 항상 해야 하는 거 아니야?!
#
# 라고 해서 모든 값을 ✕ 해버리면 최대의 값이 나오지 않습니다. 왜냐면 1 혹은 0 같은 경우는 곱하는 것보다 더하는 게 좋기 때문입니다!
# 3 x 1 = 3 보다, 3 + 1 = 4 를 하는 게 더 큰 수를 가질 수 있으니까요!
#
# 자, 그러면 이제 총 계산된 값을 구하기 위한 합계 변수를 두겠습니다.
# 이제 반복문을 돌면서 합계 변수에 더하거나 곱해 나갈텐테,
# 마찬가지로 합계가 1 이하일 때 더하는 게 좋습니다. (1 x 2 보다는 1 + 2 가 더 크기 때문입니다!)
#
# 다시 정리하면, 합계와 현재 숫자가 1보다 작거나 같다면 더합니다. 그 외에는 전부 곱하면 되구요!
# 숫자를 돌면서 나온 각각의 숫자가 1보나 작거나 같다면 더하는게 낫고 1보다 크다면 곱해보는게 낫다.



#작동 순서
#처음 multiply_sum 0, number 0으로 시작해서
#array의 index만큼 도는데
#이때 number나 multiply_sum이 1과 같거나 작을경우(1이하) if문을 돌아 multiply_sum 에 number를 더해주고
#(1과같은 숫자는 곱하는것보다 더하는것이 수치가 더 크기때문)
#그게 아니라면 multiply_sum에 number를 곱해준다.
#array의 index만큼 다 돌았으면 최종적으로 multiply_sum 값을 반환해준다.

def find_max_plus_or_multiply(array):
    multiply_sum = 0
    for number in array:
        if number <= 1 or multiply_sum <= 1:
            multiply_sum += number
        else:
            multiply_sum *= number
    return multiply_sum


result = find_max_plus_or_multiply
print("정답 = 728 현재 풀이 값 =", result([0,3,5,6,1,2,4]))
print("정답 = 8820 현재 풀이 값 =", result([3,2,1,5,9,7,4]))
print("정답 = 270 현재 풀이 값 =", result([1,1,1,3,3,2,5]))