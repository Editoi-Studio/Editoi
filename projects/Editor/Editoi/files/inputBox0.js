FN.input["inputBox0"] = ( filename ) => {

  DATA.project.plurality.files.push( filename )
  DATA[ "box0" ] = DATA.project.plurality.files

  DATA.project.plurality.p0[ filename ] = []

  FN.input.appendBlock( filename, "box0" )
}
