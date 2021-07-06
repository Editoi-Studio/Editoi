EVENT.menuNew = {}
EVENT.menuNew.btn = {}

EVENT.menuNew.btn.create = async() => {

  var projectName = $(".menuItem1").val()
  var version = $(".menuItem2").val()
  var author = $(".menuItem3").val()
  var license = $(".menuItem4").val()
  var description = $(".menuItem5").val()
  var folder = $(".selectTopNew").val()
  
  DATA.folderSelected = folder
  DATA.projectSelected = projectName

  if( !projectName ) alert("Insert a name")
  else if( !DATA.folderSelected ) alert("Select a folder")
  else if( DATA.folderSelected == "Select folder" ) alert("Select a folder")  
  else if( DATA.folders.includes( projectName ) ) alert("This name already exist")
  else{

    var template = await FN.project.templateJson( projectName, version, author, license, description )

    DATA.templateOpen = JSON.parse( template )

    await FN.project.createNew( projectName, template, folder )

   // setTimeout(function(){            

    DATA.slots[ DATA.slotSelected ].folder = folder
    DATA.slots[ DATA.slotSelected ].project = projectName

    EVENT.menuOpen.selectProject(projectName, folder, DATA.templateOpen)

   // }, 300)


    EVENT.menuNew.btn.cancel()
  }
}
 

EVENT.menuNew.btn.cancel = () => {
  log("cancel")
  $(".menuNew").hide()
}

EVENT.menuNew.selectFolder = () => {
  log("selectFolder")
  
  var val = $(".selectTopNew").val()
  if( val != "Select folder" ) DATA.folderSelected = val
  
  var dir = DATA.directory + "/" + val  

  SERVER.files.getFolders( dir ).then( function(){

    var folders = ELEMENT.option( "Select folder" )

    DATA.folders.forEach( file => {
      folders+= ELEMENT.option( file )
    })

    $(".menuOpen-selectBottom").html( folders )

  })
}
