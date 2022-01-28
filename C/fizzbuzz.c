# include <stdio.h>

/*

For all numbers between 1-100 print the numbers where:
- if the number is divisible by 3, replace the number with "Fizz"
- if the number is divisible by 5, replace the number with "Buzz"
- if the number is divisible by both 3 and 5, replace the number with "FizzBuzz."

*/


int main() {
  for (int i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      printf("Fizz");
      if (i % 5 == 0) {
        printf("Buzz");
      }
    } else {
        printf("%i", i);
    } printf("\n");
  }
}


/*

Returns:

1
2
Fizz
4
5
Fizz
7
8
Fizz
10
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
20
Fizz
22
23
Fizz
25
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
35
Fizz
37
38
Fizz
40
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
50
Fizz
52
53
Fizz
55
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
65
Fizz
67
68
Fizz
70
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
80
Fizz
82
83
Fizz
85
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
95
Fizz
97
98
Fizz
100

*/