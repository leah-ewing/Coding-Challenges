# """

# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# >>> ["flower","flow","flight"]
# 'fl'

# >>> ["dog","racecar","car"]
# ''

# """

def longestCommonPrefix(strs):
    string_list = []
    i = 0
    new_list = []
    word_set = set()

    if strs == [""]:
        answer = "''"

    else:
        while i < len(strs):
            middle_list = []
            for letter in strs[i]:
                middle_list.append(letter)
            new_list.append(middle_list)
            i += 1

        index = 0
        prefix_list = []
        middle_list = set()
        test_list = []
        pattern = True
        i = 0

        if len(new_list) == 1:
            answer = ''.join(new_list[0])

        if len(new_list) > 1:
            while i < len(new_list):
                if len(new_list[i]) == 0:
                    test_list.append(new_list[i])
                i += 1
            if len(test_list) > 0:
                answer = "''"
            else:
                while pattern == True:
                    for word in new_list:
                        if len(word) == 0:
                            pattern = False
                        else:
                            while index < len(new_list) and len(prefix_list) <= len(min(strs))-1:
                            # while len(new_list[index]) != 0:
                            # while len(prefix_list) <= len(min(strs))-1:
                                # print(len(min(strs)))
                                # print(new_list)
                                middle_list.add(new_list[index].pop(0))
                                index += 1
                            pattern = False
                            if len(middle_list) == 1:
                                prefix_list.extend(middle_list)
                                middle_list = set()
                            if len(middle_list) > 1:
                                pattern = False
                            index = 0
                    
                        answer = ''.join(prefix_list)

                        if len(answer) == 0:
                            answer = "''"

        print(answer)


longestCommonPrefix(["flower", "flow", "flight"])
longestCommonPrefix(["dog","racecar","car"])
longestCommonPrefix([""])
longestCommonPrefix(["a"])
longestCommonPrefix(["",""])
longestCommonPrefix(["","b"])
longestCommonPrefix(["aaa","aa","aaa"])
longestCommonPrefix(["ab", "a"])
longestCommonPrefix(["flower","flower","flower","flower"])


# if __name__ == '__main__':
#     import doctest
#     if doctest.testmod().failed == 0:
#         print('\n🥳 ALL TESTS PASSED! YAY!\n')