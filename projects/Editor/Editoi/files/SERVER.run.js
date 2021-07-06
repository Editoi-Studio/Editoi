SERVER.run = async() => {
  
  await SERVER.files.generateFileServer()
  const { exec } = require('child_process');
  exec('node server.js', { detached: true, cwd: "./" }, (err, stdout, stderr) => {  //, cwd: ""

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)

    if (err) {
      console.log("err")
      return;
    }

  })
  
  log("Running server -> localhost:9001")
}
