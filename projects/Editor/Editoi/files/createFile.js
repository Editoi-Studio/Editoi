SERVER.files.createFile = ( directory, filename, content ) => {
  return new Promise(( resolve, reject ) => {
    if( filename && filename ){
      var dir = directory+'/'+filename

      if( FN.includes.disable( content ) ){

        if( DATA.fileDisabled && !DATA.fileDisabled.includes( filename ) ){

          DATA.fileDisabled.push( filename )
        }

      }else{

        if( DATA.fileDisabled ){

          DATA.fileDisabled = DATA.fileDisabled.filter(item => item !== filename)
        }
      }

      if( !fs.existsSync( directory ) ) FN.createDirRecursively(directory)
             
      content = content.replace(/^\s+|\s+$/g, '')
      fs.writeFile( dir, content, (err) => {
        if ( err ) throw err
        resolve( dir )
      })
    }
  })
}

FN.createDirRecursively = (dir) => {
  if(!fs.existsSync(dir)) {        
    FN.createDirRecursively(path.join(dir, ".."))
    fs.mkdirSync(dir)
  }
}