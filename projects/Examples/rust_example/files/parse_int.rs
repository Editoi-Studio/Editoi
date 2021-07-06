fn parse_int(number: String) -> i32 {   
  let num: i32 = number.trim().parse()
   .expect("please give me correct string number!");
  num
}
