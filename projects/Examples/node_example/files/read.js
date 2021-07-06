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
