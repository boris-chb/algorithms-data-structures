
def isPalindrome(x: int) -> bool:
  # negative numbers, or numbers ending with 0 except for 0
    if x < 0 or (x % 10 == 0 and x != 0):
        return False

    reversed_num = 0
    original_num = x

    print('digit | original_num | reversed_num')
    while original_num > 0:
        digit = original_num % 10
        original_num //= 10
        reversed_num = reversed_num * 10 + digit
        print(digit, original_num, reversed_num)

    return reversed_num == x


if __name__ == '__main__':
    print(isPalindrome(12321))
