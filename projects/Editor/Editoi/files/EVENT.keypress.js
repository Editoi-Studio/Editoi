EVENT.keypress = (event) => {

  if( event.ctrlKey && DATA.unlock ){
    if( event.keyCode == 19 ){
      DATA.unlock = false
      log( "save" ) 
      FN.file.save()
      setTimeout(function(){ DATA.unlock = true}, 900)
    }else if( event.keyCode == 0 ){
      DATA.unlock = false
      log( "space" )
     // snippetFile();
      setTimeout(function(){ DATA.unlock = true}, 900)
    }else if( event.keyCode == 9 ){
      DATA.unlock = false
      log( "Inspector" )
      require('nw.gui').Window.get().showDevTools()
      setTimeout(function(){ DATA.unlock = true}, 900)
    }else if( event.keyCode == 18 ){
      DATA.unlock = false
      log( "Reload" )
      chrome.runtime.reload()
      setTimeout(function(){ DATA.unlock = true}, 900)
    }
  }
}
