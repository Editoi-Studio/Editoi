TEMPLATE.main_bottomLeft = () => {
  let template = gg({
    class: "main_bottomLeft",
    html: TEMPLATE.panelModules.main()
  })
  return template
}

TEMPLATE.main_bottomRight = () => {
  let template = gg({
    class: "main_bottomRight",
    html: TEMPLATE.panelRight()
  })
  return template
}

TEMPLATE.main_bottom = () => {
  let template = gg({
    class: "main_bottom",
    html: TEMPLATE.main_bottomLeft() + TEMPLATE.main_bottomRight()
  })
  return template
}

TEMPLATE.main = () => {
  let template = gg({
    class: "main",
    html: TEMPLATE.menuTop() + TEMPLATE.main_bottom()
  })
  return template
}



/*
$(".menuOpenProject").hide()
$(".menuNewProject").hide()
FN.editor.start()
*/
/*
 Editoi.panels.editor.snippets.load()
  
  $('.CodeMirror').attr("onkeyup", "EVENT.editor.tabSnippets(event)")
 
  Editoi.events.sortable.drag() 

  Editoi.server.project.slotStart()
*/
