SERVER.script = {}

SERVER.script.run = async() => {
  
  console.log("Script run")
  
  var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/files/`  

  var file = await SERVER.files.getFile( dir, DATA.lastSelected )
  
  var code = file.split(`\n`)[1]
    
  exec(code, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    alert(stdout);
  });
  
 
 
}
