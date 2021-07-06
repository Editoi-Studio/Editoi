SERVER.files.getFileContents = ( value ) => {

  var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/files`

  SERVER.files.getFile( dir, value ).then( ( content ) => {

    if( content ) SERVER.files.getFileTypes( content, value )    
  })
}
