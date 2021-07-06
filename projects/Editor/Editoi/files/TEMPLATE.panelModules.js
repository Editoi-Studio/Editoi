TEMPLATE.panelModules = {}

TEMPLATE.panelModules.top = () => {
  let template = `<div class="panelModules-top blue-2">Modules</div>`
  return template
}

TEMPLATE.panelModules.middle = () => {
  let template = `
  <div class="panelModules-middle">
     ${ ELEMENT.input( "inputBox0" ) }
  </div>`
  return template
}

TEMPLATE.panelModules.bottom = () => {
  let template = `
   <div class="leftBottom"> 
    
      <div id="box0" class="dark scrollbar noSelect sortable-box0 ui-sortable" >
    
   
      </div>
    </div>`
  return template
}
//${ Editoi.elements.block () }


TEMPLATE.panelModules.main = () => {
  let template = gg({
    class: "panelModules left border",
    html: `
    ${ TEMPLATE.panelModules.top() }
    ${ TEMPLATE.panelModules.middle() }
    ${ TEMPLATE.panelModules.bottom() } 
    `
  })
  return template
}
