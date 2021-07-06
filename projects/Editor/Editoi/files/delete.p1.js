FN.file.delete.p1 = ( Data ) => {

  FN.file.remove( DATA.project.plurality[DATA.lastBoxSelected][DATA.box1Selected], DATA.lastSelected )

  for( index in DATA.project.plurality.p2[ DATA.lastSelected ] ){

    delete DATA.project.plurality.p3[ DATA.project.plurality.p2[ DATA.lastSelected ][ index ] ]
  }

  delete DATA.project.plurality.p2[ DATA.lastSelected ]

  $("#box3").html("")
}
