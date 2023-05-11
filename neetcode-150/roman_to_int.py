def romanToInt(s: str) -> int:
    roman_to_int = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    total = 0
    prev_val = 0

    for char in s:
        value = roman_to_int[char]
        if value > prev_val:
            total += value - 2 * prev_val
        else:
            total += value
        prev_val = value

    return total


print(romanToInt('XIX'))
