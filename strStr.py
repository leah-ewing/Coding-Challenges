"""

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Return 0 when needle is an empty string.

>>> strStr("hello", "ll")
2

>>> strStr("aaaaaa", "aabb")
-1

>>> strStr("", "")
0

>>> strStr("aaa", "aaaa")
-1

>>> strStr("a", "a")
0

>>> strStr("mississippi", "issip")
4

"""


def strStr(haystack, needle):

    if len(haystack) == 0 or len(needle) == 0:
        answer = 0
    if len(needle) > len(haystack):
        answer = -1
    if len(needle) == len(haystack):
        if needle == haystack:
            answer = 0
        else:
            answer = -1

    if len(needle) < len(haystack):
        if needle in haystack:
            j = 0
            while j < len(haystack):
                i = len(needle) + j
                haystack_slice = haystack[j:i]
                if haystack_slice != needle:
                    j += 1
                if haystack_slice == needle:
                    answer = j
                    break
        else:
            answer = -1

    print(answer)




# strStr("hello", "ll") # => 2
# strStr("aaaaaa", "aabb") # => -1
# strStr('mississippi', 'issip') # => 4


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')
