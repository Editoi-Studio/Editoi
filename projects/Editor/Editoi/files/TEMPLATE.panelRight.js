TEMPLATE.panelRight = () => {
  let template = gg({
    class: "panelRight",
    html: TEMPLATE.panelFiles.main() + TEMPLATE.panelEditor()
  })
  return template
}