ELEMENT.button = (btnName, event ) => {
  let template = gg({
    tag: "div",
    class: "element_button center noSelect",
    onclick: event, 
    html: btnName
  })   
  return template
}
