"""

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

>>> isPalindrome("A man, a plan, a canal: Panama")
True

>>> isPalindrome("race a car")
False

>>> isPalindrome("")
True

>>> isPalindrome("0P")
False

"""


def isPalindrome(s):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    numbers = "0123456789"
    lowercase_s = s.lower()
    letter_list = []

    for letter in lowercase_s:
        if letter in alphabet or letter in numbers:
            letter_list.append(letter)

    new_string = ''.join(letter_list)
    reverse_string = ''.join(letter_list)[::-1]

    if new_string == reverse_string:
        return True
    else:
        return False



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')