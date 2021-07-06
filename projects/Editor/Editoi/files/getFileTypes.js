SERVER.files.getFileTypes = ( content, fileName ) => {

  if( FN.includes.disable( content ) ){

    if( DATA.fileDisabled == undefined ) DATA.fileDisabled = []

    if( !DATA.fileDisabled.includes(fileName) ) {

      DATA.fileDisabled.push( fileName )
    }
    return 0
  }
  
  let s = fileName.split(".")
  let length = s.length
  let extension = s[length-1]
  
  if( FN.includes.only( content ) ){
    var c = content.split("\n") 
    delete c[0]
    c = c.join("\n")
    DATA.only[extension] = c
  }
  
  
  if( DATA.project.plurality.files.includes( fileName ) && 
      FN.includes.normal( content ) && DATA.oldFileModule != fileName ) {
    
      DATA.oldFileModule = fileName //start module
  }else if( DATA.project.plurality.files.includes( fileName ) && 
            !FN.includes.normal( content ) ) { 
      DATA.oldFileModule = "" //end module
  }
  
  
  if( DATA.oldFileModule ){
     
    if( !DATA.filesModule[DATA.oldFileModule] ) DATA.filesModule[DATA.oldFileModule] = ""
    DATA.filesModule[DATA.oldFileModule] = DATA.filesModule[DATA.oldFileModule] + ( content + "\n" )
    
  }else{
    
    DATA.extension = extension
    if( !DATA.archives[extension] ) DATA.archives[extension] = ""
    if( DATA.only[extension] ) DATA.archives[extension] = DATA.only[extension] 
    else DATA.archives[extension] = DATA.archives[extension] + ( content + "\n" )


  }
  
 // DATA.oldFileModule = ""  
  //DATA.filesModule = {}
  
  return 0
  

       if( fileName.includes(".html") ) SERVER.files.getFileHTML( content, extension )
  else if( fileName.includes(".css") ) SERVER.files.getFileCSS( content, extension ) 
  else if( fileName.includes(".js") ) SERVER.files.getFileJS( content, extension )
  else if( fileName.includes(".txt") ) SERVER.files.getFileTXT( content, extension ) 
  else if( fileName.includes(".run") ){
    if( !DATA.only[extension] ) DATA.run = content
    else DATA.run = DATA.only[extension]
  } 
  else{
    DATA.extension = extension
    if( !DATA.archives[extension] ) DATA.archives[extension] = ""
    if( DATA.only[extension] ) DATA.archives[extension] = DATA.only[extension] 
    else DATA.archives[extension] = DATA.archives[extension] + ( content + "\n" )
  }
}

SERVER.files.getFileHTML = ( content, extension ) => {
  
  if( DATA.only[extension] ) DATA.html = DATA.only[extension]
  else DATA.html = DATA.html + ( content + "\n" )  
} 

SERVER.files.getFileCSS = ( content, extension ) => {
  
  if( FN.includes.add( content ) ){

    content = SERVER.files.regexImport( content )
  }
  if( DATA.only[extension] ) DATA.css = DATA.only[extension]
  else DATA.css = DATA.css + ( content + "\n" )
}

SERVER.files.getFileJS = ( content, extension ) => {
  
  if( FN.includes.add( content ) ){

    content = SERVER.files.regexImport( content )
  }
  if( DATA.only[extension] ) DATA.js = DATA.only[extension]
  else DATA.js = DATA.js + ( content + "\n" )
}

SERVER.files.getFileTXT = ( content, extension ) => {
  if( DATA.only[extension] ) DATA.txt = DATA.only[extension]
  else DATA.txt = DATA.txt + ( content + "\r\n" )
}
/*
 
SERVER.files.getFileTypes = ( content, value ) => {

  if( SERVER.files.includeDisable( content ) ){

    if( DATA.fileDisabled == undefined ) DATA.fileDisabled = []

    if( !DATA.fileDisabled.includes(value) ) {

      DATA.fileDisabled.push( value )
    }
    return 0
  }
  
  let s = value.split(".")
  let length = s.length
  let extension = s[length-1]
  
  if( SERVER.files.includeOnly( content ) ){
      
    DATA.only[extension] = content
  }
  
  SERVER.files.getFileType( content, extension )

}


SERVER.files.getFileType = ( content, extension ) => {
  
  if( SERVER.files.includesImport( content ) ){

    content = SERVER.files.regexImport( content )
  }
  if( DATA.only[extension] ) DATA[extension] = DATA.only[extension]
  else DATA[extension] = DATA[extension] + ( content + "\n" )
}
 */