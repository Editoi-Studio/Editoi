TEMPLATE.menuOpen = () => {
  let template = gg({
    class: "menuOpen border",
    html: `
 
    <select class="select border dark menuOpen-selectTop" onchange="EVENT.menuOpen.selectFolder()">
      <option value="select folder">Select folder</option>      
    </select>
    <select class="select border dark menuOpen-selectBottom" 
      onchange="EVENT.menuOpen.selectProject()">Select project</select>
 
    `
  })
  return template
}
