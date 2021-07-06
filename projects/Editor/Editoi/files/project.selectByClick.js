FN.project.selectByClick = () => {

  FN.project.clean()

  if( DATA.projectSelected != "Select project" ){
    
    FN.project.select( DATA.projectSelected, DATA.slots[ DATA.slotSelected ].folder )
    
  }    

  FN.project.slotStart()
}