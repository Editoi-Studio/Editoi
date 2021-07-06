FN.includes = {}
 
FN.includes.add = ( content ) => {
  if( ( content.includes("//add(") || 
     content.includes("// add(") || 
     content.includes("; add(") ||
     content.includes(";add(") ||
     content.includes("# add(") ||
       content.includes("#add(") ) && 
     !content.includes(`"add`) && 
     !content.includes(`.add`) && 
     !content.includes(`add.`) && 
     !content.includes(`content.includes`) &&
     !content.includes(`///`) ) return true
  else return false
}

FN.includes.only = ( content ) => {

  if( ( content.includes("//only") || 
       content.includes("// only") ||
       content.includes("; only(") ||
     content.includes(";only(") ||
     content.includes("# only(") ||
       content.includes("#only(") ) && 
     !content.includes("///") && 
     !content.includes(`content.includes`) &&
     !content.includes("content.only") ){

    return true
  }
  return false
}

FN.includes.disable = ( content ) => {

  if( ( content.includes("//disable") || 
       content.includes("// disable")  ||
       content.includes("; disable") ||
     content.includes(";disable") ||
     content.includes("# disable") ||
       content.includes("#disable") ) && 
     !content.includes("///") &&
    !content.includes("content.includes")  ){

    return true
  }
  return false
}

FN.includes.normal = ( content ) => {

  if( ( content.includes("//normal") || 
       content.includes("// normal")  ||
       content.includes("; normal") ||
     content.includes(";normal") ||
     content.includes("# normal") ||
       content.includes("#normal") ) && 
     !content.includes("///") &&
    !content.includes("content.includes")  ){

    return true
  }
  return false
}