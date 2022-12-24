import { MinHeap } from '@datastructure/Heap';

describe('Heap datastructure test', () => {
  describe('Initialize Min Heap', () => {
    it('Create Heap instance', () => {
      const minHeap = new MinHeap();
      expect(minHeap).toBeInstanceOf(MinHeap);
      expect(minHeap.showEntireMinHeap()).toStrictEqual([null]);
    });
  });
  describe('Push: push new value to Min Heap', () => {
    let minHeap: MinHeap;
    let spyOnPush: jest.SpyInstance;
    const mockValue = 4;
    beforeEach(() => {
      minHeap = new MinHeap();
      spyOnPush = jest.spyOn(minHeap, 'push');
      minHeap.push(mockValue);
    });
    afterEach(() => {
      spyOnPush.mockClear();
    });
    it('Push method should be in call with 1 param', () => {
      expect(spyOnPush).toBeCalledWith(mockValue);
      expect(spyOnPush.mock.calls[0].length).toBe(1);
    });
    it("Instance arr's last value should be equal with param", () => {
      const minHeapArr = minHeap.showEntireMinHeap();
      expect(minHeapArr[minHeapArr.length - 1]).toBe(mockValue);
    });
  });
  describe('Swap: switch index of node1 and node2', () => {
    let minHeap: MinHeap;
    let spyOnSwap: jest.SpyInstance;
    const node1 = 3;
    const node2 = 4;
    const node3 = 5;
    const idx1 = 1;
    const idx2 = 2;
    let prevArr: Array<number | null>;
    let nextArr: Array<number | null>;
    let prevIndex1: number;
    let prevIndex2: number;
    beforeEach(() => {
      minHeap = new MinHeap();
      spyOnSwap = jest.spyOn(minHeap, 'swap');
      minHeap.push(node1).push(node2).push(node3);
      prevArr = minHeap.showEntireMinHeap();
      prevIndex1 = prevArr[1] as number;
      prevIndex2 = prevArr[2] as number;
      minHeap.swap(idx1, idx2);
      nextArr = minHeap.showEntireMinHeap();
    });
    afterEach(() => {
      spyOnSwap.mockClear();
    });
    it('Swap method should be call with 2 number param', () => {
      expect(spyOnSwap).toBeCalledWith(idx1, idx2);
      expect(typeof spyOnSwap.mock.calls[0][0]).toBe('number');
      expect(typeof spyOnSwap.mock.calls[0][1]).toBe('number');
    });
    it('The index of the nodes should be changed correctly ', () => {
      const nextIndex1 = nextArr[1];
      const nextIndex2 = nextArr[2];
      expect(prevIndex1).toBe(nextIndex2);
      expect(prevIndex2).toBe(nextIndex1);
    });
    it('The length of Arr should be same after run swap method', () => {
      const nextArr = minHeap.showEntireMinHeap();
      expect(prevArr.length).toBe(nextArr.length);
    });
  });
});
