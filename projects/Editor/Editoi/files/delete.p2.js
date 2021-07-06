FN.file.delete.p2 = ( Data ) => {

  FN.file.remove( DATA.project.plurality[ DATA.lastBoxSelected ][ DATA.box2Selected ], DATA.lastSelected )

  delete DATA.project.plurality.p3[ DATA.lastSelected ]

  $("#box4").html("")
}
