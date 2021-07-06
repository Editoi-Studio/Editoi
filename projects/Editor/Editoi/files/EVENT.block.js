EVENT.block = {}

EVENT.block.over = (event) => {

  var el = $(event.target)

  if( el.hasClass("block") ){
    if( el.hasClass("file") ) el.addClass("file-over")
    else el.addClass("folder-over")
  }
}

EVENT.block.out = (event) => {

  var el = $(event.target)

  if( el.hasClass("block") ){

    if( el.hasClass("file-over") && 
       !el.hasClass("file-selected") && 
       !el.hasClass("selected") ) el.removeClass("file-over")
    else if( el.hasClass("folder-over") && 
            !el.hasClass("folder-selected") && 
            !el.hasClass("selected") ) el.removeClass("folder-over")

  }
}

EVENT.block.down = (event) => {

  var el = $(event.target)

  if( el.hasClass("block") ){

    $(".file-selected").addClass("file-over")
    $(".folder-selected").addClass("folder-over")

    $(".block").removeClass("file-selected")
    $(".block").removeClass("folder-selected")

    var blockName = el.attr("filename") //el.html()
    var g = el.attr("group")

    $("."+g).removeClass("file-over").removeClass("folder-over").removeClass("selected")
    if( el.hasClass("file") ) el.addClass( "file-selected" ).addClass("selected")
    else el.addClass( "folder-selected" ).addClass("selected")


    DATA.lastElement = el

    FN.block.type[ g ]( blockName )

    DATA.lastSelected = blockName

    if( blockName.includes(".kanban") ) DATA.lastKanbanSelected = blockName

    if( g != "box5" && g != "kanbanBox"){

      $(".rightBottom").show()

      $(".box5").removeClass("file-over").removeClass("folder-over").removeClass("selected")
      $(".box5").removeClass("file-selected").removeClass("folder-selected")

      var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/files`

      SERVER.files.getFile( dir, blockName ).then( function( file ){

        editor.clearHistory()

        if( file ){

          editor.setValue( file )

        }else{

          editor.setValue( "" )
        }

        FN.editor.render() 

        FN.editor.changeMode( blockName )
      })

    }

    //  $("#map").remove()
    /*
    if( FN.kanbanIsSelected( DATA.lastSelected ) ){

      FN.kanbanAdd()

      $(".kanbanFileName").html( DATA.lastSelected )

    }

    else{

      if( g != "kanbanBox" && DATA.kanban ) FN.kanbanRemove()
    }
*/


  }
}
