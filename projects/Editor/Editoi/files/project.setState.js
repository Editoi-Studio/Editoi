FN.project.setState = ( slotSelected ) => {

  log("project set state")

  if( DATA.slots[ slotSelected ].box0Selected ){

    $('.block').each( function() {

      if( $(this).html() == DATA.slots[ slotSelected ].box0Selected ){
        $(this).trigger("mousedown" )
        return 0
      }
    })

  }
}
