FN.project.createNew = ( projectName, template, folderSelected ) => {

  var filename = "package.json"
  var dir = `${ DATA.directory }/${ folderSelected }/${ projectName }`

  SERVER.files.createFile( dir, filename, template ).then(function(){
    
    EVENT.menuOpen.selectFolder( folderSelected )

    alert("Project created")
    
  })

  SERVER.files.createIcon( dir )
}
