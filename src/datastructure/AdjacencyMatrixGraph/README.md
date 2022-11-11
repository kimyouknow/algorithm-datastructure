# 인전행렬으로 그래프 구현

## 인접행렬 ADT

객체: 정점의 집합과 간선의 집합

필드

- nodes: 인접 행렬
- size: 정점의 개수

메서드

- create(): 그래프 생성
- addVertex(vertext): 그래프에 정점 v삽입
- addEdge(vertext1, vertext2): 그래프에서 vertext1과 vertext2 연결
- removeVertext(vertext): 그래프에서 vertext을 삭제
- removeEdge(vertext1, vertext2): 그래프에서 vertext1과 vertext2를 연결하는 간선 삭제
- show(): 그래프 정보 출력

특징

2차원 배열의 가로, 세로가 같아야함.
