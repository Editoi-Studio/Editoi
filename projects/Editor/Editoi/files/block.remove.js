FN.block.remove = ( data ) => {

  DATA[ data ] = ["ss.js", "file2.js", "file3.js", "file4.js"]

  var components = FN.block.get( data )

  $("#"+data ).html( components )
}
