FN.snippets.load = () => {

  var file = "snippets.json"
  var dir = `${ DATA.directory }/Editor/snippets/files`

  SERVER.files.getFile( dir, file ).then( ( content ) => {

    var snip = content;
    var file = JSON.parse( snip )

    for(let index in file){

      var key = Object.keys( file[ index ] )

      FN.snippets.create( key[0], file[ index ][ key[0] ] )
    }
  })
}