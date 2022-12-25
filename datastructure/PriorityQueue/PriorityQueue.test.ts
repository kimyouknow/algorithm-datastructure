import { PrioirtyQueue } from '@datastructure/PriorityQueue';

describe('Prioirty Queue ADT test', () => {
  let pq: PrioirtyQueue;
  let mockArr: number[];
  beforeEach(() => {
    pq = new PrioirtyQueue();
    mockArr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
  });
  it('Result of dequeue should be ascending order', () => {
    mockArr.forEach((v) => pq.enqueue(v));
    const pqRes = mockArr.map((v) => pq.dequeue());
    const ascMockArr = mockArr.sort((a, b) => b - a);
    expect(pqRes).toStrictEqual(ascMockArr);
  });
});
