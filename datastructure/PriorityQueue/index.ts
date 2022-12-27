import Heap, { Compare } from '@datastructure/Heap';

export class PrioirtyQueue extends Heap {
  constructor(compare: Compare) {
    super(compare);
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
const pq = new PrioirtyQueue((a, b) => a > b); // max
mockArr.forEach((v) => pq.enqueue(v));
const pqRes = mockArr.map((v) => pq.dequeue());
console.log('pqRes', pqRes);
