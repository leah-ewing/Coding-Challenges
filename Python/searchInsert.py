"""

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

>>> searchInsert([1,3,5,6], 5)
2

>>> searchInsert([1,3,5,6], 2)
1

>>> searchInsert([1,3,5,6], 7)
4

>>> searchInsert([1,3,5,6], 0)
0

>>> searchInsert([1], 0)
0

>>> searchInsert([2, 3, 4, 7, 8, 9], 5)
3

>>> searchInsert([100, 200, 300, 400], 50)
0

"""


def searchInsert(nums, target):
    
    if target == 0:
        answer = 0
    else:
        if target in nums:
            answer = nums.index(target)
        else:
            if target > max(nums):
                answer = len(nums)
            elif target < min(nums):
                answer = 0
            else:
                for i in range(len(nums)):
                    if target > nums[i] and target < nums[i + 1]:
                        answer = i + 1

    print(answer)
    


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')