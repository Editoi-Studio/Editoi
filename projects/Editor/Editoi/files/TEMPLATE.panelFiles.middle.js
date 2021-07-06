TEMPLATE.panelFiles.middle = () => {

  var inputs = ELEMENT.input("inputBox1") +
      ELEMENT.input("inputBox2") +
      ELEMENT.input("inputBox3") +
      ELEMENT.input("inputBox4")

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
