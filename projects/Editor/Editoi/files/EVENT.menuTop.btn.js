EVENT.menuTop.btn.open = (event) => {  

  $("#menuAbout").hide()
  $("#menuOptions").hide()
  $(".menuNew").hide() 


  $(".menuOpen-selectTop").val( "Select folder" )
  $(".menuOpen-selectBottom").html( "Select project" )

  if( $(".menuOpen").is(":visible") ) $(".menuOpen").hide()
  else $(".menuOpen").show()

  FN.menuOpen.appendFolders(".menuOpen-selectTop")
}

EVENT.menuTop.btn.new = (event) => {  

  $("#menuAbout").hide()
  $("#menuOptions").hide()

  $(".menuOpen").hide()

  if( $(".menuNew").is(":visible") ) $(".menuNew").hide()
  else $(".menuNew").show()

  FN.menuOpen.appendFolders(".selectTopNew") 
}

EVENT.menuTop.btn.delete = (event) => {  

  log("Delete")

  if( !DATA.projectSelected ){

    alert("Select a file to delete")

    return 0      
  }

  FN.file.delete.start()
}


EVENT.menuTop.btn.render = (event) => {  

  log("Render")

  if( !DATA.projectSelected ){

    alert("Select a file to render")

    return 0      
  }

  if(!DATA.editorHide){
    DATA.editorHide = true
    $(".CodeMirror").hide()
    $("#markdown").show()

  }else{
    DATA.editorHide = false
    $("#markdown").hide()
    $(".CodeMirror").show()
  }

  FN.editor.render() 
}

EVENT.menuTop.btn.save = (event) => {  
  log("btn.save")
  FN.file.save() 
}

EVENT.menuTop.btn.run = (event) => {  
  log("btn.run")

  DATA.only = {}
  DATA.oldFileModule = ""  
  DATA.filesModule = {}
  
  if( DATA.lastSelected.includes(".html") ){

    DATA.run = false

  }else{
    DATA.run = true
  }

  log("Run")
  if( !DATA.projectSelected ){

    alert("Select a project to run")

  }else{
    SERVER.project.compile()
  }    

}

EVENT.menuTop.btn.about = (event) => { 

  $("#menuOptions").hide()
  $(".menuNew").hide() 
  $(".menuOpen").hide()

  if( $("#menuAbout").is(":visible") ) $("#menuAbout").hide()
  else $("#menuAbout").show()
  
  FN.menuAbout.checkUpdates()
}

EVENT.menuTop.btn.menuOptions = (event) => {  

  $("#menuAbout").hide()

  $(".menuNew").hide() 
  $(".menuOpen").hide()

  if( $("#menuOptions").is(":visible") ) $("#menuOptions").hide()
  else $("#menuOptions").show()
  
}