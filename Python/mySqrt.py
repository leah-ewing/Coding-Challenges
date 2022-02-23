"""

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5

>>> mySqrt(4)
2

>>> mySqrt(8)
2

>>> mySqrt(16)
4

>>> mySqrt(0)
0


"""


def mySqrt(x):
    answer = 0
    n = x

    if x == 0:
        answer = 0
    else:
        while answer == 0:
            for num in range(1, int(n/2) + 1):
                if num*num == n:
                    answer = num
            n += 1

        if n > x+1:
            answer -= 1

    print(answer)



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')