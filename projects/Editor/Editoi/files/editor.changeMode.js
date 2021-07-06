FN.editor.changeMode = ( blockName ) => {
  
  var name = blockName
 
  if( name.includes(".html") ) editor.setOption("mode", "htmlmixed")
  else if( name.includes(".cs") && !name.includes(".css") ) editor.setOption("mode", "text/x-csharp")
  else if( name.includes(".css") ) editor.setOption("mode", "css")
  else if( name.includes(".txt") ) {  
    editor.setOption("mode", "text/x-markdown") 
  }
  else if( name.includes(".ts") ) editor.setOption("mode", "text/typescript")
  else if( name.includes(".js") ) editor.setOption("mode", "javascript")
  else if( name.includes(".json") ) editor.setOption("mode", "application/ld+json")
  else if( name.includes(".go") ) editor.setOption("mode", "text/x-go")
  else if( name.includes(".ex") || name.includes(".exs") ) editor.setOption("mode", "elixir")
  
  else if( name.includes(".bat") ) editor.setOption("mode", "application/x-powershell")
  else if( name.includes(".asm") ) editor.setOption("mode", "gas")  
  
  else if( name.includes(".rs") ) editor.setOption("mode", "rust") 
  
  else if( name.includes(".c") ) editor.setOption("mode", "text/x-csrc")
  
  else if( name.includes(".cpp") ) editor.setOption("mode", "text/x-c++src")
  else if( name.includes(".asm") ) editor.setOption("mode", "text/x-csrc")
  else if( name.includes(".lua") || name.includes(".wlua")) editor.setOption("mode", "lua")
  else if( name.includes(".java") ) editor.setOption("mode", "text/x-java")
  else if( name.includes(".hx") ) editor.setOption("mode", "haxe")
  else if( name.includes(".py") ) editor.setOption("mode", "python")
  else if( name.includes(".rb") || name.includes(".rbw") ) editor.setOption("mode", "ruby")
}
