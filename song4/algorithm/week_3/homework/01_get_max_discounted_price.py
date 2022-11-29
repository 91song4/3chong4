from collections import deque
shop_prices = [30000, 2000, 1500000]
user_coupons = [20, 40]


def get_max_discounted_price(prices, coupons):
    result = 0
    prices.sort(reverse=True)
    coupons.sort(reverse=True)
    while len(coupons) and len(prices):
        result += int(prices.pop(0) * (1-(coupons.pop(0) / 100)))

    while len(prices):
        result += prices.pop()

    return result


print("정답 = 926000 / 현재 풀이 값 = ",
      get_max_discounted_price([30000, 2000, 1500000], [20, 40]))
print("정답 = 485000 / 현재 풀이 값 = ",
      get_max_discounted_price([50000, 1500000], [10, 70, 30, 20]))
print("정답 = 1550000 / 현재 풀이 값 = ",
      get_max_discounted_price([50000, 1500000], []))
print("정답 = 1458000 / 현재 풀이 값 = ",
      get_max_discounted_price([20000, 100000, 1500000], [10, 10, 10]))
