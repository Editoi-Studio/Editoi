FN.project.removeFiles = () => {

  var files = JSON.stringify( DATA.project.plurality.files )
  var p0 = JSON.stringify( DATA.project.plurality.p0 )
  var p1 = JSON.stringify( DATA.project.plurality.p1 )
  var p2 = JSON.stringify( DATA.project.plurality.p2 )
  var p3 = JSON.stringify( DATA.project.plurality.p3 )

  var total = files+p0+p1+p2+p3

  for( index in DATA.project.plurality.all ){

    if( !total.includes( index ) ) delete DATA.project.plurality.all[ index ]
  }
}

