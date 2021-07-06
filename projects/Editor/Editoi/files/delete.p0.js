FN.file.delete.p0 = ( Data ) => {

  FN.file.remove( DATA.project.plurality[DATA.lastBoxSelected][DATA.box0Selected], DATA.lastSelected )

  $.each( Data.p1[ DATA.lastSelected ], ( index2, fileName2 ) => {

    $.each( Data.p2[ fileName2 ], ( index3, fileName3 ) => {

      delete Data.p3[ fileName3 ]
    })

    delete Data.p2[ fileName2 ]
  })

  delete Data.p1[ DATA.lastSelected ]

  $("#box2").html("")
}
