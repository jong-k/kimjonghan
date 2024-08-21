# --- 정수형 ---
a = 13
b = 4

# 정수형 비트 연산
print(a & b)  # 4
print(a | b)  # 13
print(a ^ b)  # 9
""" 비트 XOR(^) 연산
a = 13 = 0b1101
b = 4 =  0b0100
a ^ b =  0b1001 = 9
"""

print(~a)  # -14
""" 비트 NOT(~) 연산
a = 13 = 0b1101
~a =    ~0b0010 = 16 - 2 = 14
-> 2의 보수
"""

print(a << 2)  # 52
""" 왼쪽 시프트
a = 13 =   0b1101
<< 1   =  0b11010 = 26 (13 * 2)
<< 2   = 0b110100 = 52 (13 * 2^2) 
"""

print(a >> 1)  # 6
""" 오른쪽 시프트
a = 13 = 0b1101
>> 1 =   0b0110 = 6 (13 // 2)
"""

# 정수형 논리 연산
print(a and b)  # 4
print(a or b)  # 13
print(not a)  # False

# --- 부동 소수형 ---
import sys

# 엡실론
print(sys.float_info.epsilon)  # 2.220446049250313e-16

# 부동소수점 수의 오차 검사
a = 0.1 + 0.1 + 0.1
b = 0.3
print(a - b)  # 5.551115123125783e-17
if abs(a - b) < sys.float_info.epsilon:
    print("a와 b는 같은 값")
else:
    print("a와 b는 다른 값")

# 오차가 엡실론보다 작으면 거의 같은값이라고 봐도 무방
