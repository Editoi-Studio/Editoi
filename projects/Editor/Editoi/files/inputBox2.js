
FN.input["inputBox2"] = ( filename ) => {

  if( !DATA.box1Selected ) alert( "Select a folder" )
  else{

    DATA.project.plurality.p1[ DATA.box1Selected ].push( filename )
    DATA[ "box2" ] = DATA.project.plurality.p1[ DATA.box1Selected ]

    DATA.project.plurality.p2[ filename ] = []

    FN.input.appendBlock( filename, "box2" )
  }
}
