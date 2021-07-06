import java.util.Scanner;

class Hello
{
  public static void world()
  {
    System.out.println("Hello Java"); 
  }
}

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

class Main {  
  public static void main(String args[]) {  

    Hello.world();
    Read.number();
  }  
}

