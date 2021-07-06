let start = async() => {

  await SERVER.files.getFolders( DATA.directory )
  
  $("#loader").hide()
  // $("#root").append( TEMPLATE.menuTop() )  
  // $("#root").append( TEMPLATE.menuNew() )
  // $("#root").append( TEMPLATE.menuOpen() )

  get("#root").innerHTML = TEMPLATE.main()
  
  FN.box.sortable.start()
  
  FN.editor.start()

  $(".menuOpen").hide()
  $(".menuNew").hide()
  $(".menuOptions").hide()
  $(".menuAbout").hide()
  
  FN.snippets.load()
  
  FN.project.slotStart() 
  
  FN.menuOptions.start()
}

start()