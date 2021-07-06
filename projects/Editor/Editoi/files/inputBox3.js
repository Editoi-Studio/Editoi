
FN.input["inputBox3"] = ( filename ) => {

  if( !DATA.box2Selected ) alert( "Select a folder" )
  else{

    DATA.project.plurality.p2[ DATA.box2Selected ].push( filename )
    DATA[ "box3" ] = DATA.project.plurality.p2[ DATA.box2Selected ]

    DATA.project.plurality.p3[ filename ] = []

    FN.input.appendBlock( filename, "box3" )
  }
}
