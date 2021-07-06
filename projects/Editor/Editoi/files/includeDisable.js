SERVER.files.includeDisable = ( content ) => {

  if( ( content.includes("//disable") || 
       content.includes("// disable") ) && 
     !content.includes("///") ) &&
     !content.includes("content.includes")  ){
    
    return true
  }
  return false
}
