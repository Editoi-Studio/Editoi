FN.editor.import = ( fileURL ) => {

  var split = fileURL.split("/")
  var url = DATA.directory + "/" + split[0] + "/" + split[1]
  var package = "/package.json"
  var fname = split[3]
  var code = JSON.parse( fs.readFileSync( url+package,'utf8' ) ).plurality

  if( code.p0[ fname ] ) FN.editor.importP0( code, url, fname )
}

FN.editor.importP0 = ( code, url, fname ) => {

  for( index in code.p0[ fname ] ){

    var block = code.p0[ fname ][ index ]

    if( !JSON.stringify( DATA.project.plurality.all ).includes( block ) ){

      var newFileURL = url + "/files/" + block
      var fileContent = fs.readFileSync( newFileURL,'utf8' )
      var directory = DATA.directory + "/" + DATA.folderSelected + "/" + DATA.project.name + "/files"

      SERVER.files.createFile( directory, block, fileContent )

      if( fileContent ) DATA.project.plurality.all[ block ] = 1
      else DATA.project.plurality.all[ block ] = 0

      FN["inputBox1"]( block )
    }
  }
}
