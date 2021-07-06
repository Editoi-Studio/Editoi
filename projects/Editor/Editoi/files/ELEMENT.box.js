ELEMENT.box = ( data, classe ) => {

  if( !classe ) classe = ""

  var components = FN.block.get( data )

  var t = gg({
    id: data,
    class: `leftMT dark scrollbar noSelect sortable-${data} `+classe,
    html: components,
    style:`
max-height: calc( 160px - 32px - 21px );
min-height: calc( 160px - 32px - 21px );

`
  })

  return t
}


