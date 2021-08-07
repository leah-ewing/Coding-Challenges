"""

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, 
and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.


>>> plusOne([1, 2, 3])
[1, 2, 4]

>>> plusOne([4,3,2,1])
[4, 3, 2, 2]

>>> plusOne([0])
[1]

>>> plusOne([9])
[1, 0]

>>> plusOne([5, 6, 7, 8, 9])
[5, 6, 7, 9, 0]

"""

def plusOne(digits):

    digit_list = []

    for digit in digits:
        digit_list.append(str(digit))
    
    digits = int(''.join(digit_list))
    digits += 1
    digits = list(str(digits))

    answer = []

    for digit in digits:
        answer.append(int(digit))

    print(answer)




if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')