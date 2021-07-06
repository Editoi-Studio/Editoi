TEMPLATE.panelFiles.top = () => {

  var kanbanBtn = (v) => gg({
    class: "kanbanBtn center over noSelect",
    html: v,
    onclick: `EVENT.box.colBtn${v}()`,  
    style:`
height: 22px;
width: 22px;
cursor: pointer;
background: var(--dark);
margin-left: 0px;
color: white;
font-size: 11px;
`
  })

  var menu = gg({
    html: kanbanBtn(1) + kanbanBtn(2) + kanbanBtn(3) + kanbanBtn(4),
    style:`
display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-template-rows: 1fr;
`

  })


  var rightMT = gg({
    class: "rightMT blockSelectedName",
    html: "",
    style:`
color: var(--white);
font-size: 12px;
padding: 6px;
`
  })

  var box = gg({
    class: "",
    html: rightMT + menu,
    style:`
display: grid;
grid-template-columns: 1fr 94px;
grid-template-rows: 1fr;
`
  })

  return box
}
