"""

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. 

More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. 

It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.


>>> removeElement([3,2,2,3], 3)
(2, [2, 2])

>>> removeElement([0,1,2,2,3,0,4,2], 2)
(5, [0, 1, 3, 0, 4])

>>> removeElement([], 0)
(0, [])

"""

def removeElement(nums, val):

    if len(nums) > 0:

        i = 0
        
        while i < len(nums)-1:
            if nums[i] == val:
                nums.pop(i)
            else:
                i += 1

        if nums[-1] == val:
            nums.pop(-1)

    answer = len(nums), nums

    print(answer)



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')