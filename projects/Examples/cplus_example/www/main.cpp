#include <iostream>
using namespace std;

int hello ()
{
  std::cout << "Hello4, world!\n";
  return 0;
}

int reading ()
{
  int Num1;
  int Num2;
  cout << "Reading first number...: ";
  cin >> Num1;
  cout << endl;
  cout << "Reading second number....: ";
  cin >> Num2;
  cout << endl;
  cout << "Total: " << Num1 + Num2;
  cout << endl;
  return 0;
}

int main ()
{
  hello();
  reading();
  return 0;
}

