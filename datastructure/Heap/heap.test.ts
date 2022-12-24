import { MinHeap } from '@datastructure/Heap';

describe('Heap datastructure test', () => {
  describe('Initialize Min Heap', () => {
    it('Create Heap instance', () => {
      const minHeap = new MinHeap();
      expect(minHeap).toBeInstanceOf(MinHeap);
      expect(minHeap.showEntireMinHeap()).toStrictEqual([null]);
    });
  });
  describe('Push value to Min Heap', () => {
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
});
