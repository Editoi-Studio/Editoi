EVENT.editor = {}

EVENT.editor.tabSnippets = (event) => {

  var lineContent = FN.editor.getLine()

  if( event.key == "Tab" ){
    
    if(lineContent.includes(`//script`)){
      
      SERVER.script.run()
      
    }else{
      FN.snippets.insert( lineContent )
    }    
  } 
}
