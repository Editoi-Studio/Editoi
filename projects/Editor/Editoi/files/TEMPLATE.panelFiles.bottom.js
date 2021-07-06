TEMPLATE.panelFiles.bottom = () => {

  var inputs = ELEMENT.box( "box1" ) +
      ELEMENT.box( "box2" ) +
      ELEMENT.box( "box3" ) +
      ELEMENT.box( "box4" )

  var t = gg({
    class: "rightMM colGrid",
    html: inputs,
    style:`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr;
`
  })

  return t
}
