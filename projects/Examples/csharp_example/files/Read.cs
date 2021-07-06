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
