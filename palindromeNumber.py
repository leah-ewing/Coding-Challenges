"""

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

>>> isPalindrome(121)
True

>>> isPalindrome(-121)
False

>>> isPalindrome(10)
False

>>> isPalindrome(-101)
False

>>> isPalindrome(31213)
True

>>> isPalindrome(0)
True

"""


def isPalindrome(x):

    if x < 0:
        answer = False
        
    if x >= 0:
        string_list = list(str(x))
        reversed_list = string_list[::-1]
        reversed_num = int(''.join(reversed_list))
        if x == reversed_num:
            answer = True
        else:
            answer = False

    return(answer)


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')