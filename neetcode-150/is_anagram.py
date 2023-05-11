

def is_anagram(s: str, t: str) -> bool:
    # check if t is an anagram of s
    # s = anagram, t= nagaram => True
    # s = bro, t = dude => false
    if not len(s) == len(t):
        return False

    s_letters = sorted(list(s))
    t_letters = sorted(list(t))

    if not s_letters == t_letters:
        return False

    return True


if __name__ == '__main__':
    result = is_anagram('asd', 'dsa')
    print(result)
