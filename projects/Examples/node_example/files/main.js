const main = async() => {
  
  const number1 = await read("first")
  const number2 = await read("second")
  const soma = parse(number1) + parse(number2) 
  console.log(`Total: ${soma}`)
  rl.close()
}

main()
