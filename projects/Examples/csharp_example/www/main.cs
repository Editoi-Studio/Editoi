using System;
using System.Windows.Forms;

class Hello
{
  public static void World() 
  {
    Console.WriteLine("Hello World!"); 
  }
}


class Read
{
  public static int Line(string pos) 
  {
    Console.WriteLine("Reading "+pos+" number");
    int number1;
    while(!int.TryParse(Console.ReadLine(), out number1)) {
      Console.WriteLine("Insert a integer number");
      Console.WriteLine("Reading first number");
    }
    return number1;
  }
}


namespace Main
{
  class Program
  {
    static void Main(string[] args)
    {
 
      Hello.World();

      int number1 = Read.Line("first");
      int number2 = Read.Line("second");
      int soma = number1 + number2;

      Console.WriteLine("Total: "+soma);    
  
    }
  }
}