EVENT.menuOpen = {}

EVENT.menuOpen.selectFolder = () => {
  
  var dir = DATA.directory + "/" + $(".menuOpen-selectTop").val()  

  SERVER.files.getFolders( dir ).then( function(){

    var folders = ELEMENT.option( "Select project" )

    DATA.folders.forEach( file => {
      folders+= ELEMENT.option( file )
    })

    $(".menuOpen-selectBottom").html( folders )
  })
}

EVENT.menuOpen.selectProject = ( project, folder, JSON ) => {
   
  FN.project.clean()
    
  if( !project ){
    project = $(".menuOpen-selectBottom").val()
    DATA.projectSelected = project    
  } 
  
  if( !folder ){
    folder = $(".menuOpen-selectTop").val()
	DATA.folderSelected = folder
  }   

  if( project != "Select project" ){
    
    DATA.project.name = project
    
    FN.project.select( project, folder, JSON )

    $( DATA.slotID ).html( DATA.folderSelected + "/" + project)

    DATA.slots[ DATA.slotSelected ].folder = DATA.folderSelected
    DATA.slots[ DATA.slotSelected ].project = DATA.projectSelected

    FN.project.slotStart()

    $(".menuOpenProject").hide()
  } 
}
