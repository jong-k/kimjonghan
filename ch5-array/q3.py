# 프로그래머스 두 개 뽑아서 더하기
def solution(numbers):
    s1 = set()
    length = len(numbers)
    for i in range(length):
        for j in range(i + 1, length):
            s1.add(numbers[i] + numbers[j])
    return sorted(list(s1))
