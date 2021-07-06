FN.file.delete.files = ( Data ) => {

  FN.file.remove( DATA.project.plurality[DATA.lastBoxSelected], DATA.lastSelected )

  $.each( Data.p0[ DATA.lastSelected ], ( index, fileName ) => {

    $.each( Data.p1[ fileName ], ( index2, fileName2 ) => {

      $.each( Data.p2[ fileName2 ], ( index3, fileName3 ) => {

        delete Data.p3[ fileName3 ]
      })

      delete Data.p2[ fileName2 ]
    })

    delete Data.p1[ fileName ]
  })

  delete Data.p0[ DATA.lastSelected ]

  $("#box1").html("")
}
