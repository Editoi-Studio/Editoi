FN.project.openSelect = id => {

  DATA.slotSelected = id

  DATA.folderSelected = DATA.slots[ DATA.slotSelected ].folder
  DATA.projectSelected = DATA.slots[ DATA.slotSelected ].project

  if( DATA.folderSelected ){

    $(".selectTop").val( DATA.folderSelected )
    $(".selectBottom").val( DATA.projectSelected )

    FN.project.selectByClick()

    setTimeout(function(){

      FN.project.setState( DATA.slotSelected )

    },50)
  }
}