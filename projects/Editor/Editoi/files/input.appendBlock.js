FN.input.appendBlock = ( filename, box ) => {

  $( "#"+box ).append( ELEMENT.block( filename, box ) )
  FN.scrollToBottom( box )
}
