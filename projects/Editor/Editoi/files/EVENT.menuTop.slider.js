EVENT.menuTop.slider = (event) => {
  
  if( !DATA.projectSelected ){

    alert("Select a project to serve")

    return 0      
  }

  event.stopPropagation();
 
  if( $('#' + "view").is(":checked") ){
    console.log("close")
    
    SERVER.close()

    FN.alert.show( "Server stop" )
    
    setTimeout(function(){
      FN.alert.hide()
    }, 1300)

  }else if( !$('#' + "view").is(":checked") ){
    console.log("run")
    
    SERVER.run()

    FN.alert.show( `localhost:${DATA.port}` )
    setTimeout(function(){
      FN.alert.hide()
    }, 1300)
  } 
}
