FN.snippets.insert = ( lineContent ) => {

  for( index in DATA.snippets ){

    if( lineContent.includes( DATA.snippets[ index ]["snip"] ) ){

      if( lineContent.includes("import") ) FN.snippets.import( lineContent )
      else{
        FN.editor.deleteLine();
        FN.editor.insertLine( DATA.snippets[ index ]["text"] )
      }
    }
  }
}
