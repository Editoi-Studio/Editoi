class Read
{
  public static void number()
  {

    Scanner scan = new Scanner(System.in); 

    System.out.println("Reading first number");
    Integer number1 = scan.nextInt();  

    System.out.println("Reading second number");
    Integer number2 = scan.nextInt(); 

    Integer soma = number1 + number2;


    System.out.println("Total: " + soma);  
  }
}
