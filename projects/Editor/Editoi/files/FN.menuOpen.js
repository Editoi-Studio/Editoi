FN.menuOpen = {}

FN.menuOpen.appendFolders = async( div ) => {

  var folders = await SERVER.files.getFolders( DATA.directory )

  var options = ELEMENT.option( "Select folder" )

  for(let index in folders){
    var folder = folders[index]
    var template = ELEMENT.option( folder )
    options+=template
  }

  $( div ).html(options)
}
