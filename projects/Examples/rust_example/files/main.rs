fn main() {
  
  hello();
  
  let number1 = parse_int( read("first") );
  let number2 = parse_int( read("second") );
  
  let soma = number1 + number2;
   
  println!("Total: {}", soma);
}
