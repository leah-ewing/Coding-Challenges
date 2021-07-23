"""
Write a function that takes in two integers (n, p)

Return an number that represents the "p'th" integer
from a list containing all factors of "n".

If the index does not exist, return 0:

>>> pthFactor(1232145, 3)
5

>>> pthFactor(10, 3)
5

>>> pthFactor(10, 5)
0

>>> pthFactor(1, 1)
1

>>> pthFactor(22876792454961, 28)
7625597484987

>>> pthFactor(4, 0)
1

>>> pthFactor(0, 0)
0

>>> pthFactor(0, 5)
0

>>> pthFactor(1, 0)
1

>>> pthFactor(1, 5)
0

>>> pthFactor(15, 1)
1

>>> pthFactor(6557, 2)
79

>>> pthFactor(23, 2)
23

>>> pthFactor(1000000000000000, 5)
8

>>> pthFactor(24, 2)
2

>>> pthFactor(467685431, 1)
1

"""


def pthFactor(n, p):
    prime_factors = []
    factors = []
    current_num = 1

    if n == 0:
        answer = 0

    elif p == 1:
        answer = 1

    elif n == 1 and p > 1:
        answer = 0

    elif n == 1 or p == 0:
        answer = 1

    else:

        if current_num == 1:
            factors.append(1)
            current_num += 1

        while n not in prime_factors and n > 1:
            while n % current_num == 0:
                prime_factors.append(current_num)
                n = int(n/current_num)
            current_num += 1

            for num in range(2, current_num):
                while current_num % num == 0:
                    current_num += 1
            current_num = current_num

        prime_set = sorted(set(prime_factors))
        unique_primes = sorted(set(prime_factors))
        middle_list = []
        exponents = []
        index = 0

        while len(prime_set) > 1:
            while prime_factors[index] == prime_set[0]:
                middle_list.append(prime_factors[index])
                index += 1
            prime_set.pop(0)
            exponents.append(len(middle_list))
            middle_list = []

        if len(prime_set) == 1:
            for num in prime_factors:
                if num in prime_set:
                    middle_list.append(num)
            exponents.append(len(middle_list))
    
        middle_list = []

        for i in range(len(unique_primes)):
            for x in range(1, exponents[i]+1):
                for num in factors:
                    middle_list.append(unique_primes[i]**x * num)
            factors.extend(middle_list)
        
        if len(sorted(set(factors))) >= p:
            answer = sorted(set(factors))[p - 1]
        if len(sorted(set(factors))) < p:
            answer = 0


    return(answer)


if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print('\n✨ ALL TESTS PASSED!\n')
            