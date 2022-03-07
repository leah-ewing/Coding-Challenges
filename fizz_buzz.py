"""
For all numbers between 1-n print the numbers where:
- if the number is divisible by 3, replace the number with "Fizz"
- if the number is divisible by 5, replace the number with "Buzz"
- if the number is divisible by both 3 and 5, replace the number with "FizzBuzz."

"""

def fizz_buzz(n):
    string = ''

    for num in range(1, n):
        if num % 3 == 0:
            string += 'Fizz'

        if num % 5 == 0:
            string += 'Buzz'

        if num % 3 != 0 and num % 5 != 0:
            string += str(num)
        
        string += '\n'

    print(string)



fizz_buzz(100)