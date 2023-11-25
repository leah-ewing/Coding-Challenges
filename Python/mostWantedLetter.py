"""

Given a text, which contains different English letters and punctuation symbols, find the most frequent letter in the text. The letter returned must be in lower case.
Do not count punctuation symbols, digits and whitespaces, only letters

If you have two or more letters with the same frequency, return the letter that comes first in the alphabet. 
For example: "one" == "e"

Input: String
Output: String

>>> most_wanted_letter("Hello World!")
'l'

>>> most_wanted_letter("How do you do?")
'o'

>>> most_wanted_letter("One")
'e'

>>> most_wanted_letter("Oops!")
'o'

>>> most_wanted_letter("AAaooo!")
'a'

>>> most_wanted_letter("abe!")
'a'

"""


def most_wanted_letter(text):
    letters = "abcdefghijklmnopqrstuvwxyz"
    text = sorted(list(text.lower()))
    letter_frequency = dict()

    for letter in text:
        if letter in letters:
            if letter in letter_frequency:
                letter_frequency[letter] += 1
            else:
                letter_frequency[letter] = 1

    for letter in letter_frequency:
        if letter_frequency[letter] == max(letter_frequency.values()):
            return letter
        

if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n🥳 ALL TESTS PASSED! YAY!\n')