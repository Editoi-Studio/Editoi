
FN.input["inputBox5"] = ( filename ) => {
    console.log(filename)

    if( !DATA.project.plurality.modules.includes(filename) ){
      DATA.project.plurality.modules.push(filename)
    }

    FN.input.appendBlock( filename, "box5" )
}
