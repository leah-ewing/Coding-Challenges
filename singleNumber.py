"""
Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.


>>> singleNumber([2,2,1])
1

>>> singleNumber([4,1,2,1,2])
4

>>> singleNumber([1])
1

>>> singleNumber([1,0,1])
0

>>> singleNumber([1,3,1,-1,3])
-1

"""

def singleNumber(nums):

    multiples = []
    answer = None
    
    for x in range(len(nums)-1):
        y = x + 1
        
        for n in range(y, len(nums)):
            if nums[x] == nums[n] and nums[x] not in multiples:
                multiples.append(nums[x])

    for num in nums:
        if num not in multiples:
            answer = num

    print(answer)



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')