// Return a random number between 1 and 20.

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {
  srand(time(NULL));
  int randomNumber = rand() % 20 + 1;
  printf("%i", randomNumber);
}