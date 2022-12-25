export class MinHeap {
  private arr: Array<number>;
  constructor() {
    this.arr = []; // 0번 인덱스는 사용하지 않는다.
  }
  showEntireMinHeap() {
    return [...this.arr];
  }
  getParentIndex(i: number) {
    {
    }
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i: number) {
    return i * 2 + 1;
  }
  getRightChildIndex(i: number) {
    return i * 2 + 2;
  }
  private push(value: number) {
    this.arr.push(value);
    return this;
  }
  private swap(index1: number, index2: number) {
    const temp = this.arr[index1];
    this.arr[index1] = this.arr[index2];
    this.arr[index2] = temp;
    return this;
  }
  /**
   * 마지막에 this.arr에 삽입한 노드가 제자리로 찾아갈 수 있도록 하는 함수
   */
  private heapifyUp() {
    let currentIdx = this.arr.length - 1;

    // 현재 노드의 값이 현재 노드의 부모값보다 작으면 부모노드와 현재 노드를 교체
    while (this.arr[currentIdx] < this.arr[this.getParentIndex(currentIdx)]) {
      this.swap(currentIdx, this.getParentIndex(currentIdx));
      // 교체 이후 새로운 노드의 부모를 재할당
      currentIdx = this.getParentIndex(currentIdx);
    }
    return this;
  }
  /**
   * poll이후에 수정된 최상단노드가 올바른 자리로 찾아가게 하는 함수
   */
  private heapifyDown() {
    let currentIdx = 0;
    const count = this.arr.length;

    // 왼쪽 요소가 있을 때까지 검사
    while (this.getLeftChildIndex(currentIdx) < count) {
      const leftChildIdx = this.getLeftChildIndex(currentIdx);
      const rightChildIdx = this.getRightChildIndex(currentIdx);

      let smallerChildIdx = this.getLeftChildIndex(currentIdx);
      // 오른쪽 자식이 없으면 왼쪽 자식을 가장 작은 노드로 사용
      // 오른쪽 자식이 있으면 왼쪽 자식과 비교해서 가장 작은 노드 수정
      if (this.arr[rightChildIdx]) {
        smallerChildIdx =
          this.arr[rightChildIdx] < this.arr[leftChildIdx] ? rightChildIdx : leftChildIdx;
      }

      // 현재 탐색하고 있는 노드의 부모 노드가 탐색하고 있는 노드보다 값이 크다면 (= 우선 순위가 낮다면) 탐색 중인 노드를 대체한다.
      if (this.arr[smallerChildIdx] <= this.arr[currentIdx]) {
        this.swap(smallerChildIdx, currentIdx);
        currentIdx = smallerChildIdx;
      } else break;
    }

    return this;
  }
  insert(value: number) {
    return this.push(value).heapifyUp();
  }
  poll() {
    if (this.arr.length === 0) return undefined;
    if (this.arr.length === 1) return this.arr.pop();

    const maxValue = this.arr[this.arr.length - 1];
    const minValue = this.arr[0];
    this.arr.pop();

    this.arr[0] = maxValue;
    this.heapifyDown();
    return minValue;
  }
  find() {
    return this.arr[0];
  }
}

const minHeap = new MinHeap();
[3, 7, 2, 1, 5, 9, 10].forEach((v) => minHeap.insert(v));
