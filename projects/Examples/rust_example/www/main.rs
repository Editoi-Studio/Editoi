

use std::io;

fn hello() {
  println!("Hello, world!");
}

fn read (pos: &str) -> String {
  
  println!("Reading {} number:", pos);
  
  let mut number = String::new();
  io::stdin()
  .read_line(&mut number)
  .expect("failed to read from stdin");
  let a = String::from( number.trim() );
  a
}

fn parse_int(number: String) -> i32 {   
  let num: i32 = number.trim().parse()
   .expect("please give me correct string number!");
  num
}

fn main() {
  
  hello();
  
  let number1 = parse_int( read("first") );
  let number2 = read("second");  
  
  let soma = number1  + parse_int( number2 );
   
  println!("Total: {}", soma);
}

