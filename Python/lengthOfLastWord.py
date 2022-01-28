"""

Given a string s consists of some words separated by some number of spaces, 
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.


>>> lengthOfLastWord("Hello World")
5

>>> lengthOfLastWord("   fly me   to   the moon  ")
4

>>> lengthOfLastWord("luffy is still joyboy")
6

>>> lengthOfLastWord("")
0

"""


def lengthOfLastWord(s):

    if s == "":
        answer = 0

    else:
        words = s.split()
        answer = len(words[-1])
    
    print(answer)



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')