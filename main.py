def solution(numbers):
    s1 = set()
    length = len(numbers)
    for i in range(length):
        for j in range(i + 1, length):
            s1.add(numbers[i] + numbers[j])
    answer = sorted(list(s1))
    return answer


print(solution([2, 1, 3, 4, 1]))
