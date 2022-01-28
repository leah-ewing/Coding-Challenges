"""

Given an integer array nums where every element appears three times except for one, which appears exactly once. 
Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

>>> singleNumberII([2,2,3,2])
3

>>> singleNumberII([0,1,0,1,0,1,99])
99

"""

def singleNumberII(nums):

    nums_set = set()
    
    for num in nums:
        if num in nums_set:
            nums_set.remove(num)
        else:
            nums_set.add(num)

    answer = list(nums_set)[0]

    print(f'nums: {nums}')
    print(f'nums_set: {nums_set}')
    print(f'answer: {answer}')


singleNumberII([2,2,3,2])
print('-'*10)
singleNumberII([0,1,0,1,0,1,99])
print('-'*10)
singleNumberII([1,1,1,2,2,2,7,7,7,22])


# if __name__ == '__main__':
#     import doctest
#     if doctest.testmod().failed == 0:
#         print('\n🥳 ALL TESTS PASSED! YAY!\n')