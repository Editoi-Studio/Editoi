
FN.input["inputBox4"] = ( filename ) => {

  if( !DATA.box3Selected ) alert( "Select a folder" )
  else{

    DATA.project.plurality.p3[ DATA.box3Selected ].push( filename )
    DATA[ "box4" ] = DATA.project.plurality.p3[ DATA.box3Selected ]

    FN.input.appendBlock( filename, "box4" )
  }
}
