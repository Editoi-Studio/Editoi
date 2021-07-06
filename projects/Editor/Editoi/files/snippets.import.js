FN.snippets.import = ( content ) => {

  var regExp = /import.+\)/g;
  var array = content.match(regExp)
  var files = []
  var code = ""

  for( index in array ){
    files.push( array[ index ].split(`"`)[1] )
  }

  var fileURL = ""

  for( index in files ){
    fileURL = files[ index ]
  }

  FN.editor.import( fileURL )
}
