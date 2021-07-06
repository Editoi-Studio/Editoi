FN.project.open = () => {

  log("open")

  FN.project.clean()

  DATA[ "box0" ] = DATA.project.plurality.files
 
  FN.block.append( "box0" )

  for( index in DATA.project.plurality.files ){

    var file = DATA.project.plurality.files[ index ]

    if( !DATA.project.plurality.p0[ file ] ) DATA.project.plurality.p0[ file ] = []
  }

  if( !DATA.project.plurality.all ) DATA.project.plurality.all = {}
  
  $(".menuOpen").hide()
}
