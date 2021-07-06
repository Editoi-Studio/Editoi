TEMPLATE.menuOptions = () => {
  let template = gg({
    class: "menuOptions center",
    id: "menuOptions",
    html: `
 
    <div class="menuNew_top">
       
        <div class="menuLine">
          <div class="menuAttr">Port: </div>
          <input class="menuInput menuOptions_port" value="${DATA.port}">
        </div>
        
        <div class="menuLine">
          <div class="menuAttr">Font size: </div>
          <input class="menuInput menuOptions_font" value="${DATA.font}">
        </div>     
        
        <div class="menuLine">
          <div class="menuAttr">Editor theme: </div>
                 
          <select class="select border dark select-EditorTheme" onchange="EVENT.menuOptions.selectEditorTheme()">
             <option value="select folder">Select EditorTheme</option>      
          </select>          
        </div>
 
       
    </div>

    <div class="menuBottom center">
      <div class="btn noSelect" onmousedown="EVENT.menuOptions.btn.save()">Save</div>
      <div class="btn noSelect" onmousedown="EVENT.menuOptions.btn.cancel()">Cancel</div>
    </div>
 
    `
  })
  return template
}

/*
   <div class="menuLine">
           <div class="menuAttr">AppTheme: </div>  
           <div class="colors">
           <input type="color" class="color" id="color1" name="head" value="#2C374B" onchange="EVENT.menuOptions.color1()">    
           <input type="color" class="color" id="color2" name="head" value="#151925" onchange="EVENT.menuOptions.color2()"> 
           <input type="color" class="color" id="color3" name="head" value="#242844" onchange="EVENT.menuOptions.color3()"> 
           </div>
        </div>
*/