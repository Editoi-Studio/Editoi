EVENT.input.keydown = async(event) => {

  if( event.which == 13 || event.keyCode == 13 ){

    var el = $( event.target )
    var val = el.val()
    var id = el.attr("id")

    if( id.includes("Kanban") && val.includes(".") ){

      alert("No use dot")

    }else if( id.includes("Kanban") ){

      // FN.kanbanAppend( val, id )
      el.val("")

    }else if( !DATA.project ){

      alert( "Select a project")

    }else if( !val.includes(".") ){

      alert("Extension is required")

    }else{

      DATA.counter = 0

      val = await FN.input.getName( val )

      console.log( val )

      if( !DATA.project.plurality.all ) DATA.project.plurality.all = {}
      DATA.project.plurality.all[ val ] = 0
 
      FN.input[id]( val )

      el.val("")
    }
  }
}
