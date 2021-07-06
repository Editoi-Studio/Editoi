FN.file.delete.start = (value) => {
  
  if( !DATA.lastSelected ) return 0

  var Data = DATA.project.plurality

  var d = confirm("Delete?")

  if( d == true ) {

    if( !DATA.lastSelected.includes(".") ){
   // if( FN.kanbanIsSelected( DATA.box0Selected ) ){
      DATA.lastElement.remove()
      return 0
    }

    FN.file.delete[ DATA.lastBoxSelected ]( Data )

    DATA.lastElement.remove()
    editor.setValue( "" )

    FN.project.removeFiles()
 

    log("Delete")
  }
}
