COMPONENT.buttons = () => {
  let template = gg({
    class: "component_buttons center-buttons",
    html: `
    
    ${ ELEMENT.button( "Open", "EVENT.menuTop.btn.open()" ) }
    ${ ELEMENT.button( "New", "EVENT.menuTop.btn.new()" ) }
    ${ ELEMENT.button( "Delete", "EVENT.menuTop.btn.delete()" ) }
    
    ${ ELEMENT.slider("EVENT.menuTop.slider(event)") }
     
    ${ ELEMENT.button( "Render", "EVENT.menuTop.btn.render()" ) } 
    ${ ELEMENT.button( "Save", "EVENT.menuTop.btn.save()" ) }
    ${ ELEMENT.button( "Run", "EVENT.menuTop.btn.run()" ) }
 
    ${ ELEMENT.button( "About", "EVENT.menuTop.btn.about()" ) }
    
    ${ ELEMENT.menuOptions("EVENT.menuTop.btn.menuOptions()" ) }
    `
  })
  return template
}



