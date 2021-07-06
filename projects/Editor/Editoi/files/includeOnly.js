SERVER.files.includeOnly = ( content ) => {

  if( ( content.includes("//only") || 
       content.includes("// only") ) && 
     !content.includes("///") ) &&
     !content.includes("content.only")  ){
    
    return true
  }
  return false
}
