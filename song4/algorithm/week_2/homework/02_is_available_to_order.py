shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"]
shop_orders = ["오뎅", "콜라", "만두"]


def is_available_to_order(menus, orders):
    orders_count = len(shop_orders)
    set_menus = set(shop_menus)
    set_orders = set(shop_orders)
    check_order = True if orders_count == len(
        set_menus & set_orders) else False
    return check_order


result = is_available_to_order(shop_menus, shop_orders)
print(result)
