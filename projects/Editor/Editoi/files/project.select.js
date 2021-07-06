FN.project.select = async( projectName, folder, JSON ) => {

  if( projectName == null ) alert("error")
  
  if( folder ) DATA.folderSelected = folder

  var dir = `${ DATA.directory }/${ folder || $(".selectTopNew").val() }/${ projectName }`
   
  if(JSON){
    
    DATA.project = JSON
    DATA.fileDisabled = DATA.project.plurality.fileDisabled
    FN.project.open()
    DATA.projectSelected = projectName || $(".menuOpen-selectBottom").val()
    
  }else{
    
   // setTimeout(async function(){

    let file = await SERVER.files.getFile( dir, "package.json" ).then((data) => {
        
      FN.project.parser(data, projectName)
  
      
    })
    

 // },20)
    
  }
  



  /*
  SERVER.files.getFile( dir, "package.json" ).then( function( file ){

    DATA.project = JSON.parse( file )

    DATA.fileDisabled = DATA.project.plurality.fileDisabled

    SERVER.project.open()

    DATA.projectSelected = $(".selectBottom").val()
  })
  */
}

