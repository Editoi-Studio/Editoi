#include <stdio.h>

int hello(){

  printf("Hello world2 \r\n");

  return 0;
}

int reading(){

  int num1, num2, soma;
  
  printf("Reading first number...");
  scanf("%i", &num1);
  
  printf("Reading second number...");
  scanf("%i", &num2);
  
  soma = num1 + num2;
  
  printf( "Total: %i\n", soma );

  return 0;
}

int main(){

  hello();
  reading();

  return 0;
}