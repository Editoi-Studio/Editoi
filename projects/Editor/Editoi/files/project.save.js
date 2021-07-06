FN.project.save = () => {

  var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }`
  var pack = "package.json"  

  SERVER.files.getFile( dir, pack ).then(function(file){

    var package = JSON.parse(file)  
    var plurality = DATA.project.plurality
    package.plurality = plurality
    var data = JSON.stringify( package, null, 4 )

    SERVER.files.createFile( dir, pack, data ).then(function(){

      log("Project saved")
    })
  })   
}