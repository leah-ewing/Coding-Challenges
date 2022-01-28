"""

Given a number (n), return a list of numbers in range of n,
where if the number is divisible by 3, replace the number 
with "Fizz", if the number is divisible by 5, replace the 
number with "Buzz", and if the number is divisible by both 
3 and 5, replace the number with "FizzBuzz."


"""

def fizzBuzz(n):

    for num in range(1, n+1):

        answer = ""

        if num % 3 == 0:
            answer += "Fizz"
            if num % 5 == 0:
                answer += "Buzz"
        else:
            answer += str(num)

        print(answer)


fizzBuzz(100)