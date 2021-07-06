
FN.file.save = () => {

  log("Save")

  if( !DATA.projectSelected ){

    alert("Select a project to save")

    return 0      
  }

  if( !DATA.save && 
     DATA.folderSelected != "Select project" && 
     DATA.projectSelected != "Select project" && 
     DATA.lastSelected ){

    DATA.save = 1

    var editorData = editor.getValue()

    if( editorData ){
      DATA.lastElement.addClass("file").addClass("file-selected")
      DATA.lastElement.removeClass("folder").removeClass("folder-over").removeClass("folder-selected")
      DATA.project.plurality.all[ DATA.lastSelected ] = 1
    }else{
      DATA.lastElement.addClass("folder").addClass("folder-selected")
      DATA.lastElement.removeClass("file").removeClass("file-over").removeClass("file-selected")
      DATA.project.plurality.all[ DATA.lastSelected ] = 0
    }

    var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/files`
    var fileName = DATA.lastSelected

    SERVER.files.createFile( dir, fileName, editorData ).then(function(){

      log("File saved")

      DATA.project.plurality.fileDisabled = DATA.fileDisabled
      // FN.kanbanSave()
      FN.project.save()
    })

    FN.alert.show( "Project saved" )

    setTimeout(function(){
      FN.alert.hide()
      DATA.save = 0
      DATA.unlock = true
    }, 1300)
  }

}
