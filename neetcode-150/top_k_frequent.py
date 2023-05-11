from typing import List
from collections import defaultdict, Counter
from random import randint
import heapq


def topKFrequent(nums: List[int], k: int) -> List[int]:
    frequencies = defaultdict(int)

    for num in nums:
        frequencies[num] += 1

    # sort numbers by their frequency
    sorted_items = sorted(frequencies.items(),
                          key=lambda x: x[1],
                          reverse=True)

    # get numbers from k sorted
    top_k = [item[0] for item in sorted_items[:k]]
    return top_k


def top_k_heapified(nums: List[int], k: int) -> List[int]:
    frequencies = defaultdict(int)

    for num in nums:
        frequencies[num] += 1

    heap = []

    for num, frequency in frequencies.items():
        # store frequency first, for heappop to sort by it when removing!
        heapq.heappush(heap, (frequency, num))

        if len(heap) > k:
            # == when heap is bigger than k, remove the smallest frequency number
            heapq.heappop(heap)

    return [num for frequency, num in heap]


def top_k(nums: List[int], k: int) -> List[int]:
    counter = Counter(nums)
    return heapq.nlargest(k, counter.keys(), key=lambda x: counter[x])


if __name__ == '__main__':
    nums = [randint(1, 20) for _ in range(20)]
    k = randint(1, 5)
    result = top_k([1, 1, 1, 1, 2, 2, 2, 3, 3, 3,
                    3, 3, 4, 4, 4, 4, 4, 6, 7, 8], 3)
    print(result)
    # print(f'nums = {nums}\ntop {k} frequent: {result}')
