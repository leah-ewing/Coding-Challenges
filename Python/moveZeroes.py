"""

Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

>>> moveZeroes([0, 1, 0, 3, 12])
[1, 3, 12, 0, 0]

>>> moveZeroes([0])
[0]

"""


def moveZeroes(nums):
    nums_not_zero = 0

    for i in range(len(nums)):
        if nums[i] != 0:
            nums_not_zero += 1

    i = 0

    while i < nums_not_zero:
        if nums[i] == 0:
            nums.pop(i)
            nums.append(0)
        else:
            i += 1

    print(nums)



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')