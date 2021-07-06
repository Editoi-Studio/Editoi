FN.menuOptions = {}

FN.menuOptions.start = () => {
  
  var options = ELEMENT.option( "Select EditorTheme" )

  for(let index in DATA.themes){
    var folder = DATA.themes[index]
    var template = ELEMENT.option( folder )
    options+=template
  }

  $(".select-EditorTheme").html(options)
  
  // get localstorage
  
  let root = document.documentElement
  
  var val = localStorage.getItem('port')
  if(val) {
    DATA.port = val
    $(".menuOptions_port").val(val)
  }

  var val = localStorage.getItem('font')
  if(val) {
    DATA.font = val
    $(".menuOptions_font").val(val)
    root.style.setProperty('--font', val.split("px")[0] + "px")
  }
  
  var val = localStorage.getItem('theme')
  if(val && val != "Select EditorTheme") {
    DATA.theme = val
    $(".select-EditorTheme").val(val)
    EVENT.menuOptions.selectEditorTheme()
  }else{
    $(".select-EditorTheme").val("guri.css")
    EVENT.menuOptions.selectEditorTheme()
  }      
}