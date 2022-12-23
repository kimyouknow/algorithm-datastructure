import { MinHeap } from '@datastructure/Heap';

describe('Heap datastructure test', () => {
  describe('Initialize Heap', () => {
    it('Create Heap instance', () => {
      const minHeap = new MinHeap();
      expect(minHeap).toBeInstanceOf(MinHeap);
      expect(minHeap.showEntireMinHeap()).toStrictEqual([null]);
    });
  });
});
