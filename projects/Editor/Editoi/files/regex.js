SERVER.files.regexImport = ( content ) => {

  if( FN.includes.add( content ) ){

      var regExp = /add.+\)/g;
      var array = content.match(regExp)
      var files = []
      var code = ""

      for( index in array ){
         files.push( array[ index ].split(`"`)[1] )
      }
       /*
      var cut = files[files.length-1]+`")`
      var codeBottom = content.split(cut)[1]
      */
      var cut = content.split(`\")\n`)

      for(let x =0; x<files.length; x++){
        delete cut[x]
      }
    
      var codeBottom = cut.join("\n")
          
      for( index in files ){
        var filename = files[ index ]
        var dir = `${ DATA.directory }/`
   
        if( filename && filename.includes("."))
         code += fs.readFileSync(dir+filename,'utf8')
      }

      content = code + "\n" + codeBottom
  }

  return content
}
