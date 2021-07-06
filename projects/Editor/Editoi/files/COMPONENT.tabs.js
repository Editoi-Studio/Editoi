COMPONENT.tabs = () => {
  let template = gg({
    class: "tabs",
    html: `
    ${ ELEMENT.tab(1, "tabSelected") }
    ${ ELEMENT.tab(2) }
    ${ ELEMENT.tab(3) }
    ${ ELEMENT.tab(4) }
    `
  })
  return template
}
