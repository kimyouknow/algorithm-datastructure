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
  push(value: number) {
    this.arr.push(value);
    return this;
  }
  swap(index1: number, index2: number) {
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
}

const minHeap = new MinHeap();
minHeap.push(11).push(3).push(4).push(2).push(11).push(1);
console.log(minHeap.showEntireMinHeap());
