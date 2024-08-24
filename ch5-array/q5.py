def solution(arr1, arr2):
    answer = []
    for i in range(len(arr1)):
        answer.append([])
        for j in range(len(arr2[0])):
            res = 0
            for k in range(len(arr1[0])):
                res += arr1[i][k] * arr2[k][j]
            answer[i].append(res)
    return answer


"""풀이
3 x 2 행렬 A(r, c)
00 01
10 11
20 21

2 x 3 행렬 B(r, c)
00 01 02
10 11 12

A x B 곱셈 한다면...
결과물은 3 x 3 행렬(Ar, Bc)
덧셈 연속은 Ac = Br 만큼 일어남

따라서 3중 for loop 필요
"""
