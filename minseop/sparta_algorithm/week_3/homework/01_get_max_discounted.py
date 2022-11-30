# 한글을 재대로 좀 써라 진짜 개삑치네
# 3가지 상품을 전부 사는데 2가지 쿠폰을 적용해서 최대 할일을 받고싶은거임
# 쿠폰은 1번쓰면 소멸됨.
# 제일 큰 가격에 제일 큰 쿠폰 , 2번 큰가격에 2번째로 큰 쿠폰, 그리고 쿠폰이 없으니 걍 정가
# 1,500,000 에 40% 쿠폰, 30,000 에 20% 쿠폰 , 2,000 정가

def get_max_discounted_price(prices, coupons):
    coupons.sort(reverse=True)  # ( 내림차순 ) 제 생각에는 오름차순으로하면 값의 마지막을 가져와야되는데
                                # 오 맞습니다. 그런 큰 이유가 있었군요
    prices.sort(reverse=True)
    price_index = 0
    coupon_index = 0
    max_discounted_price = 0

    while price_index < len(prices) and coupon_index < len(coupons):
        max_discounted_price += prices[price_index] * (100 - coupons[coupon_index]) / 100
        price_index += 1
        coupon_index += 1
                    # max_discounted_price = 924,000

    # print(max_discounted_price)
    # print("인덱스", price_index)
    while price_index < len(prices):    # price_index(2) < len(prices)(3)
        # print("index", price_index)
        # print("len", len(prices))
        # print("max", max_discounted_price)
        max_discounted_price += prices[price_index]    # max_discounted_price(924,000) += price_index[3](2,000) == 926,000
        # print("max +=",max_discounted_price)
        price_index += 1

    return max_discounted_price     # 926,000


print("정답 = 926000 / 현재 풀이 값 = ", get_max_discounted_price([30000, 2000, 1500000], [20, 40,80,50]))
# print("정답 = 485000 / 현재 풀이 값 = ", get_max_discounted_price([50000, 1500000], [10, 70, 30, 20]))
# print("정답 = 1550000 / 현재 풀이 값 = ", get_max_discounted_price([50000, 1500000], []))
# print("정답 = 1458000 / 현재 풀이 값 = ", get_max_discounted_price([20000, 100000, 1500000], [10, 10, 10]))