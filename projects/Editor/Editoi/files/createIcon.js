SERVER.files.createIcon = ( dir ) => {

  var url = dir+"/www"

  var data = SERVER.files.copyFile( process.cwd() + "/editor/favicon.ico" )

  if ( !fs.existsSync( url ) ) fs.mkdirSync( url )

  SERVER.files.pastFile(url+"/favicon.ico", data)
}
