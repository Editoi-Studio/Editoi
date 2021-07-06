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