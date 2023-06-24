MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

profit = 0
resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}
is_machine_on = True


def is_resource_sufficient(order_ingredients):
    """메뉴의 재료 딕셔너리를 받아서 제조 가능한지 검사하고 그 결과를 반환"""
    short_items = []
    for item in order_ingredients:
        if order_ingredients[item] >= resources[item]:
            short_items.append(item)
    if len(short_items) > 0:
        print(f"Sorry there is not enough {', '.join(short_items)}.")
        return False
    return True


def handle_coins():
    """동전을 투입받고 총합을 계산"""
    print("Please insert coins.")
    quarters = int(input("how many quarters?: "))  # 25센트 동전
    dimes = int(input("how many dimes?: "))  # 10센트 동전
    nickles = int(input("how many nickles?: "))  # 5센트 동전
    pennies = int(input("how many pennies?: "))  # 1센트 동전
    return (quarters * 0.25) + (dimes * 0.10) + (nickles * 0.05) + (pennies * 0.01)


def is_transaction_successful(money_received, menu_cost):
    """메뉴 가격 이상의 돈을 받았는지를 반환"""
    if money_received >= menu_cost:
        global profit
        profit += menu_cost
        print(f"Here is ${round(money_received - menu_cost, 2)} in change.")
        return True
    print(
        f"Sorry that's not enough money. ${round(menu_cost - money_received, 2)} is short. ${money_received} refunded")
    return False


def make_coffee(menu, order_ingredints):
    """입력받은 메뉴를 제조하고 재료를 차감"""
    print("Please wait while we make your coffee... ☕")
    global resources
    for item in order_ingredints:
        resources[item] -= order_ingredints[item]
    print(f"Here is your {menu} ☕. Enjoy!")


while is_machine_on:
    # 유저로부터 메뉴 입력받기
    print("Welcome to the coffee machine. ☕")
    print("espresso: $" + str(MENU["espresso"]["cost"]))
    print("latte: $" + str(MENU["latte"]["cost"]))
    print("cappuccino: $" + str(MENU["cappuccino"]["cost"]))
    user_input_menu = input("What would you like? (espresso/latte/cappuccino): ")
    # 종료 기능
    if user_input_menu == "off":
        exit_confirm = input("Are you sure you want to exit the coffee machine? (y/n): ")
        while exit_confirm != "y" and exit_confirm != "Y" and exit_confirm != "n" and exit_confirm != "N":
            exit_confirm = input("Are you sure you want to exit the coffee machine? (y/n): ")
        if exit_confirm == "y" or exit_confirm == "Y":
            is_machine_on = False
            print("Goodbye!")
    # 상태 확인 기능
    elif user_input_menu == "report":
        print(f"Water: {resources['water']}ml")
        print(f"Milk: {resources['milk']}ml")
        print(f"Coffee: {resources['coffee']}g")
        print(f"Profit: ${profit}")
    # 메뉴 입력받았을 때
    else:
        chosen_ingredients = MENU[user_input_menu]["ingredients"]
        if is_resource_sufficient(chosen_ingredients):
            total = handle_coins()
            if is_transaction_successful(total, MENU[user_input_menu]["cost"]):
                make_coffee(user_input_menu, chosen_ingredients)
