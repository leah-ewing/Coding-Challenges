"""

Given a number (n), return a list of numbers in range of n,
where if the number is divisible by 3, replace the number 
with "Fizz", if the number is divisible by 5, replace the 
number with "Buzz", and if the number is divisible by both 
3 and 5, replace the number with "FizzBuzz."


"""

def fizzBuzz(n):

    number_list1 = []
    number_list2 = []

    # # for num in range(1, n):
    # #     if num % 3 == 0 and num % 5 != 0:
    # #         number_list1.append("Fizz")
    # #     if num % 5 == 0 and num % 3 != 0:
    # #         number_list1.append("Buzz")
    # #     if num % 3 == 0 and num % 5 == 0:
    # #         number_list1.append("FizzBuzz")
    # #     if num % 3 != 0 and num % 5 != 0:
    # #         number_list1.append(num)

    # for num in range(1, n+1):
    #     if num % 3 == 0:
    #         if num % 5 == 0:
    #             number_list1.append("FizzBuzz")
    #             print("FizzBuzz")
    #         else:
    #             number_list1.append("Fizz")
    #             print("Fizz")
    #     elif num % 5 == 0:
    #         number_list1.append("Buzz")
    #         print("Buzz")
    #     else:
    #         number_list1.append(num)
    #         print(num)
    # # print(number_list1)

    
    # #--------------------------------

    # i = 1

    # if n == 0:
    #     answer = 0

    # else:
    #     while i < n+1:
    #         if i % 3 == 0 and i % 5 != 0:
    #             number_list2.append("Fizz")
    #         if i % 5 == 0 and i % 3 != 0:
    #             number_list2.append("Buzz")
    #         if i % 3 == 0 and i % 5 == 0:
    #             number_list2.append("FizzBuzz")
    #         if i % 3 != 0 and i % 5 != 0:
    #             number_list2.append(i)
    #         i += 1
    #     answer = number_list2

    # x = 3
    # p = 5

    # for num in range(1, n+1):
    #     if num % n == 0:
    #         if num % p == 0:
    #             number_list1.append("FizzBuzz")
    #             print("FizzBuzz")
    #         else:
    #             number_list1.append("Fizz")
    #             print("Fizz")
    #     elif num % p == 0:
    #         number_list1.append("Buzz")
    #         print("Buzz")
    #     else:
    #         number_list1.append(num)
    #         print(num)

    for num in range(1, n+1):

        answer = ""

        if num % 3 == 0:
            answer = answer + "Fizz"
        if num % 5 == 0:
            answer = answer + "Buzz"
        if answer == "":
            answer = num

        print(answer)
        
        


    
    # print(answer)

    # if number_list1 == number_list2:
    #     print("YAS!")

fizzBuzz(100)