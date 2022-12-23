export class MinHeap {
  private arr: Array<number | null>;
  constructor() {
    this.arr = [null]; // 0번 인덱스는 사용하지 않는다.
  }
  showEntireMinHeap() {
    return [...this.arr];
  }
}
