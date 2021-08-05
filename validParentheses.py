""" 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

>>> isValid("()")
True

>>> isValid("()[]{}")
True

>>> isValid("(]")
False

>>> isValid("([)]")
False

>>> isValid("{[]}")
True

>>> isValid("")
False

>>> isValid("((")
False

>>> isValid("(){}}{")
False

"""

def isValid(s):

    bracket_list = ['(', ')', '[', ']', '{', '}']
    brackets = []

    left = ['(', '[', '{']
    right = [')', ']', '}']

    new_list = []
    answer = True

    if s == "" or len(s) == 1:
        answer = False
    
    else:
        for symbol in s:
            if symbol in bracket_list:
                brackets.append(symbol)

            while len(brackets) > 0:
                if len(new_list) == 0:
                    if brackets[0] in right:
                        answer = False
                        break
                    else:
                        new_list.append(brackets.pop(0))
                else:
                    if brackets[0] in left:
                        new_list.append(brackets.pop(0))
                    elif brackets[0] in right:
                        right_index = bracket_list.index(new_list[-1]) + 1
                        if brackets[0] == bracket_list[right_index]:
                            new_list.pop(-1)
                            brackets.pop(0)
                        else:
                            answer = False
                            break
    
    if len(new_list) > 0:
        answer = False

    print(answer)


# isValid("()") # => true
# print("-"*10)
# isValid("()[]{}") # => true
# print("-"*10)
# isValid("(]") # => false
# print("-"*10)
# isValid("([)]") # => false
# print("-"*10)
# isValid("") # => false
# print("-"*10)
# isValid("(abc){}") # => true
# print("-"*10)
# isValid("((") # => False



if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')
