SERVER.files.generate = () => {

  promise.then( ( val ) => {

    var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/www`

   // SERVER.files.createFile( dir,  "index.html", DATA.html )
/*
    if( DATA.html ) SERVER.files.createFile( dir, "index.html", DATA.html );
    if( DATA.css )  SERVER.files.createFile( dir, "style.css", DATA.css );
    if( DATA.js )   SERVER.files.createFile( dir, "app.js", DATA.js );
    if( DATA.txt )  SERVER.files.createFile( dir, "text.txt", DATA.txt );
 */
    if( DATA.archives ){
      
      for(let extension in DATA.archives){
        let content = DATA.archives[extension]  
        let fileName = "main."+extension+""
        if(extension == "html") fileName = "index.html"
        else if(extension == "css") fileName = "style.css"
        SERVER.files.createFile( dir, fileName, content )
      }
            
    } 
    
    if( DATA.filesModule){
      
      for(let fileName in DATA.filesModule){
        let content = DATA.filesModule[fileName] 
        let [ code, folders ] = FN.removeTagNormal( content )
        SERVER.files.createFile( dir+folders, fileName, code )
      }
            
    } 

        
    
    // View.append.compiled();

    FN.alert.show( "Compiled!" )

    //FN.appendWorkspace()

    setTimeout(function(){
      FN.alert.hide()
      //DATA.save = 0
    }, 1300)


    return val;

  }).then( ( val ) => {
    setTimeout( () => {
      /*
      if(Data.filesSelected){
        if( Data.filesSelected.includes(".cpp") ){
          compileCpp()
        }else if( Data.filesSelected.includes(".sh") ){
          compileSh()
        }else View.openWindow();
      }else View.openWindow();
      */

      if( !DATA.run ) FN.project.openWindow()
      else{
        
        var dir = `${ DATA.directory }\\${ DATA.folderSelected }\\${ DATA.project.name }\\www`    
        require('child_process').exec(`start "" "${dir}"`);

       // SERVER.files.execRun()
      }

    }, 100);
  });

  // run
}