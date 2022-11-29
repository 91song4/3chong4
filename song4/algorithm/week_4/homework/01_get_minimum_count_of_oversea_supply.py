import heapq

ramen_stock = 4
supply_dates = [4, 10, 15]
supply_supplies = [20, 5, 10]
supply_recover_k = 30


def get_minimum_count_of_overseas_supply(stock, dates, supplies, k):
    geted =[]
    stuff =[]
    deal =0
    while stock < k:
        for date in zip(dates,supplies):
            if date[0]<=stock:
                if date not in geted and date not in stuff:
                    stuff.append(date)

        if len(stuff)!=1:
            stuff.sort(key=lambda x:x[1],reverse=True)
            
        geted.append(stuff.pop(0))
        stock+=geted[-1][1]
        deal+=1
        
    return deal


print(get_minimum_count_of_overseas_supply(ramen_stock,
    supply_dates, supply_supplies, supply_recover_k))
print("정답 = 2 / 현재 풀이 값 = ",
    get_minimum_count_of_overseas_supply(4, [4, 10, 15], [20, 5, 10], 30))
print("정답 = 4 / 현재 풀이 값 = ", get_minimum_count_of_overseas_supply(4,
    [4, 10, 15, 20], [20, 5, 10, 5], 40))
print("정답 = 1 / 현재 풀이 값 = ",
    get_minimum_count_of_overseas_supply(2, [1, 10], [10, 100], 11))
