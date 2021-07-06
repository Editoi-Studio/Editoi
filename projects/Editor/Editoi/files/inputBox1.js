
FN.input["inputBox1"] = ( filename ) => {

  if( !DATA.box0Selected ) alert( "Select a file" )
  else{

    DATA.project.plurality.p0[ DATA.box0Selected ].push( filename )
    DATA[ "box1" ] = DATA.project.plurality.p0[ DATA.box0Selected ]

    DATA.project.plurality.p1[ filename ] = []

    FN.input.appendBlock( filename, "box1" )
  }
}
