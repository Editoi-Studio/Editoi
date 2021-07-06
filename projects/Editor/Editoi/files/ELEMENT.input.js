ELEMENT.input = ( id ) => {

  var input = gg({
    tag: "input",
    id: id,
    class: "input",
    onkeydown: "EVENT.input.keydown(event)",
    autocomplete: "off"
  })

  var t = gg({
    class: "border",
    html: input,
    style: `
margin: 1px;
`
  })

  return t
}
