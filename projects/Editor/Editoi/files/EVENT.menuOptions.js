EVENT.menuOptions = {}
EVENT.menuOptions.btn = {}

EVENT.menuOptions.btn.save = () => { 
  
  var val = $(".menuOptions_port").val()
  if(val) {
    DATA.port = val
    localStorage.setItem('port', val);
  }
  
  var val = $(".select-EditorTheme").val()
  if(val) {
    DATA.theme = val
    localStorage.setItem('theme', val);
  }
  
  var val = $(".menuOptions_font").val()
  if(val) {
    DATA.font = val.split("px")[0]
    localStorage.setItem('font', DATA.font)
    $(".menuOptions_font").val(DATA.font)
    root.style.setProperty('--font', DATA.font + "px")
  }    
  
  $(".menuOptions").hide()
}

EVENT.menuOptions.btn.cancel = () => {
  
  $(".menuOptions").hide()
}

EVENT.menuOptions.selectAppTheme = () => {
  
   let theme = $(".select-AppTheme").val()   
}

EVENT.menuOptions.color1 = () => {  
   let color = $("#color1").val() 
   root.style.setProperty('--box-1', color );
}

EVENT.menuOptions.color2 = () => {  
   let color = $("#color2").val() 
   root.style.setProperty('--blue-2', color );
}

EVENT.menuOptions.color3 = () => {  
   let color = $("#color3").val() 
   root.style.setProperty('--blue-3', color );
}

EVENT.menuOptions.selectEditorTheme = () => {
  
  let theme = $(".select-EditorTheme").val()
  editor.setOption("theme", theme.split(".css")[0])  
  let color1 = $(".CodeMirror").css("background-color")
  let color2 = $(".CodeMirror-activeline-background").css("background-color")
  if(theme == "guri.css"){
    color1 = "#151925"
    color2 = "#242844"
  }
  
  root.style.setProperty('--blue-2', color1 );
  root.style.setProperty('--blue-3', color2 );
}