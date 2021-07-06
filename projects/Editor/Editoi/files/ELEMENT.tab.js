ELEMENT.tab = (tab, classe) => {
  
  if( !classe ) classe = ""
  
  var template = gg({    
    id: "slot"+tab,
    class: `tab center noSelect ${classe}`,
    onclick: "EVENT.menuTop.tab.click(event)",
    onmouseover: "EVENT.menuTop.tab.over(event)",
    onmouseout: "EVENT.menuTop.tab.out(event)",
    html: tab,
  })
  return template
}
