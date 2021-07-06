TEMPLATE.menuNew_top = () => {
  
  var folders = ELEMENT.option( "Select folder" )

  DATA.folders.forEach( file => {
    folders+= ELEMENT.option( file )
  })

  var selectTop = gg({
    class: "select border dark selectTopNew",
    tag: "select",
    html: folders,
    onchange: "EVENT.menuNew.selectFolder()"
  })

  return selectTop
}


TEMPLATE.menuNew = () => {
  let template = gg({
    class: "menuNew center",
    html: `
 
      <div class="menuNew_top">
      
        <div class="menuLine">
          <div class="menuAttr"> Folder: </div>
           ${ TEMPLATE.menuNew_top() }
        </div>

        <div class="menuLine">
          <div class="menuAttr">Name: </div>
          <input class="menuInput menuItem1" value="Example">
        </div>

        <div class="menuLine">
          <div class="menuAttr">Version: </div>
          <input class="menuInput menuItem2" value="1.0.0">
        </div>

        <div class="menuLine">
          <div class="menuAttr">Author: </div>
          <input class="menuInput menuItem3" value="${DATA.username}">
        </div>

        <div class="menuLine">
          <div class="menuAttr">License: </div>
          <input class="menuInput menuItem4" value="ISC">
        </div>

        <div class="menuLine">
          <div class="menuAttr">Description: </div>
          <textarea class="menuTextarea menuItem5" value="" style="resize: none"></textarea>
        </div>
    </div>

    <div class="menuBottom center">
      <div class="btn noSelect" onmousedown="EVENT.menuNew.btn.create()">Create</div>
      <div class="btn noSelect" onmousedown="EVENT.menuNew.btn.cancel()">Cancel</div>
    </div>
 
    `
  })
  return template
}
