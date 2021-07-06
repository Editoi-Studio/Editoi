

package main

import (
   // "bufio"
  "fmt"
  "os" 
  "strconv"
)

func prints(x string) string {
  fmt.Println(x)
  return x 
}

func parse_int(s string) int {
    i, err := strconv.Atoi(s)
    if err != nil {
        // handle error
        fmt.Println(err)
        os.Exit(2)
    }
  return i
}

func parse_str(s int) string {
  
  i := strconv.Itoa(s)
  return i
}

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

