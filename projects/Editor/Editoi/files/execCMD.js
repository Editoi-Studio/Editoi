SERVER.files.execCMD = () => {
  
  DATA.prog = DATA.run.split("cmd ")[1]
  DATA.commands = DATA.prog.split(" ")
  DATA.call = DATA.commands[0]
  DATA.commands = DATA.commands.filter( el => el != DATA.commands[0])

  let childProcess = require('child_process').spawn(
    DATA.call, DATA.commands
  )

  childProcess.stdout.on('data', function(data) {

    console.log(data.toString('utf8'));
  })

  childProcess.stderr.on("data", function (data) {

    console.log(data.toString('utf8'));
  })

}
