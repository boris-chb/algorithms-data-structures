from typing import List


def longest_common_prefix(strs: List[str]) -> str:
    if not strs:
        return ''

    prefix = ''

    for chars in zip(*strs):
        if len(set(chars)) == 1:
            prefix += chars[0]
        else:
            break

    return prefix


print(longest_common_prefix(["flower", "flow", "flight"]))
