func main() {
  prints("Hello, World!")
  
  var number1, number2, sum int    
  fmt.Print("Reading first number: ")
  fmt.Scan(&number1)
  fmt.Print("Reading second number: ")
  fmt.Scan(&number2)
  
  sum = number1 + number2
  
 
  fmt.Println("Total: ",sum)
 
  os.Exit(0) 
}