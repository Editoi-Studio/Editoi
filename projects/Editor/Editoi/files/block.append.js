
FN.block.append = ( data ) => {

  var components = FN.block.get( data )

  $("#"+data ).html( components )
}
