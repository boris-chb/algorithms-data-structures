from typing import List
from typing import Dict
from pprint import pprint as print


def twoSum(nums: List[int], target: int) -> List[int]:
    seenPairs: Dict[int, int] = {}
    seenNums = seenPairs.keys()

    if len(nums) == 2:
        return [0, 1]

    for i, num in enumerate(nums):
        if target - num not in seenNums:
            seenPairs[num] = i
        else:
            return [i, seenPairs[target - num]]

    return [0, 0]


if __name__ == '__main__':
    testNums = [i for i in range(10)]
    testTarget = 15

    result = twoSum(testNums, testTarget)
    print(result)
