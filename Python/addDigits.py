"""
Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.

>>> addDigits(38)
2

Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

>>> addDigits(0)
0

"""



def addDigits(num):
    num_list = list(str(num))
    
    for i in range(len(num_list)):
        num_list[i] = int(num_list[i])

    while len(num_list) > 1:
        num_list = list(str(sum(num_list)))

        for i in range(len(num_list)):
            num_list[i] = int(num_list[i])

    print(num_list[0])



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')