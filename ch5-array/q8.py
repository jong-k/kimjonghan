# 프로그래머스 n^2 배열 자르기
## 시간 초과 코드
def solution(n, left, right):
    flattened_list = []

    for i in range(n):
        for j in range(n):
            if i == j:
                flattened_list.append(i + 1)
            elif j > i:
                flattened_list.append(j + 1)
            else:
                flattened_list.append(i + 1)

    return flattened_list[left:right + 1]
