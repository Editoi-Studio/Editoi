SERVER.files.execRun = () => {

  log("exec")

  var URL = process.cwd().split("\\").join("/") + "/projects/" +
      DATA.folderSelected + "/" + DATA.projectSelected +"/www/"

  var URLNormal = process.cwd() + "\\projects\\" + DATA.folderSelected +
      "\\" + DATA.projectSelected +"\\www\\"

  if( DATA.run.includes("%%") ){

    var split = DATA.run.split("%%")
    DATA.exec = split.join(URLNormal)

  }else if( DATA.run.includes("%") ){

    var split = DATA.run.split("%")
    DATA.exec = split.join(URL)

  }

  if( DATA.run.includes("cmd") ){

    SERVER.files.execCMD()

  }else{

    const child = exec( DATA.exec, (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    })
    }

  FN.alert.show( "Project Compiled!" )

}
