"""
Given a signed 32-bit integer x, return x with its digits reversed. 

If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

>>> reverse(123)
321

>>> reverse(-321)
-123

>>> reverse(120)
21

>>> reverse(0)
0

>>> reverse(1534236469)
0

"""

def reverse(x):

    string_list = list(str(x))
    reverse_list = []
    new_list = []

    if x == 0:
        answer = 0
 
    if x > 0:
        for num in string_list:
            reverse_list.append(num)
        new_list.extend(reverse_list[::-1])
        reversed_num = int(''.join(new_list))

        if reversed_num > 2147483647:
            answer = 0
        else:
            answer = reversed_num

    if x < 0:
        for num in string_list:
            reverse_list.append(num)
        reverse_list.pop(0)
        new_list.extend(reverse_list[::-1])
        number = int(''.join(new_list))
        reversed_num = number - number*2

        if reversed_num < -2147483647:
            answer = 0
        else:
            answer = reversed_num
    
    return(answer)



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')