SERVER.files.getFile = ( dir, file ) => {
  return new Promise(( resolve, reject ) => {
    var text = undefined
    var filename = dir+"/"+file
    if(!fs.existsSync( filename )) {
      
      resolve("")

    }else{
      text = fs.readFileSync(filename,'utf8')
      text = text + "\n"
    }
    resolve(text)
  })
}
