"""

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

>>> reverseString(['h', 'e', 'l', 'l', 'o'])
['o', 'l', 'l', 'e', 'h']

>>> reverseString(['H', 'a', 'n', 'n', 'a', 'h'])
['h', 'a', 'n', 'n', 'a', 'H']

"""

def reverseString(s):
    i = 0
    
    while i < len(s):
        item = s.pop(-1)
        s.insert(i, item)
        i += 1
    
    print(s)
    

if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')