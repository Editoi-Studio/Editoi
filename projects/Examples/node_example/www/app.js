

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("close", function() {
    console.log("\nExit")
    process.exit(0)
});

const read = pos => {
  return new Promise(( resolve, reject ) => {
    rl.question(`Reading ${pos} number: `, function(number) {
      resolve( number )
    });
  });
}

const parse = string => Number.parseInt( string )

const main = async() => {
  const number1 = await read("first")
  const number2 = await read("second")
  const soma = parse(number1) + parse(number2) 
  console.log(`Total: ${soma}`)
  rl.close()
}

main()

