/*
SERVER.project.compile = () => {

  var project = []
  var Data = DATA.project.plurality

  for(let index0 in Data.files ){

    if( DATA.fileDisabled == undefined || !DATA.fileDisabled.includes( Data.files[ index0 ] ) ){

      project.push( Data.files[ index0 ] )

      for(let index in Data.p0[ Data.files[ index0 ] ] ){
        let fileName = Data.p0[ Data.files[ index ] ][ index ]
        if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName ) ) 
          return project.push( fileName )

        for(let index2 in Data.p1[ fileName ] ){
          let fileName2 = Data.p1[ fileName ][index2]
          if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName2 ) ) 
            return project.push( fileName2 )

          for(let index3 in Data.p2[ fileName2 ] ){
            let fileName3 = Data.p2[ fileName2 ]
            if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName3 ) ) 
              return project.push( fileName3 )

            for(let index4 in Data.p3[ fileName3 ] ){
              let fileName4 = Data.p3[ fileName3 ]

              if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName4 ) ) 
                return project.push( fileName4 )              
            }
          }
        }
      }
    }
  }

  promise.then( ( val ) => {
    SERVER.project.resetArchives()
    $.each( project , ( index, value ) => {
      SERVER.files.getFileContents( value )
    })
    return val
  }).then( ( val ) => {
    SERVER.files.generate()
  })
}
*/
 
SERVER.project.compile = () => {

  var project = []
  var Data = DATA.project.plurality

  for( index in Data.files ){

    if( DATA.fileDisabled == undefined || !DATA.fileDisabled.includes( Data.files[ index ] ) ){

      project.push( Data.files[ index ] )
 
      $.each( Data.p0[ Data.files[ index ] ], ( index, fileName ) => {

        if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName ) ) return
        project.push( fileName )

        $.each( Data.p1[ fileName ], ( index2, fileName2 ) => {

          if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName2 ) ) return
          project.push( fileName2 )

          $.each( Data.p2[ fileName2 ], ( index3, fileName3 ) => {

            if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName3 ) ) return
            project.push( fileName3 )

            $.each( Data.p3[ fileName3 ], ( index4, fileName4 ) => {

              if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName4 ) ) return
              project.push( fileName4 )

            })

          })

        })

      })
    }

  }

  promise.then( ( val ) => {
    SERVER.project.resetArchives()
    $.each( project , ( index, value ) => {
      SERVER.files.getFileContents( value )
    })
    return val
  }).then( ( val ) => {
    SERVER.files.generate()
  })
}
 