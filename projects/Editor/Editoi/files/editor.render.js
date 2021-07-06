FN.editor.render = () => {

  if(DATA.editorHide){

    var content = editor.getValue()
    let el = get('#markdown')

    if( DATA.lastSelected.includes(".html") ){
      el.innerHTML = content
    }else{
      el.innerHTML = marked(content, { renderer: renderer })
    }
  } 
}

var renderer = new marked.Renderer()
renderer.link = function( href, title, text ) {
  return '<a target="_blank" href="'+ href +'" title="' + title + '">' + text + '</a>'
}