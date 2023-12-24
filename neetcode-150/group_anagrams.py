from typing import List
from is_anagram import is_anagram
from collections import defaultdict


def groupAnagramsWtf(strs: List[str]) -> List[List[str]]:
    # crap
    current_item = 0
    anagram_pairs = []
    while current_item < len(strs) - 2:
        current_pairs = []
        for i, str in enumerate(strs[1:], start=1):
            current_string = strs[current_item]
            current_pairs.append(current_string)
            is_pair = is_anagram(current_string, str)
            if is_pair:
                current_pairs.append(str)
        anagram_pairs.append(current_pairs)

        print(f'{strs[current_item]}')
        current_item += 1

    return anagram_pairs


def groupAnagramsTooHard(strs: List[str]) -> List[List[str]]:
  # almost worked (using stack)

    anagramPairs = []

    # While there are strings to check
    while (len(strs) != 0):
        # pop the last one and check anagram against it
        strToCheck = strs.pop()
        currentPairs = [strToCheck]

        for i, currentStr in enumerate(strs):
            if is_anagram(currentStr, strToCheck):
                currentPairs.append(strs.pop(i))

        anagramPairs.append(currentPairs)

    return anagramPairs






def groupAnagrams(strs: List[str]) -> List[List[str]]:
    anagrams = defaultdict(list)

    for word in strs:
        key = ''.join(sorted(word))
        anagrams[key].append(word)
    
    return [*anagrams.values()]



if __name__ == '__main__':
    testStrs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    result = groupAnagrams(testStrs)
    print(result)
