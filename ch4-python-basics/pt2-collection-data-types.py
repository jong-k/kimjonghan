# 컬렉션
"""
컬렉션 종류
- 리스트
- 튜플
- 딕셔너리
- 셋
- 문자열
"""

# 뮤터블 객체 (변경 가능)
# 리스트, 딕셔너리, 셋

# 리스트
my_list = [1, 2, 3, 4, 5]
my_list[4] = 6
print(my_list)  # [1, 2, 3, 4, 6]
my_list2 = my_list + [0, 1, 2]
print(my_list2)  # [1, 2, 3, 4, 6, 0, 1, 2]
del my_list2[2]
print(my_list2)  # [1, 2, 4, 6, 0, 1, 2]
print(my_list2[-4:-1])  # [6, 0, 1]

# 딕셔너리
my_dict = {"one": 1}
my_dict["two"] = 2
print(my_dict)  # {'one': 1, 'two': 2}

if "three" in my_dict:
    print("결과:", my_dict["three"])
else:
    my_dict["three"] = 3
    print("데이터가 추가되었습니다")
    print("결과:", my_dict["three"])
print(my_dict)  # {'one': 1, 'two': 2, 'three': 3}

# 이뮤터블 객체 (변경 불가)
# 정수, 부동소수점, 문자열, 튜플
