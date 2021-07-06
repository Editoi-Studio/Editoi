ELEMENT.block = ( filename, group, classe ) => {
  if( DATA.project.plurality.all && DATA.project.plurality.all[ filename ] == 1 ) classe = "file"
  else classe = "folder"

  var template = gg({
    id: FN.getID(),
    class: `block pointer ${ group } ${ classe }`,
    onmouseover: "EVENT.block.over(event)",
    onmouseout: "EVENT.block.out(event)",
    onmousedown: "EVENT.block.down(event)",
    group: group,
    filename: filename,
    html: FN.removeSpace( filename ),
      style:`
color: var(--white);
font-size: 12px;
padding: 6px;
margin: 2px;
`
  })

  return template
}

FN.removeSpace = (val) => {
  
  if( val.includes("___") ){
    var n = val.split("___")
    var l = n.length
    n[l-1] = n[l-1].split(".")[1]
    return n.join(".")
  }else{
    return val
  }
}
