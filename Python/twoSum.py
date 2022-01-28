"""

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



>>> twoSum([3, 2 ,4], 6)
[1, 2]

>>> twoSum([3, 3], 6)
[0, 1]

>>> twoSum([2, 7, 11, 15], 9)
[0, 1]

>>> twoSum([2, 5, 5, 11], 10)
[1, 2]

>>> twoSum([3, 2, 3], 6)
[0, 2]

"""


def twoSum(nums, target):
    
    index_list = []
    new_list = []

    for i in range(len(nums)):
        index_list.append(i)
    
    for i in index_list:
        for j in range(len(nums)):
            if nums[i] + nums[j] == target and i != j:
                new_list.append(i)

    return(new_list)



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')
        