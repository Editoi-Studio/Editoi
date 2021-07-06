TEMPLATE.panelFiles = {}

TEMPLATE.panelFiles.main = () => {

  var components = TEMPLATE.panelFiles.top() + TEMPLATE.panelFiles.middle() + TEMPLATE.panelFiles.bottom()

  var template = gg({
    class: "panelFiles border",
    html: components
  })

  return template
}
