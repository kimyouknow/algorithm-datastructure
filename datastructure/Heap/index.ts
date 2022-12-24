export class MinHeap {
  private arr: Array<number | null>;
  constructor() {
    this.arr = [null]; // 0번 인덱스는 사용하지 않는다.
  }
  showEntireMinHeap() {
    return [...this.arr];
  }
  push(value: number) {
    this.arr.push(value);
    return this;
  }
}

const minHeap = new MinHeap();
minHeap.push(1);
console.log(minHeap.showEntireMinHeap());
