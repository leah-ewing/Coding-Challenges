"""

Given a pattern and a string `s`, find if `s` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in `s`. Specifically:

- Each letter in pattern maps to exactly one unique word in s.
- Each unique word in s maps to exactly one letter in pattern.
- No two letters map to the same word, and no two words map to the same letter.

>>> wordPattern("abba", "dog cat cat dog")
True

>>> wordPattern("abba", "dog cat cat fish")
False

>>> wordPattern("aaaa", "dog cat cat dog")
False

>>> wordPattern("abc", "b c a")
True

>>> wordPattern("aba", "cat cat cat dog")
False

>>> wordPattern("aba", "dog cat cat")
False

"""


def wordPattern(pattern, s):
    pattern_list = list(pattern)
    s_list = s.split()

    pattern_set = list(set(pattern_list))
    s_set = list(set(s_list))

    if len(pattern_list) != len(s_list) or len(pattern_set) != len(s_set):
        return print(False)
    
    pattern_dict = {}

    for i in range(len(pattern_list)):
        if pattern_list[i] not in pattern_dict:
            pattern_dict[pattern_list[i]] = s_list[i]
        else:
            if pattern_dict[pattern_list[i]] != s_list[i]:
                return print(False)
            
    return print(True)

    
if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')