[https://www.acmicpc.net/problem/11058](https://www.acmicpc.net/problem/11058)

백준 g5 11058 크리보드 DP

# 느낀 점

기초 수학문제 풀듯이 규칙을 찾고, 점화식을 구하려고 시도했다. 귀납적 추론의 형태로 풀려고 하다보니 문제가 요구하는 답을 몇가지 케이스를 생각해보고 직접 점화식을 구현하는 방법으로 주로 풀었다. 그런데 이번 문제처럼 조금만 복잡해지니 점화식을 구현하는데 시간이 오래걸렸다.

직접 케이스를 구하면서 값을 잘못 구했는데 그 값으로 점화식에 대입하니 맞지 않아 오래걸렸다. 점화식을 처음에 올바르게 도출했는데 잘못된 구한 값을 넣으면서 점화식을 수정하려고 했다😅

# 문제 읽기

N(1 ≤ N ≤ 100)

버튼 4개의 역할

1. A: 화면에 A를 출력한다.
2. Ctrl-A: 화면을 전체 선택한다
3. Ctrl-C: 전체 선택한 내용을 버퍼에 복사한다
4. Ctrl-V: 버퍼가 비어있지 않은 경우에는 화면에 출력된 문자열의 바로 뒤에 버퍼의 내용을 붙여넣는다

크리보드의 버튼을 총 N번 눌러서 화면에 출력된 A개수를 최대로하는 프로그램

# 1트: 66m

CA → CC → CV는 한 세트 ⇒ N은 3 소요 /

N = 1 ⇒ A

N = 2 ⇒ A A

N = 3 ⇒ A A A

N = 4 ⇒ A A A A

N = 5 ⇒ A A A A A

N = 6 ⇒ `A A A` **CA CC CV** : 6

N = 7 ⇒ A A A / CA CC CV / CV : 9

N = 8 ⇒ A A A / CA CC CV / CV CV : 12

N = 9 ⇒ A A A A / CA CC CV / CV / CV : 16

N = 9 ⇒ A A A A A / CA CC CV / CV / CV : 20

- 직접 예시를 작성하면서 수행해본 결과 1 ~ 6 은 초기화 가능
- 직접 해보면 3단계 전까지는 `dp[i-3] * 2` 로 가능
  - n =
- `dp[i-3] * 2` 대로 하면 4단계부터 CV를 연속으로 누르는 경우가 있어서 맞지 않음
  - `dp[i - 4] * 3` 으로 계산
  - n = 10, n = 7
- 5단계에서 또 맞지 않음. dp[i - 5] 값을 4번 곱함 `dp[i - 5] * 4`
  - n = 11 , n= 8,

# 2트: 23m ✅

CA → CC → CV가 한 사이클이니까 dp[i - 3] \* 2하면 됨

그런데 단순히 반복하면 안되는게 CV를 연속해서 하는게 더 좋을 때가 있음.

- 이 때는 dp[i - 4] \* 3 해야함

CA → CC → CV 3단계가 한 사이클이다 보니 CV를 2번까지 반복가능

- dp[i - 5] \* 4

k = 7 ⇒ dp[4] _ 2 (8) / `dp[3] _ 3 (9)` / dp[2] \*4 (8)

k = 8 ⇒ dp[5] _ 2 (10) / `dp[4] _ 3 (12)`/`dp[3] \* 4(12)`

k = 9 ⇒ dp[6] _ 2 (12) / dp[5] _ 3 (15) / `dp[4] * 4 (16)`

k = 10 ⇒ dp[7] _ 2 (18) / dp[6] _ 3 (18) / `dp[5] * 4 (20)`

dp[k] = Math.max(dp[k - 3] _ 2, dp[k-4] _ 3, dp[k-5] \* 4)
