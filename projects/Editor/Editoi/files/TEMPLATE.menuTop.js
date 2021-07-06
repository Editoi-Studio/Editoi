TEMPLATE.menuTop_top = () => {
  let template = gg({
    class: "menuTop_top center",
    html: `
    ${ COMPONENT.buttons() }
    ${ TEMPLATE.menuOpen() }
    ${ TEMPLATE.menuNew() }
    ${ TEMPLATE.menuOptions() } 
    ${ TEMPLATE.menuAbout() } 
    ${ COMPONENT.alert() }
    `
  })
  return template
}
 
TEMPLATE.menuTop_bottom = () => {
  let template = gg({
    class: "menuTop_bottom",
    html: COMPONENT.tabs()
  })
  return template
}

TEMPLATE.menuTop = () => {
  let template = gg({
    class: "menuTop border",
    html: TEMPLATE.menuTop_top() + TEMPLATE.menuTop_bottom()
  })
  return template
}
