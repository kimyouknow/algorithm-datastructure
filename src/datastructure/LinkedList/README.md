# 연결 리스트

- 물리적으로 흩어져 있는 자료들을 서로 연결하여 하나로 묶어 관리하는 데이터 구조
- 노드 간의 연결을 이용해 리스트를 구현한 것

## 구조

- 연결 리스트는 노드들의 집합으로 이들은 데이터를 저장하고 있고 서로 연결되어 있다.
- 일반적인 노드는 `데이터 필드(data field)`와 `링크(link field)`로 구성되어 있다.
- 데이터 필드에는 저장하고자 하는 데이터가 들어가며 다양한 자료형이 올 수 있다.
- 링크 필드에는 다음 노드의 주소를 저장한다.
- 연결 리스트를 탐색하기 위해선 첫번째 노드의 주소를 알아야 하는데 이 노드의 주소를 저장하는 노드를 `Head` 한다.
- 연결 리스트의 마지막은 마지막 노드의 링크 필드를 `NULL` 값으로 하여 표현한다. 이를  `Tail` 라고도 한다.

## 종류

### 1. 단순 연결 리스트 ( Singly Linked List )

- 하나의 방향으로만 연결되어 있으며 맨 마지막 노드의 링크 필드는 NULL 값을 가진다.

### 2. 원형 연결 리스트 (Circular Linked List)

- 단순 연결 리스트와 같지만 맨 마지막 노드의 링크 값이 다시 첫번째 노드를 가리킨다.

### 3. 이중 연결 리스트(Doubly Linked List)

- 각 노드마다 링크 필드가 2개씩 존재하며 각각 선행 노드(previous node)와 후행 노드(next node)를 가리킨다.

## 시간복잡도

### 접근

- O(N) : get, set접근하고자 하는 위치까지 해드노드부터 찾아가야 한다.

### 삽입

- O(1) : push, unshift
- O(N) : insert

### 제거

- O(1) : shift
- O(N) : pop, remove삭제하려는 위치까지 접근해서 삭제해야한다.

### 탐색

- O(N) - 탐색하고자 하는 위치까지 찾아가야 한다.

## 필요한 메서드

- [x] : 추가
- [x] : 삽입
- [x] : 탐색
- [x] : 삭제
- [x] : 순회

## 고민

### 1. I/O를 분리하자

I/O 작업을 분리해서 메서드(순수함수)의 로직만 테스트하자.

#### 2. 각각의 테스트 코드가 독립적인가?

**it끼리 독립적이게 만들면서 생기는 중복코드**

- it끼리 독립적이다보면 반복되는 코드가 많아지는데, 반복되는 코드를 어떻게 처리할까?
- 예를 들어, 아래와 같이 단위 테스트마다 생성해야하는 인스턴스를 어떻게 처리할까?

```
인스턴스를 생성
인스턴스.add에 mock데이터 넘겨주기
인스턴스.size 확인
인스턴스.head 확인
```

beforeEach와 afterEach 및 spy.on을 활용하기

```js
let 인스턴스;
let spyon메서드;
beforeEach(() => {
  인스턴스 = new 클래스();
  spyon메서드 = jest.spyOn(인스턴스, '메서드');
});
afterEach(() => {
  spyon메서드.mockClear();
});
```

**원래코드와 독립적이어야할 것 같다.**

아래의 코드와 같이 원본 코드의 class를 그대로 가져다 쓰니 add같은 함수를 사용할 때 테스트 로직에서 실행한 메서드가 이전에 생성하고 실행한 인스턴스에 영향을 끼치는 문제가 발생했다. `우선 각 테스트마다 독립적으로 인스턴스를 만들어서 해당문제를 해결했다.`

```js
import { SignleLinkedList } from './app';

// 예시
let instance;
beforeEach(() => {
  intance = new SingleLinkedList();
});
```

### 3. 적절하게 테스트 하고 있는가

내가 작성한 테스트 항목들이 각 메서드를 올바르게 동작하기 위해 적절한가를 어떻게 체크할 수 있을까?
리뷰받는 방법밖에 없을까?

## 수도코드

## 추가

```
push(value)
n = node(value) (노드생성)
if head === null
  head = n
else
  current = head
  while current.next === null
    current = current.next
  current.next = n
  size ++
```

```
unshift(value)
n = node(value) (노드생성)
if head === null
  head = node
  tail = node
else
  n.next = head
  head = n
```

## 탐색

```
searchWithIndex(index)
current = head
count = 0
if index > size
  return null
while current.next === null
  if count === index
    return current
  current = current.next
  count++
```

## 삽입

```
insert(value, index)
if index === 0
  unshift(value)
  return
if index > size
  return
if index === size
  push(value)
  return
n = node(value) (노드생성)
target = searchWithIndex(index);
n.next = target.next
target.next = n
```

## 삭제

```
delete(index)
if size === 0
  return
if index === 0
  head = head.next
  return
beforeCurrent = null
current = head
count = 0
while current !== null && current.next !== null
  if count === index
    return;
  beforeCurrent = current
  current = current.next
  count++
beforeCurrent.next = current.next
size--;
```

## 순회

```
printNodes()
current = head;
while current !== null && current.next !== null
  console.log(current.body);
  current = current.next
```
