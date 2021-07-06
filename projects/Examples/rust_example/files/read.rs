fn read (pos: &str) -> String {
  
  println!("Reading {} number:", pos);
  
  let mut number = String::new();
  io::stdin()
  .read_line(&mut number)
  .expect("failed to read from stdin");
  let a = String::from( number.trim() );
  a
}
