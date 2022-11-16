# 연결리스트 구현

# 필요한 메서드

- [x] : 추가
- [x] : 삽입
- [x] : 탐색
- [x] : 삭제
- [x] : 순회

## 고민

1. I/O를 분리하자.

I/O 작업을 분리해서 메서드(순수함수)의 로직만 테스트하자.

2. 각각의 테스트 코드가 독립적인가?

**it끼리 독립적이게 만들면서 생기는 중복코드**

it끼리 독립적이다보면 반복되는 코드가 많아지는데, 반복되는 코드를 어떻게 처리할까?

```
인스턴스를 생성
인스턴스.add에 mock데이터 넘겨주기
인스턴스.size 확인
인스턴스.head 확인
```

**원래코드와 독립적이어야할 것 같다.**

아래의 코드와 같이 원본 코드의 class를 그대로 가져다 쓰니 add같은 함수를 사용할 때 테스트 로직에서 실행한 메서드가 원래 코드에 영향을 끼치는 문제가 발생했다. `우선 각 테스트마다 독립적으로 인스턴스를 만들어서 해당문제를 해결했다.`

```js
import { SignleLinkedList } from './app';

// 예시
let instance;
beforeEach(() => {
  intance = new SingleLinkedList();
});
```

3. 적절하게 테스트 하고 있는가

내가 작성한 테스트 항목들이 각 메서드를 올바르게 동작하기 위해 적절한가를 어떻게 체크할 수 있을까?
리뷰받는 방법밖에 없을까?

# 수도코드

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
