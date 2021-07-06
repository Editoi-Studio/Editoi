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
