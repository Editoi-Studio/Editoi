TEMPLATE.panelEditor = () => {
  let template = gg({
    class: "panelEditor editor border",
    html: `
    <div id="markdown" class="scrollbar none"></div>
    <textarea id="editor" style="display: none;"></textarea>`
  })
  return template
}
