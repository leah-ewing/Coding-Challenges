/*

Prompt the user to input a number between 1800-10000
Return whether or not the year was a leap year.

*/

#include <stdio.h>
#include <stdbool.h>

bool is_leap_year(int year) {
  if (year % 4 != 0) {
    return false;
  } else if (year % 100 != 0) {
    return true;
  } else if (year % 400 != 0) {
    return false;
  } else {
    return true;
  }
}

int main() {
  int year;
  printf("Input a year between 1800 and 10000\n");
  scanf("%i", &year);
  bool isLeapYear = is_leap_year(year);
  if (isLeapYear == true) {
    printf("Leap Year\n");
  } else {
    printf("Not Leap Year\n");
  }
}