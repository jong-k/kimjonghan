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

def insert_coin(menu):
    print("Please insert coins.")
    quarters = int(input("how many quarters?: "))
    dimes = int(input("how many dimes?: "))
    nickles = int(input("how many nickles?: "))
    pennies = int(input("how many pennies?: "))
    total = (quarters * 0.25) + (dimes * 0.10) + (nickles * 0.05) + (pennies * 0.01)
    if total < MENU[menu]["cost"]:
        print("Sorry that's not enough money. Money {} refunded.".format("$" + str(round(total, 2))))
    else:
        global profit
        profit += MENU[menu]["cost"]
        if total > MENU[menu]["cost"]:
            change = round(total - MENU[menu]["cost"], 2)
            print("Here is $" + str(change) + " in change.")
        make_coffee(menu)


def make_coffee(menu):
    global resources
    resources["water"] -= MENU[menu]["ingredients"]["water"]
    if menu == "latte" or menu == "cappuccino":
        resources["milk"] -= MENU[menu]["ingredients"]["milk"]
    resources["coffee"] -= MENU[menu]["ingredients"]["coffee"]
    print("Here is your " + menu + " ☕）. Enjoy!")


while True:
    user_input_menu = input("What would you like? (espresso/latte/cappuccino): ")

    if user_input_menu == "off":
        exit()
    elif user_input_menu == "report":
        print("Water: " + str(resources["water"]) + "ml")
        print("Milk: " + str(resources["milk"]) + "ml")
        print("Coffee: " + str(resources["coffee"]) + "g")
        print("Profit: $" + str(profit))
    else:
        if user_input_menu == "espresso":
            if resources["water"] < MENU["espresso"]["ingredients"]["water"]:
                print("Sorry there is not enough water.")
            elif resources["coffee"] < MENU["espresso"]["ingredients"]["coffee"]:
                print("Sorry there is not enough coffee.")
            else:
                insert_coin(user_input_menu)

        if user_input_menu == "latte":
            if resources["water"] < MENU["latte"]["ingredients"]["water"]:
                print("Sorry there is not enough water.")
            elif resources["milk"] < MENU["latte"]["ingredients"]["milk"]:
                print("Sorry there is not enough milk.")
            elif resources["coffee"] < MENU["latte"]["ingredients"]["coffee"]:
                print("Sorry there is not enough coffee.")
            else:
                insert_coin(user_input_menu)
        if user_input_menu == "cappuccino":
            if resources["water"] < MENU["cappuccino"]["ingredients"]["water"]:
                print("Sorry there is not enough water.")
            elif resources["milk"] < MENU["cappuccino"]["ingredients"]["milk"]:
                print("Sorry there is not enough milk.")
            elif resources["coffee"] < MENU["cappuccino"]["ingredients"]["coffee"]:
                print("Sorry there is not enough coffee.")
            else:
                insert_coin(user_input_menu)


