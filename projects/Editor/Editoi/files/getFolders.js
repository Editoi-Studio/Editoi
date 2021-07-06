SERVER.files.getFolders = ( dir ) => {
  return new Promise(( resolve, reject ) => {
    DATA.folders = ""
    fs.readdir( dir, ( err, files ) => { 
     DATA.folders = files.filter( item => !item.includes(".tmp") )
     resolve( DATA.folders )    
    })
  })
}