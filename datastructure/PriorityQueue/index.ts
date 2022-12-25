import { MaxHeap } from '@datastructure/Heap';

export class PrioirtyQueue extends MaxHeap {
  constructor() {
    super();
  }
  isEmpty() {
    const length = this.showEntireMinHeap().length;
    return length === 0;
  }
  enqueue(value: number) {
    return this.insert(value);
  }
  dequeue() {
    return this.poll();
  }
}

const mockArr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
const pq = new PrioirtyQueue();
mockArr.forEach((v) => pq.enqueue(v));
const pqRes = mockArr.map((v) => pq.dequeue());
console.log('pqRes', pqRes);
