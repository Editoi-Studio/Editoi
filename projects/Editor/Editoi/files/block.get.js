FN.block.get = ( value ) => {

  var components = ""

  for( index in DATA[ value ] ){

    components+= ELEMENT.block( DATA[ value ][ index ], value )
  }

  return components
}
