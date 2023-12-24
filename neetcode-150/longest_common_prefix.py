from typing import List


def longest_common_prefix(words: List[str]) -> str:
    prefix = ''

    for chars in zip(*words):
        if (len(set(chars)) == 1):
            prefix += chars[0]
        else:
            break
    
    return prefix


print(longest_common_prefix(["flower", "flow", "flight"]))
