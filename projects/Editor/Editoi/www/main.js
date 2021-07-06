let DATA = {}
let ELEMENT = {}
let COMPONENT = {}
let TEMPLATE = {}
let EVENT = {}
let FN = {}

DATA.folders = [1,1,1]


DATA.only = {}
DATA.unlock = true;
DATA.ID = 0
DATA.snippets = []
DATA.username = "Gurigraphics"
DATA.directory = "projects"
DATA.version = "1.0.2"
DATA.port = 9001
DATA.font = 13
DATA.theme = "guri.css"

DATA.rootTest = `../../../../`
DATA.rootDefault = `../`
DATA.root = DATA.rootDefault

DATA.archives = {}
DATA.id = 0
DATA.box0 = []
DATA.box1 = []
DATA.box2 = []
DATA.box3 = []
DATA.box4 = []
DATA.box5 = []
DATA.stop = false
DATA.kanban = false

DATA.box0Selected = 0
DATA.box1Selected = 0
DATA.box2Selected = 0
DATA.box3Selected = 0
DATA.box4Selected = 0
DATA.box5Selected = 0

DATA.oldFileModule = ""
DATA.filesModule = {}

DATA.project = {}
DATA.project.plurality = {}

DATA.slotID = "#slot1"
DATA.slotSelected = "slot1"

DATA.slots = {
  slot1: {
    folder: undefined,
    project: 1,
    box0Selected: 0,
    box1Selected: 0,
    box2Selected: 0,
    box3Selected: 0,
    box4Selected: 0,
  },
  slot2: {
    folder: undefined,
    project: 2,
    box0Selected: 0,
    box1Selected: 0,
    box2Selected: 0,
    box3Selected: 0,
    box4Selected: 0,
  },
  slot3: {
    folder: undefined,
    project: 3,
    box0Selected: 0,
    box1Selected: 0,
    box2Selected: 0,
    box3Selected: 0,
    box4Selected: 0,
  },
  slot4: {
    folder: undefined,
    project: 4,
    box0Selected: 0,
    box1Selected: 0,
    box2Selected: 0,
    box3Selected: 0,
    box4Selected: 0,
  }
}

DATA.themes = ["3024-day.css", 
"3024-night.css", 
"abbott.css", 
"abcdef.css", 
"ambiance-mobile.css", 
"ambiance.css", 
"ayu-dark.css", 
"ayu-mirage.css", 
"base16-dark.css", 
"base16-light.css", 
"bespin.css", 
"blackboard.css", 
"cobalt.css", 
"colorforth.css", 
"darcula.css", 
"dracula.css", 
"duotone-dark.css", 
"duotone-light.css", 
"eclipse.css", 
"elegant.css", 
"erlang-dark.css", 
"gruvbox-dark.css", 
"guri.css", 
"hopscotch.css", 
"icecoder.css", 
"idea.css", 
"isotope.css", 
"lesser-dark.css", 
"liquibyte.css", 
"lucario.css", 
"material-darker.css", 
"material-ocean.css", 
"material-palenight.css", 
"material.css", 
"mbo.css", 
"mdn-like.css", 
"midnight.css", 
"monokai.css", 
"moxer.css", 
"neat.css", 
"neo.css", 
"night.css", 
"nord.css", 
"oceanic-next.css", 
"panda-syntax.css", 
"paraiso-dark.css", 
"paraiso-light.css", 
"pastel-on-dark.css", 
"railscasts.css", 
"rubyblue.css", 
"seti.css", 
"shadowfox.css", 
"solarized.css", 
"ssms.css", 
"the-matrix.css", 
"tomorrow-night-bright.css", 
"tomorrow-night-eighties.css", 
"ttcn.css", 
"twilight.css", 
"vibrant-ink.css", 
"xq-dark.css", 
"xq-light.css", 
"yeti.css", 
"yonce.css", 
"zenburn.css"]

const get = val => document.querySelector( val )
const log = val => console.log( val )

const gg = function(obj){
  const emptyElements = ['area','base','br','col','embed','hr','img','input',
                         'keygen','link','meta','param','source','track','wbr']   
  const mount = (obj) => {  
    obj.style ? obj.style = obj.style.split('\n').join(' ') : 0 
    !obj.tag ? obj.tag = 'div' : 0    
    let el = '<'+obj.tag 
    for(let index in obj ) index != 'tag' && index != 'html' ? el+= (" "+index+"='"+obj[ index ]+"'") : 0
    if(emptyElements.includes( obj.tag )) return el+'/>' 
    else if(obj.html) el+= '>' + obj.html
    else el+='>'  
    return el+='</'+obj.tag+'>'
  }
  if(obj) return mount(obj)
}

const promise = new Promise( ( resolve, reject ) => {
  resolve(1)
})

FN.getID = () => {
  DATA.ID+=1
  return DATA.ID 
}

FN.exist = ( value ) => {

  var files = JSON.stringify( DATA.project.plurality.files );
  var p0 = JSON.stringify( DATA.project.plurality.p0 );
  var p1 = JSON.stringify( DATA.project.plurality.p1 );
  var p2 = JSON.stringify( DATA.project.plurality.p2 );
  var p3 = JSON.stringify( DATA.project.plurality.p3 );

  var total = files+p0+p1+p2+p3;

  if( total.includes( value ) ) return true
  else return false
}

FN.scrollToBottom = function( id ){

  var div = $( "#"+id )
  if( div[0] ) div.scrollTop( div[0].scrollHeight )
}

FN.removeTagNormal = function( content ){

  if( FN.includes.normal( content ) ){
    var c = content.split("\n") 
    var line = c[0].split("normal")[1]
    delete c[0]
    c = c.join("\n")
    return [c, line]
  }
  return content
}

let SERVER = {}
SERVER.files = {}

var fs = require("fs")
var exec = require('child_process').execSync
const path = require('path')



SERVER.files.getFile = ( dir, file ) => {
  return new Promise(( resolve, reject ) => {
    var text = undefined
    var filename = dir+"/"+file
    if(!fs.existsSync( filename )) {
      
      resolve("")

    }else{
      text = fs.readFileSync(filename,'utf8')
      text = text + "\n"
    }
    resolve(text)
  })
}


SERVER.files.getFolders = ( dir ) => {
  return new Promise(( resolve, reject ) => {
    DATA.folders = ""
    fs.readdir( dir, ( err, files ) => { 
     DATA.folders = files.filter( item => !item.includes(".tmp") )
     resolve( DATA.folders )    
    })
  })
}

SERVER.files.createFile = ( directory, filename, content ) => {
  return new Promise(( resolve, reject ) => {
    if( filename && filename ){
      var dir = directory+'/'+filename

      if( FN.includes.disable( content ) ){

        if( DATA.fileDisabled && !DATA.fileDisabled.includes( filename ) ){

          DATA.fileDisabled.push( filename )
        }

      }else{

        if( DATA.fileDisabled ){

          DATA.fileDisabled = DATA.fileDisabled.filter(item => item !== filename)
        }
      }

      if( !fs.existsSync( directory ) ) FN.createDirRecursively(directory)
             
      content = content.replace(/^\s+|\s+$/g, '')
      fs.writeFile( dir, content, (err) => {
        if ( err ) throw err
        resolve( dir )
      })
    }
  })
}

FN.createDirRecursively = (dir) => {
  if(!fs.existsSync(dir)) {        
    FN.createDirRecursively(path.join(dir, ".."))
    fs.mkdirSync(dir)
  }
}

SERVER.files.createIcon = ( dir ) => {

  var url = dir+"/www"

  var data = SERVER.files.copyFile( process.cwd() + "/editor/favicon.ico" )

  if ( !fs.existsSync( url ) ) fs.mkdirSync( url )

  SERVER.files.pastFile(url+"/favicon.ico", data)
}



SERVER.files.copyFile = ( file ) => {

  return fs.readFileSync( file )
}



SERVER.files.pastFile = ( file, data ) => {

  fs.writeFileSync( file, data)
}


SERVER.files.generateFileServer = () => {

  var filesUrl = `/${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/www`

  // var filesUrl = '/'+DATA.directory+ '/'+ Data.project.name + '/' + 'www';
  var text = `
  var ur = '`+filesUrl+`'
  var server
  var express = require('./editor/node_modules/express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app)

  app.use(express.static(__dirname + ur))
  app.get('/', function(req, res) {
  res.sendFile(__dirname + ur + '/index.html')
  })

  app.get('/exit', function(req, res) {
     return process.kill(process.pid);
  })

  server = app.listen(${DATA.port})

  console.log("server is started")
  `
  fs.writeFile( "server.js", text, (err) => {
    if ( err ) throw err;
  });
  return 0
}


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

SERVER.files.execRun = () => {

  log("exec")

  var URL = process.cwd().split("\\").join("/") + "/projects/" +
      DATA.folderSelected + "/" + DATA.projectSelected +"/www/"

  var URLNormal = process.cwd() + "\\projects\\" + DATA.folderSelected +
      "\\" + DATA.projectSelected +"\\www\\"

  if( DATA.run.includes("%%") ){

    var split = DATA.run.split("%%")
    DATA.exec = split.join(URLNormal)

  }else if( DATA.run.includes("%") ){

    var split = DATA.run.split("%")
    DATA.exec = split.join(URL)

  }

  if( DATA.run.includes("cmd") ){

    SERVER.files.execCMD()

  }else{

    const child = exec( DATA.exec, (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    })
    }

  FN.alert.show( "Project Compiled!" )

}


SERVER.files.execCMD = () => {
  
  DATA.prog = DATA.run.split("cmd ")[1]
  DATA.commands = DATA.prog.split(" ")
  DATA.call = DATA.commands[0]
  DATA.commands = DATA.commands.filter( el => el != DATA.commands[0])

  let childProcess = require('child_process').spawn(
    DATA.call, DATA.commands
  )

  childProcess.stdout.on('data', function(data) {

    console.log(data.toString('utf8'));
  })

  childProcess.stderr.on("data", function (data) {

    console.log(data.toString('utf8'));
  })

}


SERVER.files.getFileContents = ( value ) => {

  var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/files`

  SERVER.files.getFile( dir, value ).then( ( content ) => {

    if( content ) SERVER.files.getFileTypes( content, value )    
  })
}


SERVER.files.getFileTypes = ( content, fileName ) => {

  if( FN.includes.disable( content ) ){

    if( DATA.fileDisabled == undefined ) DATA.fileDisabled = []

    if( !DATA.fileDisabled.includes(fileName) ) {

      DATA.fileDisabled.push( fileName )
    }
    return 0
  }
  
  let s = fileName.split(".")
  let length = s.length
  let extension = s[length-1]
  
  if( FN.includes.only( content ) ){
    var c = content.split("\n") 
    delete c[0]
    c = c.join("\n")
    DATA.only[extension] = c
  }
  
  
  if( DATA.project.plurality.files.includes( fileName ) && 
      FN.includes.normal( content ) && DATA.oldFileModule != fileName ) {
    
      DATA.oldFileModule = fileName //start module
  }else if( DATA.project.plurality.files.includes( fileName ) && 
            !FN.includes.normal( content ) ) { 
      DATA.oldFileModule = "" //end module
  }
  
  
  if( DATA.oldFileModule ){
     
    if( !DATA.filesModule[DATA.oldFileModule] ) DATA.filesModule[DATA.oldFileModule] = ""
    DATA.filesModule[DATA.oldFileModule] = DATA.filesModule[DATA.oldFileModule] + ( content + "\n" )
    
  }else{
    
    DATA.extension = extension
    if( !DATA.archives[extension] ) DATA.archives[extension] = ""
    if( DATA.only[extension] ) DATA.archives[extension] = DATA.only[extension] 
    else DATA.archives[extension] = DATA.archives[extension] + ( content + "\n" )


  }
  
 // DATA.oldFileModule = ""  
  //DATA.filesModule = {}
  
  return 0
  

       if( fileName.includes(".html") ) SERVER.files.getFileHTML( content, extension )
  else if( fileName.includes(".css") ) SERVER.files.getFileCSS( content, extension ) 
  else if( fileName.includes(".js") ) SERVER.files.getFileJS( content, extension )
  else if( fileName.includes(".txt") ) SERVER.files.getFileTXT( content, extension ) 
  else if( fileName.includes(".run") ){
    if( !DATA.only[extension] ) DATA.run = content
    else DATA.run = DATA.only[extension]
  } 
  else{
    DATA.extension = extension
    if( !DATA.archives[extension] ) DATA.archives[extension] = ""
    if( DATA.only[extension] ) DATA.archives[extension] = DATA.only[extension] 
    else DATA.archives[extension] = DATA.archives[extension] + ( content + "\n" )
  }
}

SERVER.files.getFileHTML = ( content, extension ) => {
  
  if( DATA.only[extension] ) DATA.html = DATA.only[extension]
  else DATA.html = DATA.html + ( content + "\n" )  
} 

SERVER.files.getFileCSS = ( content, extension ) => {
  
  if( FN.includes.add( content ) ){

    content = SERVER.files.regexImport( content )
  }
  if( DATA.only[extension] ) DATA.css = DATA.only[extension]
  else DATA.css = DATA.css + ( content + "\n" )
}

SERVER.files.getFileJS = ( content, extension ) => {
  
  if( FN.includes.add( content ) ){

    content = SERVER.files.regexImport( content )
  }
  if( DATA.only[extension] ) DATA.js = DATA.only[extension]
  else DATA.js = DATA.js + ( content + "\n" )
}

SERVER.files.getFileTXT = ( content, extension ) => {
  if( DATA.only[extension] ) DATA.txt = DATA.only[extension]
  else DATA.txt = DATA.txt + ( content + "\r\n" )
}
/*
 
SERVER.files.getFileTypes = ( content, value ) => {

  if( SERVER.files.includeDisable( content ) ){

    if( DATA.fileDisabled == undefined ) DATA.fileDisabled = []

    if( !DATA.fileDisabled.includes(value) ) {

      DATA.fileDisabled.push( value )
    }
    return 0
  }
  
  let s = value.split(".")
  let length = s.length
  let extension = s[length-1]
  
  if( SERVER.files.includeOnly( content ) ){
      
    DATA.only[extension] = content
  }
  
  SERVER.files.getFileType( content, extension )

}


SERVER.files.getFileType = ( content, extension ) => {
  
  if( SERVER.files.includesImport( content ) ){

    content = SERVER.files.regexImport( content )
  }
  if( DATA.only[extension] ) DATA[extension] = DATA.only[extension]
  else DATA[extension] = DATA[extension] + ( content + "\n" )
}
 */

SERVER.files.regexImport = ( content ) => {

  if( FN.includes.add( content ) ){

      var regExp = /add.+\)/g;
      var array = content.match(regExp)
      var files = []
      var code = ""

      for( index in array ){
         files.push( array[ index ].split(`"`)[1] )
      }
       /*
      var cut = files[files.length-1]+`")`
      var codeBottom = content.split(cut)[1]
      */
      var cut = content.split(`\")\n`)

      for(let x =0; x<files.length; x++){
        delete cut[x]
      }
    
      var codeBottom = cut.join("\n")
          
      for( index in files ){
        var filename = files[ index ]
        var dir = `${ DATA.directory }/`
   
        if( filename && filename.includes("."))
         code += fs.readFileSync(dir+filename,'utf8')
      }

      content = code + "\n" + codeBottom
  }

  return content
}


SERVER.run = async() => {
  
  await SERVER.files.generateFileServer()
  const { exec } = require('child_process');
  exec('node server.js', { detached: true, cwd: "./" }, (err, stdout, stderr) => {  //, cwd: ""

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)

    if (err) {
      console.log("err")
      return;
    }

  })
  
  log("Running server -> localhost:9001")
}


SERVER.close = () => {
    
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:9001/exit', true)

  request.onload = function (data) {
    log(data)
  }
  request.send()
  log("Stop server -> localhost:9001")
}


SERVER.project = {}


/*
SERVER.project.compile = () => {

  var project = []
  var Data = DATA.project.plurality

  for(let index0 in Data.files ){

    if( DATA.fileDisabled == undefined || !DATA.fileDisabled.includes( Data.files[ index0 ] ) ){

      project.push( Data.files[ index0 ] )

      for(let index in Data.p0[ Data.files[ index0 ] ] ){
        let fileName = Data.p0[ Data.files[ index ] ][ index ]
        if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName ) ) 
          return project.push( fileName )

        for(let index2 in Data.p1[ fileName ] ){
          let fileName2 = Data.p1[ fileName ][index2]
          if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName2 ) ) 
            return project.push( fileName2 )

          for(let index3 in Data.p2[ fileName2 ] ){
            let fileName3 = Data.p2[ fileName2 ]
            if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName3 ) ) 
              return project.push( fileName3 )

            for(let index4 in Data.p3[ fileName3 ] ){
              let fileName4 = Data.p3[ fileName3 ]

              if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName4 ) ) 
                return project.push( fileName4 )              
            }
          }
        }
      }
    }
  }

  promise.then( ( val ) => {
    SERVER.project.resetArchives()
    $.each( project , ( index, value ) => {
      SERVER.files.getFileContents( value )
    })
    return val
  }).then( ( val ) => {
    SERVER.files.generate()
  })
}
*/
 
SERVER.project.compile = () => {

  var project = []
  var Data = DATA.project.plurality

  for( index in Data.files ){

    if( DATA.fileDisabled == undefined || !DATA.fileDisabled.includes( Data.files[ index ] ) ){

      project.push( Data.files[ index ] )
 
      $.each( Data.p0[ Data.files[ index ] ], ( index, fileName ) => {

        if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName ) ) return
        project.push( fileName )

        $.each( Data.p1[ fileName ], ( index2, fileName2 ) => {

          if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName2 ) ) return
          project.push( fileName2 )

          $.each( Data.p2[ fileName2 ], ( index3, fileName3 ) => {

            if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName3 ) ) return
            project.push( fileName3 )

            $.each( Data.p3[ fileName3 ], ( index4, fileName4 ) => {

              if( DATA.fileDisabled && DATA.fileDisabled.includes( fileName4 ) ) return
              project.push( fileName4 )

            })

          })

        })

      })
    }

  }

  promise.then( ( val ) => {
    SERVER.project.resetArchives()
    $.each( project , ( index, value ) => {
      SERVER.files.getFileContents( value )
    })
    return val
  }).then( ( val ) => {
    SERVER.files.generate()
  })
}
 

SERVER.project.resetArchives = () => {

  DATA.html = "";
  DATA.css = "";
  DATA.js = "";
  DATA.txt = "";
  DATA.extension = "";
  DATA.archives = {};
}


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




FN.menuAbout = {}

FN.menuAbout.checkUpdates = () => {
  fetch('https://raw.githubusercontent.com/Editoi-Studio/Editoi/main/version.txt')
    .then(function(response) {
    response.text().then(function (text) {
      console.log( text )
      FN.menuAbout.isNewUpdate(text)
    })    
  }).catch(function(error) {
    alert( error.message)
  })
}

FN.menuAbout.isNewUpdate = (value) => {
  
  let oldVersion = parseInt( DATA.version.split(".").join("") )
  let version = parseInt( value.trim().split(".").join("") )
  
  if(version > oldVersion){
    $(".checking").html("New version disponible "+value)  
  }else{
    $(".checking").html("Is updated!")  
  }
}


FN.menuOpen = {}

FN.menuOpen.appendFolders = async( div ) => {

  var folders = await SERVER.files.getFolders( DATA.directory )

  var options = ELEMENT.option( "Select folder" )

  for(let index in folders){
    var folder = folders[index]
    var template = ELEMENT.option( folder )
    options+=template
  }

  $( div ).html(options)
}


FN.menuOptions = {}

FN.menuOptions.start = () => {
  
  var options = ELEMENT.option( "Select EditorTheme" )

  for(let index in DATA.themes){
    var folder = DATA.themes[index]
    var template = ELEMENT.option( folder )
    options+=template
  }

  $(".select-EditorTheme").html(options)
  
  // get localstorage
  
  let root = document.documentElement
  
  var val = localStorage.getItem('port')
  if(val) {
    DATA.port = val
    $(".menuOptions_port").val(val)
  }

  var val = localStorage.getItem('font')
  if(val) {
    DATA.font = val
    $(".menuOptions_font").val(val)
    root.style.setProperty('--font', val.split("px")[0] + "px")
  }
  
  var val = localStorage.getItem('theme')
  if(val && val != "Select EditorTheme") {
    DATA.theme = val
    $(".select-EditorTheme").val(val)
    EVENT.menuOptions.selectEditorTheme()
  }else{
    $(".select-EditorTheme").val("guri.css")
    EVENT.menuOptions.selectEditorTheme()
  }      
}

FN.editor = {}

FN.editor.deleteLine = () => {
   var doc = editor.getDoc()
   var cursor = doc.getCursor()
   doc.replaceRange("", { line: cursor.line, ch: 0 }, { line: cursor.line, ch: 1000 })
}

FN.editor.insertLine = ( text ) => {
   var doc = editor.getDoc()
   var cursor = doc.getCursor()
   doc.replaceRange(text, cursor)
}

FN.editor.getLine = () => {
  var doc = editor.getDoc()
  var cursor = doc.getCursor()
  return doc.getLine(cursor.line)
}


FN.editor.start = () => {

  editor = CodeMirror.fromTextArea( document.getElementById("editor"), {
    lineNumbers: true,
    mode: "javascript", //htmlmixed
    theme: "guri",
    lineWrapping: true,
    styleActiveLine: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    matchBrackets: true,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    onLoad: FN.editor.loaded(),
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  })

  editor.foldCode(CodeMirror.Pos(0, 0))

  $('.CodeMirror').attr("onkeyup", "EVENT.editor.tabSnippets(event)")
}

FN.editor.loaded = () => {

  console.log( "CodeMirror loaded" )

}


FN.editor.changeMode = ( blockName ) => {
  
  var name = blockName
 
  if( name.includes(".html") ) editor.setOption("mode", "htmlmixed")
  else if( name.includes(".cs") && !name.includes(".css") ) editor.setOption("mode", "text/x-csharp")
  else if( name.includes(".css") ) editor.setOption("mode", "css")
  else if( name.includes(".txt") ) {  
    editor.setOption("mode", "text/x-markdown") 
  }
  else if( name.includes(".ts") ) editor.setOption("mode", "text/typescript")
  else if( name.includes(".js") ) editor.setOption("mode", "javascript")
  else if( name.includes(".json") ) editor.setOption("mode", "application/ld+json")
  else if( name.includes(".go") ) editor.setOption("mode", "text/x-go")
  else if( name.includes(".ex") || name.includes(".exs") ) editor.setOption("mode", "elixir")
  
  else if( name.includes(".bat") ) editor.setOption("mode", "application/x-powershell")
  else if( name.includes(".asm") ) editor.setOption("mode", "gas")  
  
  else if( name.includes(".rs") ) editor.setOption("mode", "rust") 
  
  else if( name.includes(".c") ) editor.setOption("mode", "text/x-csrc")
  
  else if( name.includes(".cpp") ) editor.setOption("mode", "text/x-c++src")
  else if( name.includes(".asm") ) editor.setOption("mode", "text/x-csrc")
  else if( name.includes(".lua") || name.includes(".wlua")) editor.setOption("mode", "lua")
  else if( name.includes(".java") ) editor.setOption("mode", "text/x-java")
  else if( name.includes(".hx") ) editor.setOption("mode", "haxe")
  else if( name.includes(".py") ) editor.setOption("mode", "python")
  else if( name.includes(".rb") || name.includes(".rbw") ) editor.setOption("mode", "ruby")
}


FN.editor.import = ( fileURL ) => {

  var split = fileURL.split("/")
  var url = DATA.directory + "/" + split[0] + "/" + split[1]
  var package = "/package.json"
  var fname = split[3]
  var code = JSON.parse( fs.readFileSync( url+package,'utf8' ) ).plurality

  if( code.p0[ fname ] ) FN.editor.importP0( code, url, fname )
}

FN.editor.importP0 = ( code, url, fname ) => {

  for( index in code.p0[ fname ] ){

    var block = code.p0[ fname ][ index ]

    if( !JSON.stringify( DATA.project.plurality.all ).includes( block ) ){

      var newFileURL = url + "/files/" + block
      var fileContent = fs.readFileSync( newFileURL,'utf8' )
      var directory = DATA.directory + "/" + DATA.folderSelected + "/" + DATA.project.name + "/files"

      SERVER.files.createFile( directory, block, fileContent )

      if( fileContent ) DATA.project.plurality.all[ block ] = 1
      else DATA.project.plurality.all[ block ] = 0

      FN["inputBox1"]( block )
    }
  }
}


FN.editor.render = () => {

  if(DATA.editorHide){

    var content = editor.getValue()
    let el = get('#markdown')

    if( DATA.lastSelected.includes(".html") ){
      el.innerHTML = content
    }else{
      el.innerHTML = marked(content, { renderer: renderer })
    }
  } 
}

var renderer = new marked.Renderer()
renderer.link = function( href, title, text ) {
  return '<a target="_blank" href="'+ href +'" title="' + title + '">' + text + '</a>'
}

FN.snippets = {}


FN.snippets.insert = ( lineContent ) => {

  for( index in DATA.snippets ){

    if( lineContent.includes( DATA.snippets[ index ]["snip"] ) ){

      if( lineContent.includes("import") ) FN.snippets.import( lineContent )
      else{
        FN.editor.deleteLine()
        FN.editor.insertLine( DATA.snippets[ index ]["text"] )
      }
    }
  }
}

FN.snippets.load = () => {

  var file = "snippets.json"
  var dir = `${ DATA.directory }/Editor/snippets/files`

  SERVER.files.getFile( dir, file ).then( ( content ) => {

    var snip = content;
    var file = JSON.parse( snip )

    for(let index in file){

      var key = Object.keys( file[ index ] )

      FN.snippets.create( key[0], file[ index ][ key[0] ] )
    }
  })
}

FN.snippets.create = ( snip, text ) => {

  DATA.snippets.push( {"snip": snip+"\t", "text": text } )
}


FN.snippets.insert = ( lineContent ) => {

  for( index in DATA.snippets ){

    if( lineContent.includes( DATA.snippets[ index ]["snip"] ) ){

      if( lineContent.includes("import") ) FN.snippets.import( lineContent )
      else{
        FN.editor.deleteLine();
        FN.editor.insertLine( DATA.snippets[ index ]["text"] )
      }
    }
  }
}


FN.snippets.import = ( content ) => {

  var regExp = /import.+\)/g;
  var array = content.match(regExp)
  var files = []
  var code = ""

  for( index in array ){
    files.push( array[ index ].split(`"`)[1] )
  }

  var fileURL = ""

  for( index in files ){
    fileURL = files[ index ]
  }

  FN.editor.import( fileURL )
}


DATA.counter = 0
DATA.oldName = ""

FN.input = {}



 




FN.input.getName = ( val ) => {
  
  if( FN.exist( val ) ){
    
    DATA.counter+=1
    
    var t = val.split(".")
    var l = t.length
    var e = t[l-1]
    var n = t[l-2]
    
    if( !val.includes("___") ){
      
      t[l-2] = n + "___" + DATA.counter 
      DATA.oldName = n   
      
    }else{
      
      t[l-2] = DATA.oldName + "___" + DATA.counter 
      
    }
    
    val = t.join(".") 
    
    return FN.input.getName( val )
    
  }else{
    return val
  }  
}

FN.input.appendBlock = ( filename, box ) => {

  $( "#"+box ).append( ELEMENT.block( filename, box ) )
  FN.scrollToBottom( box )
}


FN.input["inputBox0"] = ( filename ) => {

  DATA.project.plurality.files.push( filename )
  DATA[ "box0" ] = DATA.project.plurality.files

  DATA.project.plurality.p0[ filename ] = []

  FN.input.appendBlock( filename, "box0" )
}



FN.input["inputBox1"] = ( filename ) => {

  if( !DATA.box0Selected ) alert( "Select a file" )
  else{

    DATA.project.plurality.p0[ DATA.box0Selected ].push( filename )
    DATA[ "box1" ] = DATA.project.plurality.p0[ DATA.box0Selected ]

    DATA.project.plurality.p1[ filename ] = []

    FN.input.appendBlock( filename, "box1" )
  }
}



FN.input["inputBox2"] = ( filename ) => {

  if( !DATA.box1Selected ) alert( "Select a folder" )
  else{

    DATA.project.plurality.p1[ DATA.box1Selected ].push( filename )
    DATA[ "box2" ] = DATA.project.plurality.p1[ DATA.box1Selected ]

    DATA.project.plurality.p2[ filename ] = []

    FN.input.appendBlock( filename, "box2" )
  }
}



FN.input["inputBox3"] = ( filename ) => {

  if( !DATA.box2Selected ) alert( "Select a folder" )
  else{

    DATA.project.plurality.p2[ DATA.box2Selected ].push( filename )
    DATA[ "box3" ] = DATA.project.plurality.p2[ DATA.box2Selected ]

    DATA.project.plurality.p3[ filename ] = []

    FN.input.appendBlock( filename, "box3" )
  }
}



FN.input["inputBox4"] = ( filename ) => {

  if( !DATA.box3Selected ) alert( "Select a folder" )
  else{

    DATA.project.plurality.p3[ DATA.box3Selected ].push( filename )
    DATA[ "box4" ] = DATA.project.plurality.p3[ DATA.box3Selected ]

    FN.input.appendBlock( filename, "box4" )
  }
}



FN.input["inputBox5"] = ( filename ) => {
    console.log(filename)

    if( !DATA.project.plurality.modules.includes(filename) ){
      DATA.project.plurality.modules.push(filename)
    }

    FN.input.appendBlock( filename, "box5" )
}


FN.block = {}


FN.block.get = ( value ) => {

  var components = ""

  for( index in DATA[ value ] ){

    components+= ELEMENT.block( DATA[ value ][ index ], value )
  }

  return components
}


FN.block.type = {}

FN.block.type[ "box0" ] = ( blockName ) => {

  FN.block.cleanBox( "box2" )
  FN.block.cleanBox( "box3" )
  FN.block.cleanBox( "box4" )

  DATA.box0Selected = blockName
  DATA.box1Selected = 0
  DATA.box2Selected = 0
  DATA.box3Selected = 0
  DATA.box4Selected = 0
  
  let slot = FN.tab.getSlot()

  DATA.slots[ slot ].box0Selected = blockName // project state
  DATA.slots[ slot ].box1Selected = 0
  DATA.slots[ slot ].box2Selected = 0
  DATA.slots[ slot ].box3Selected = 0
  DATA.slots[ slot ].box4Selected = 0

  DATA.lastBoxSelected = "files"

  FN.block.selectedName( blockName )

  DATA[ "box1" ] = DATA.project.plurality.p0[ blockName ]

  FN.block.append( "box1" )
}



FN.block.type[ "box1" ] = ( blockName ) => {

  FN.block.cleanBox( "box3" )
  FN.block.cleanBox( "box4" )

  DATA.box1Selected = blockName
  DATA.box2Selected = 0
  DATA.box3Selected = 0
  DATA.box4Selected = 0
  
  let slot = FN.tab.getSlot()

  DATA.slots[ slot ].box1Selected = blockName
  DATA.slots[ slot ].box2Selected = 0
  DATA.slots[ slot ].box3Selected = 0
  DATA.slots[ slot ].box4Selected = 0

  DATA.lastBoxSelected = "p0"

  DATA[ "box2" ] = DATA.project.plurality.p1[ blockName ]

  FN.block.append( "box2" )

  log("box1")
}

FN.block.type[ "box2" ] = ( blockName ) => {

  FN.block.cleanBox( "box4" )

  DATA.box2Selected = blockName
  DATA.box3Selected = 0
  DATA.box4Selected = 0
  
  let slot = FN.tab.getSlot()

  DATA.slots[ slot ].box2Selected = blockName
  DATA.slots[ slot ].box3Selected = 0
  DATA.slots[ slot ].box4Selected = 0

  DATA.lastBoxSelected = "p1"

  DATA[ "box3" ] = DATA.project.plurality.p2[ blockName ]

  FN.block.append( "box3" )

  log("box2")
}

FN.block.type[ "box3" ] = ( blockName ) => {

  DATA.box3Selected = blockName
  DATA.box4Selected = 0
  
  let slot = FN.tab.getSlot()

  DATA.slots[ slot ].box3Selected = blockName
  DATA.slots[ slot ].box4Selected = 0

  DATA.lastBoxSelected = "p2"

  DATA[ "box4" ] = DATA.project.plurality.p3[ blockName ]

  FN.block.append( "box4" )

  log("box3")
}

FN.block.type[ "box4" ] = ( blockName ) => {

  DATA.box4Selected = blockName
  DATA.slots[ FN.tab.getSlot() ].box4Selected = blockName

  DATA.lastBoxSelected = "p3"

  log("box4")
}


FN.block.remove = ( data ) => {

  DATA[ data ] = ["ss.js", "file2.js", "file3.js", "file4.js"]

  var components = FN.block.get( data )

  $("#"+data ).html( components )
}



FN.block.append = ( data ) => {

  var components = FN.block.get( data )

  $("#"+data ).html( components )
}


FN.block.cleanBox = ( box ) => {

  DATA[box+"Selected"] = 0

  $("#"+box).html("")
}



FN.block.selectedName = ( val ) => {

  $(".blockSelectedName").html( val )
}


FN.tab = {}

FN.tab.getSlot = () => {
  return DATA.slotSelected
}

FN.box = {}
FN.box.sortable = {}


FN.box.sortable.start = () => {

  FN.box.sortable.box0()
  FN.box.sortable.box1()
  FN.box.sortable.box2()
  FN.box.sortable.box3()
  FN.box.sortable.box4()
}

FN.box.sortable.box0 = () => {

  $(".sortable-box0").sortable({
    connectWith: ".sortable-box0",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      var name = ui.item.html()
      var group = ui.item.attr('group')

      DATA.project.plurality.files = []

      $('#box0 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.files.push( fname )
      })
    }
  }).disableSelection()
}

FN.box.sortable.box1 = () => {

  $( ".sortable-box1" ).sortable({
    connectWith: ".sortable-box1",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      DATA.project.plurality.p0[ DATA.box0Selected ] = []

      $('#box1 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.p0[ DATA.box0Selected ].push( fname )
      })
    }
  }).disableSelection()
}

FN.box.sortable.box2 = () => {

  $( ".sortable-box2" ).sortable({
    connectWith: ".sortable-box2",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      DATA.project.plurality.p1[ DATA.box1Selected ] = []

      $('#box2 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.p1[ DATA.box1Selected ].push( fname )
      })
    }
  }).disableSelection()
}

FN.box.sortable.box3 = () => {

  $( ".sortable-box3" ).sortable({
    connectWith: ".sortable-box3",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      DATA.project.plurality.p2[ DATA.box2Selected ] = []

      $('#box3 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.p2[ DATA.box2Selected ].push( fname )
      })
    }
  }).disableSelection()
}

FN.box.sortable.box4 = () => {

  $( ".sortable-box4" ).sortable({
    connectWith: ".sortable-box4",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      DATA.project.plurality.p3[ DATA.box3Selected ] = []

      $('#box4 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.p3[ DATA.box3Selected ].push( fname )
      })
    }
  }).disableSelection()
}

FN.box.colGridRemove = () => {

  $("#inputBox1").hide()
  $("#inputBox2").hide()
  $("#inputBox3").hide()
  $("#inputBox4").hide()

  $("#box1").hide()
  $("#box2").hide()
  $("#box3").hide()
  $("#box4").hide()

  $('#box2').sortable('enable')
  $('#box3').sortable('enable')
  $('#box4').sortable('enable')

  $(".colGrid").removeClass("kanbanGrid1")
  $(".colGrid").removeClass("kanbanGrid2")
  $(".colGrid").removeClass("kanbanGrid3")
  $(".colGrid").removeClass("kanbanGrid4")
}


FN.project = {}


FN.project.slotStart = () => {

  $(".menuOpenProject").hide()

  if( DATA.slots.slot1.folder ){

    $("#slot1").html( DATA.slots.slot1.folder + "/" + DATA.slots.slot1.project)
  }

  if( DATA.slots.slot2.folder ){

    $("#slot2").html( DATA.slots.slot2.folder + "/" + DATA.slots.slot2.project)
  }

  if( DATA.slots.slot3.folder ){

    $("#slot3").html( DATA.slots.slot3.folder + "/" + DATA.slots.slot3.project)
  }

  if( DATA.slots.slot4.folder ){

    $("#slot4").html( DATA.slots.slot4.folder + "/" + DATA.slots.slot4.project)
  }
}


FN.project.clean = () => {

  editor.clearHistory()
  editor.setValue( "" )

  DATA.lastSelected = 0
  DATA.box0Selected = 0
  DATA.box1Selected = 0
  DATA.box2Selected = 0
  DATA.box3Selected = 0
  DATA.box4Selected = 0
  DATA.box5Selected = 0

  $("#box0").html("")
  $("#box1").html("")
  $("#box2").html("")
  $("#box3").html("")
  $("#box4").html("")
  $("#box5").html("")
}


FN.project.select = async( projectName, folder, JSON ) => {

  if( projectName == null ) alert("error")
  
  if( folder ) DATA.folderSelected = folder

  var dir = `${ DATA.directory }/${ folder || $(".selectTopNew").val() }/${ projectName }`
   
  if(JSON){
    
    DATA.project = JSON
    DATA.fileDisabled = DATA.project.plurality.fileDisabled
    FN.project.open()
    DATA.projectSelected = projectName || $(".menuOpen-selectBottom").val()
    
  }else{
    
   // setTimeout(async function(){

    let file = await SERVER.files.getFile( dir, "package.json" ).then((data) => {
        
      FN.project.parser(data, projectName)
  
      
    })
    

 // },20)
    
  }
  



  /*
  SERVER.files.getFile( dir, "package.json" ).then( function( file ){

    DATA.project = JSON.parse( file )

    DATA.fileDisabled = DATA.project.plurality.fileDisabled

    SERVER.project.open()

    DATA.projectSelected = $(".selectBottom").val()
  })
  */
}



FN.project.parser = (data, projectName) => {
  DATA.project = JSON.parse( data )
  DATA.fileDisabled = DATA.project.plurality.fileDisabled
  FN.project.open()
  DATA.projectSelected = projectName || $(".menuOpen-selectBottom").val()
}

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


FN.project.save = () => {

  var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }`
  var pack = "package.json"  

  SERVER.files.getFile( dir, pack ).then(function(file){

    var package = JSON.parse(file)  
    var plurality = DATA.project.plurality
    package.plurality = plurality
    var data = JSON.stringify( package, null, 4 )

    SERVER.files.createFile( dir, pack, data ).then(function(){

      log("Project saved")
    })
  })   
}

FN.project.createNew = ( projectName, template, folderSelected ) => {

  var filename = "package.json"
  var dir = `${ DATA.directory }/${ folderSelected }/${ projectName }`

  SERVER.files.createFile( dir, filename, template ).then(function(){
    
    EVENT.menuOpen.selectFolder( folderSelected )

    alert("Project created")
    
  })

  SERVER.files.createIcon( dir )
}


FN.project.openWindow = () => {

  var dir = `${ DATA.root }${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/www/index.html`

  window.open( dir, DATA.project.name );
}

FN.project.openSelect = id => {

  DATA.slotSelected = id

  DATA.folderSelected = DATA.slots[ DATA.slotSelected ].folder
  DATA.projectSelected = DATA.slots[ DATA.slotSelected ].project

  if( DATA.folderSelected ){

    $(".selectTop").val( DATA.folderSelected )
    $(".selectBottom").val( DATA.projectSelected )

    FN.project.selectByClick()

    setTimeout(function(){

      FN.project.setState( DATA.slotSelected )

    },50)
  }
}

FN.project.setState = ( slotSelected ) => {

  log("project set state")

  if( DATA.slots[ slotSelected ].box0Selected ){

    $('.block').each( function() {

      if( $(this).html() == DATA.slots[ slotSelected ].box0Selected ){
        $(this).trigger("mousedown" )
        return 0
      }
    })

  }
}


FN.project.selectByClick = () => {

  FN.project.clean()

  if( DATA.projectSelected != "Select project" ){
    
    FN.project.select( DATA.projectSelected, DATA.slots[ DATA.slotSelected ].folder )
    
  }    

  FN.project.slotStart()
}

FN.project.templateJson = ( name, version, author, license, description ) => {

  var template = {}

  template.name = name
  template.version = version
  template.description = description
  template.main = "app.js"
  template.scripts = {}
  template.author = author
  template.license = license
  template.dependencies = {}

  Plurality = {}
  Plurality.files = []
  Plurality.modules = []
  Plurality.p0 = {}
  Plurality.p1 = {}
  Plurality.p2 = {}
  Plurality.p3 = {}

  template.plurality = Plurality

  var data = JSON.stringify( template, null, 4 )

  return data
}

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



FN.file = {}



FN.file.save = () => {

  log("Save")

  if( !DATA.projectSelected ){

    alert("Select a project to save")

    return 0      
  }

  if( !DATA.save && 
     DATA.folderSelected != "Select project" && 
     DATA.projectSelected != "Select project" && 
     DATA.lastSelected ){

    DATA.save = 1

    var editorData = editor.getValue()

    if( editorData ){
      DATA.lastElement.addClass("file").addClass("file-selected")
      DATA.lastElement.removeClass("folder").removeClass("folder-over").removeClass("folder-selected")
      DATA.project.plurality.all[ DATA.lastSelected ] = 1
    }else{
      DATA.lastElement.addClass("folder").addClass("folder-selected")
      DATA.lastElement.removeClass("file").removeClass("file-over").removeClass("file-selected")
      DATA.project.plurality.all[ DATA.lastSelected ] = 0
    }

    var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/files`
    var fileName = DATA.lastSelected

    SERVER.files.createFile( dir, fileName, editorData ).then(function(){

      log("File saved")

      DATA.project.plurality.fileDisabled = DATA.fileDisabled
      // FN.kanbanSave()
      FN.project.save()
    })

    FN.alert.show( "Project saved" )

    setTimeout(function(){
      FN.alert.hide()
      DATA.save = 0
      DATA.unlock = true
    }, 1300)
  }

}


FN.file.delete = {}


FN.file.delete.start = (value) => {
  
  if( !DATA.lastSelected ) return 0

  var Data = DATA.project.plurality

  var d = confirm("Delete?")

  if( d == true ) {

    if( !DATA.lastSelected.includes(".") ){
   // if( FN.kanbanIsSelected( DATA.box0Selected ) ){
      DATA.lastElement.remove()
      return 0
    }

    FN.file.delete[ DATA.lastBoxSelected ]( Data )

    DATA.lastElement.remove()
    editor.setValue( "" )

    FN.project.removeFiles()
 

    log("Delete")
  }
}


FN.file.delete.files = ( Data ) => {

  FN.file.remove( DATA.project.plurality[DATA.lastBoxSelected], DATA.lastSelected )

  $.each( Data.p0[ DATA.lastSelected ], ( index, fileName ) => {

    $.each( Data.p1[ fileName ], ( index2, fileName2 ) => {

      $.each( Data.p2[ fileName2 ], ( index3, fileName3 ) => {

        delete Data.p3[ fileName3 ]
      })

      delete Data.p2[ fileName2 ]
    })

    delete Data.p1[ fileName ]
  })

  delete Data.p0[ DATA.lastSelected ]

  $("#box1").html("")
}


FN.file.delete.p0 = ( Data ) => {

  FN.file.remove( DATA.project.plurality[DATA.lastBoxSelected][DATA.box0Selected], DATA.lastSelected )

  $.each( Data.p1[ DATA.lastSelected ], ( index2, fileName2 ) => {

    $.each( Data.p2[ fileName2 ], ( index3, fileName3 ) => {

      delete Data.p3[ fileName3 ]
    })

    delete Data.p2[ fileName2 ]
  })

  delete Data.p1[ DATA.lastSelected ]

  $("#box2").html("")
}


FN.file.delete.p1 = ( Data ) => {

  FN.file.remove( DATA.project.plurality[DATA.lastBoxSelected][DATA.box1Selected], DATA.lastSelected )

  for( index in DATA.project.plurality.p2[ DATA.lastSelected ] ){

    delete DATA.project.plurality.p3[ DATA.project.plurality.p2[ DATA.lastSelected ][ index ] ]
  }

  delete DATA.project.plurality.p2[ DATA.lastSelected ]

  $("#box3").html("")
}


FN.file.delete.p2 = ( Data ) => {

  FN.file.remove( DATA.project.plurality[ DATA.lastBoxSelected ][ DATA.box2Selected ], DATA.lastSelected )

  delete DATA.project.plurality.p3[ DATA.lastSelected ]

  $("#box4").html("")
}


FN.file.delete.p3 = ( Data ) => {

  FN.file.remove( DATA.project.plurality[ DATA.lastBoxSelected ][ DATA.box3Selected ], DATA.lastSelected )
}


FN.file.remove = ( array, item ) => {
  var index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
}

FN.alert = {}

FN.alert.show = ( value ) => {

  $(".alert").html( value )

  $(".alert").animate({
    height: '36px',
    opacity: 1
  });
}

FN.alert.hide = () => {

  $(".alert").animate({
    height: '2px',
    opacity: 0
  });
}


FN.includes = {}
 
FN.includes.add = ( content ) => {
  if( ( content.includes("//add(") || 
     content.includes("// add(") || 
     content.includes("; add(") ||
     content.includes(";add(") ||
     content.includes("# add(") ||
       content.includes("#add(") ) && 
     !content.includes(`"add`) && 
     !content.includes(`.add`) && 
     !content.includes(`add.`) && 
     !content.includes(`content.includes`) &&
     !content.includes(`///`) ) return true
  else return false
}

FN.includes.only = ( content ) => {

  if( ( content.includes("//only") || 
       content.includes("// only") ||
       content.includes("; only(") ||
     content.includes(";only(") ||
     content.includes("# only(") ||
       content.includes("#only(") ) && 
     !content.includes("///") && 
     !content.includes(`content.includes`) &&
     !content.includes("content.only") ){

    return true
  }
  return false
}

FN.includes.disable = ( content ) => {

  if( ( content.includes("//disable") || 
       content.includes("// disable")  ||
       content.includes("; disable") ||
     content.includes(";disable") ||
     content.includes("# disable") ||
       content.includes("#disable") ) && 
     !content.includes("///") &&
    !content.includes("content.includes")  ){

    return true
  }
  return false
}

FN.includes.normal = ( content ) => {

  if( ( content.includes("//normal") || 
       content.includes("// normal")  ||
       content.includes("; normal") ||
     content.includes(";normal") ||
     content.includes("# normal") ||
       content.includes("#normal") ) && 
     !content.includes("///") &&
    !content.includes("content.includes")  ){

    return true
  }
  return false
}

 


EVENT.menuTop = {}
EVENT.menuTop.tab = {}
EVENT.menuTop.btn = {}


EVENT.menuTop.btn.open = (event) => {  

  $("#menuAbout").hide()
  $("#menuOptions").hide()
  $(".menuNew").hide() 


  $(".menuOpen-selectTop").val( "Select folder" )
  $(".menuOpen-selectBottom").html( "Select project" )

  if( $(".menuOpen").is(":visible") ) $(".menuOpen").hide()
  else $(".menuOpen").show()

  FN.menuOpen.appendFolders(".menuOpen-selectTop")
}

EVENT.menuTop.btn.new = (event) => {  

  $("#menuAbout").hide()
  $("#menuOptions").hide()

  $(".menuOpen").hide()

  if( $(".menuNew").is(":visible") ) $(".menuNew").hide()
  else $(".menuNew").show()

  FN.menuOpen.appendFolders(".selectTopNew") 
}

EVENT.menuTop.btn.delete = (event) => {  

  log("Delete")

  if( !DATA.projectSelected ){

    alert("Select a file to delete")

    return 0      
  }

  FN.file.delete.start()
}


EVENT.menuTop.btn.render = (event) => {  

  log("Render")

  if( !DATA.projectSelected ){

    alert("Select a file to render")

    return 0      
  }

  if(!DATA.editorHide){
    DATA.editorHide = true
    $(".CodeMirror").hide()
    $("#markdown").show()

  }else{
    DATA.editorHide = false
    $("#markdown").hide()
    $(".CodeMirror").show()
  }

  FN.editor.render() 
}

EVENT.menuTop.btn.save = (event) => {  
  log("btn.save")
  FN.file.save() 
}

EVENT.menuTop.btn.run = (event) => {  
  log("btn.run")

  DATA.only = {}
  DATA.oldFileModule = ""  
  DATA.filesModule = {}
  
  if( DATA.lastSelected.includes(".html") ){

    DATA.run = false

  }else{
    DATA.run = true
  }

  log("Run")
  if( !DATA.projectSelected ){

    alert("Select a project to run")

  }else{
    SERVER.project.compile()
  }    

}

EVENT.menuTop.btn.about = (event) => { 

  $("#menuOptions").hide()
  $(".menuNew").hide() 
  $(".menuOpen").hide()

  if( $("#menuAbout").is(":visible") ) $("#menuAbout").hide()
  else $("#menuAbout").show()
  
  FN.menuAbout.checkUpdates()
}

EVENT.menuTop.btn.menuOptions = (event) => {  

  $("#menuAbout").hide()

  $(".menuNew").hide() 
  $(".menuOpen").hide()

  if( $("#menuOptions").is(":visible") ) $("#menuOptions").hide()
  else $("#menuOptions").show()
  
}

EVENT.menuTop.tab.click = (event) => {  
 
  DATA.slotID = event.target.id  
  $(".tab").removeClass("tabSelected")
  $(event.target).addClass("tabSelected") 
  FN.project.openSelect( event.target.id ) 
}

EVENT.menuTop.tab.over = (event) => {  
 
  var target = event.target  
  if( !$(target).hasClass( "tabSelected" ) ) $(target).addClass("tabOver")
}

EVENT.menuTop.tab.out = (event) => {  
 
  var target = event.target  
  $(target).removeClass("tabOver") 
}


EVENT.menuTop.slider = (event) => {
  
  if( !DATA.projectSelected ){

    alert("Select a project to serve")

    return 0      
  }

  event.stopPropagation();
 
  if( $('#' + "view").is(":checked") ){
    console.log("close")
    
    SERVER.close()

    FN.alert.show( "Server stop" )
    
    setTimeout(function(){
      FN.alert.hide()
    }, 1300)

  }else if( !$('#' + "view").is(":checked") ){
    console.log("run")
    
    SERVER.run()

    FN.alert.show( `localhost:${DATA.port}` )
    setTimeout(function(){
      FN.alert.hide()
    }, 1300)
  } 
}


EVENT.menuNew = {}
EVENT.menuNew.btn = {}

EVENT.menuNew.btn.create = async() => {

  var projectName = $(".menuItem1").val()
  var version = $(".menuItem2").val()
  var author = $(".menuItem3").val()
  var license = $(".menuItem4").val()
  var description = $(".menuItem5").val()
  var folder = $(".selectTopNew").val()
  
  DATA.folderSelected = folder
  DATA.projectSelected = projectName

  if( !projectName ) alert("Insert a name")
  else if( !DATA.folderSelected ) alert("Select a folder")
  else if( DATA.folderSelected == "Select folder" ) alert("Select a folder")  
  else if( DATA.folders.includes( projectName ) ) alert("This name already exist")
  else{

    var template = await FN.project.templateJson( projectName, version, author, license, description )

    DATA.templateOpen = JSON.parse( template )

    await FN.project.createNew( projectName, template, folder )

   // setTimeout(function(){            

    DATA.slots[ DATA.slotSelected ].folder = folder
    DATA.slots[ DATA.slotSelected ].project = projectName

    EVENT.menuOpen.selectProject(projectName, folder, DATA.templateOpen)

   // }, 300)


    EVENT.menuNew.btn.cancel()
  }
}
 

EVENT.menuNew.btn.cancel = () => {
  log("cancel")
  $(".menuNew").hide()
}

EVENT.menuNew.selectFolder = () => {
  log("selectFolder")
  
  var val = $(".selectTopNew").val()
  if( val != "Select folder" ) DATA.folderSelected = val
  
  var dir = DATA.directory + "/" + val  

  SERVER.files.getFolders( dir ).then( function(){

    var folders = ELEMENT.option( "Select folder" )

    DATA.folders.forEach( file => {
      folders+= ELEMENT.option( file )
    })

    $(".menuOpen-selectBottom").html( folders )

  })
}


EVENT.menuOpen = {}

EVENT.menuOpen.selectFolder = () => {
  
  var dir = DATA.directory + "/" + $(".menuOpen-selectTop").val()  

  SERVER.files.getFolders( dir ).then( function(){

    var folders = ELEMENT.option( "Select project" )

    DATA.folders.forEach( file => {
      folders+= ELEMENT.option( file )
    })

    $(".menuOpen-selectBottom").html( folders )
  })
}

EVENT.menuOpen.selectProject = ( project, folder, JSON ) => {
   
  FN.project.clean()
    
  if( !project ){
    project = $(".menuOpen-selectBottom").val()
    DATA.projectSelected = project    
  } 
  
  if( !folder ){
    folder = $(".menuOpen-selectTop").val()
	DATA.folderSelected = folder
  }   

  if( project != "Select project" ){
    
    DATA.project.name = project
    
    FN.project.select( project, folder, JSON )

    $( DATA.slotID ).html( DATA.folderSelected + "/" + project)

    DATA.slots[ DATA.slotSelected ].folder = DATA.folderSelected
    DATA.slots[ DATA.slotSelected ].project = DATA.projectSelected

    FN.project.slotStart()

    $(".menuOpenProject").hide()
  } 
}


EVENT.menuOptions = {}
EVENT.menuOptions.btn = {}

EVENT.menuOptions.btn.save = () => { 
  
  var val = $(".menuOptions_port").val()
  if(val) {
    DATA.port = val
    localStorage.setItem('port', val);
  }
  
  var val = $(".select-EditorTheme").val()
  if(val) {
    DATA.theme = val
    localStorage.setItem('theme', val);
  }
  
  var val = $(".menuOptions_font").val()
  if(val) {
    DATA.font = val.split("px")[0]
    localStorage.setItem('font', DATA.font)
    $(".menuOptions_font").val(DATA.font)
    root.style.setProperty('--font', DATA.font + "px")
  }    
  
  $(".menuOptions").hide()
}

EVENT.menuOptions.btn.cancel = () => {
  
  $(".menuOptions").hide()
}

EVENT.menuOptions.selectAppTheme = () => {
  
   let theme = $(".select-AppTheme").val()   
}

EVENT.menuOptions.color1 = () => {  
   let color = $("#color1").val() 
   root.style.setProperty('--box-1', color );
}

EVENT.menuOptions.color2 = () => {  
   let color = $("#color2").val() 
   root.style.setProperty('--blue-2', color );
}

EVENT.menuOptions.color3 = () => {  
   let color = $("#color3").val() 
   root.style.setProperty('--blue-3', color );
}

EVENT.menuOptions.selectEditorTheme = () => {
  
  let theme = $(".select-EditorTheme").val()
  editor.setOption("theme", theme.split(".css")[0])  
  let color1 = $(".CodeMirror").css("background-color")
  let color2 = $(".CodeMirror-activeline-background").css("background-color")
  if(theme == "guri.css"){
    color1 = "#151925"
    color2 = "#242844"
  }
  
  root.style.setProperty('--blue-2', color1 );
  root.style.setProperty('--blue-3', color2 );
}

EVENT.input = {}


EVENT.input.keydown = async(event) => {

  if( event.which == 13 || event.keyCode == 13 ){

    var el = $( event.target )
    var val = el.val()
    var id = el.attr("id")

    if( id.includes("Kanban") && val.includes(".") ){

      alert("No use dot")

    }else if( id.includes("Kanban") ){

      // FN.kanbanAppend( val, id )
      el.val("")

    }else if( !DATA.project ){

      alert( "Select a project")

    }else if( !val.includes(".") ){

      alert("Extension is required")

    }else{

      DATA.counter = 0

      val = await FN.input.getName( val )

      console.log( val )

      if( !DATA.project.plurality.all ) DATA.project.plurality.all = {}
      DATA.project.plurality.all[ val ] = 0
 
      FN.input[id]( val )

      el.val("")
    }
  }
}


EVENT.block = {}

EVENT.block.over = (event) => {

  var el = $(event.target)

  if( el.hasClass("block") ){
    if( el.hasClass("file") ) el.addClass("file-over")
    else el.addClass("folder-over")
  }
}

EVENT.block.out = (event) => {

  var el = $(event.target)

  if( el.hasClass("block") ){

    if( el.hasClass("file-over") && 
       !el.hasClass("file-selected") && 
       !el.hasClass("selected") ) el.removeClass("file-over")
    else if( el.hasClass("folder-over") && 
            !el.hasClass("folder-selected") && 
            !el.hasClass("selected") ) el.removeClass("folder-over")

  }
}

EVENT.block.down = (event) => {

  var el = $(event.target)

  if( el.hasClass("block") ){

    $(".file-selected").addClass("file-over")
    $(".folder-selected").addClass("folder-over")

    $(".block").removeClass("file-selected")
    $(".block").removeClass("folder-selected")

    var blockName = el.attr("filename") //el.html()
    var g = el.attr("group")

    $("."+g).removeClass("file-over").removeClass("folder-over").removeClass("selected")
    if( el.hasClass("file") ) el.addClass( "file-selected" ).addClass("selected")
    else el.addClass( "folder-selected" ).addClass("selected")


    DATA.lastElement = el

    FN.block.type[ g ]( blockName )

    DATA.lastSelected = blockName

    if( blockName.includes(".kanban") ) DATA.lastKanbanSelected = blockName

    if( g != "box5" && g != "kanbanBox"){

      $(".rightBottom").show()

      $(".box5").removeClass("file-over").removeClass("folder-over").removeClass("selected")
      $(".box5").removeClass("file-selected").removeClass("folder-selected")

      var dir = `${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/files`

      SERVER.files.getFile( dir, blockName ).then( function( file ){

        editor.clearHistory()

        if( file ){

          editor.setValue( file )

        }else{

          editor.setValue( "" )
        }

        FN.editor.render() 

        FN.editor.changeMode( blockName )
      })

    }

    //  $("#map").remove()
    /*
    if( FN.kanbanIsSelected( DATA.lastSelected ) ){

      FN.kanbanAdd()

      $(".kanbanFileName").html( DATA.lastSelected )

    }

    else{

      if( g != "kanbanBox" && DATA.kanban ) FN.kanbanRemove()
    }
*/


  }
}


EVENT.box = {}

EVENT.box.colBtn1 = () => {

 
  /*
  $(".colGrid").addClass("kanbanGrid1")

  $('#box20').sortable('disable')
  $('#box30').sortable('disable')
  $('#box40').sortable('disable')

  $("#inputBox1").show()

  $("#box1").show()
  */
  FN.box.colGridRemove()
  
  $(".colGrid").addClass("kanbanGrid1")

  $('#box2').sortable('disable')
  $('#box3').sortable('disable')
  $('#box4').sortable('disable')

  $("#inputBox1").show()

  $("#box1").show()
}

EVENT.box.colBtn2 = () => {

  FN.box.colGridRemove()
  $(".colGrid").addClass("kanbanGrid2")

  $('#box3').sortable('disable')
  $('#box4').sortable('disable')

  $("#inputBox1").show()
  $("#inputBox2").show()

  $("#box1").show()
  $("#box2").show()
}

EVENT.box.colBtn3 = () => {

  FN.box.colGridRemove()
  $(".colGrid").addClass("kanbanGrid3")
  $('#box4').sortable('disable')

  $("#inputBox1").show()
  $("#inputBox2").show()
  $("#inputBox3").show()

  $("#box1").show()
  $("#box2").show()
  $("#box3").show()

}

EVENT.box.colBtn4 = () => {

  FN.box.colGridRemove()
  $(".colGrid").addClass("kanbanGrid4")

  $("#inputBox1").show()
  $("#inputBox2").show()
  $("#inputBox3").show()
  $("#inputBox4").show()

  $("#box1").show()
  $("#box2").show()
  $("#box3").show()
  $("#box4").show()
}


EVENT.keypress = (event) => {

  if( event.ctrlKey && DATA.unlock ){
    if( event.keyCode == 19 ){
      DATA.unlock = false
      log( "save" ) 
      FN.file.save()
      setTimeout(function(){ DATA.unlock = true}, 900)
    }else if( event.keyCode == 0 ){
      DATA.unlock = false
      log( "space" )
     // snippetFile();
      setTimeout(function(){ DATA.unlock = true}, 900)
    }else if( event.keyCode == 9 ){
      DATA.unlock = false
      log( "Inspector" )
      require('nw.gui').Window.get().showDevTools()
      setTimeout(function(){ DATA.unlock = true}, 900)
    }else if( event.keyCode == 18 ){
      DATA.unlock = false
      log( "Reload" )
      chrome.runtime.reload()
      setTimeout(function(){ DATA.unlock = true}, 900)
    }
  }
}


EVENT.editor = {}

EVENT.editor.tabSnippets = (event) => {

  var lineContent = FN.editor.getLine()

  if( event.key == "Tab" ){
    
    if(lineContent.includes(`//script`)){
      
      SERVER.script.run()
      
    }else{
      FN.snippets.insert( lineContent )
    }    
  } 
}





ELEMENT.button = (btnName, event ) => {
  let template = gg({
    tag: "div",
    class: "element_button center noSelect",
    onclick: event, 
    html: btnName
  })   
  return template
}


ELEMENT.slider = (ev) => {
  let template = `   
  <label id="promo" name="promo" for="view" class="switch center round" onmouseup="${ev}">     
     <input id="view" aria-labelledby="promo" type="checkbox"> 
     <span class="slider round"></span>  
    
  </label>    
  `
 
  return template
}


ELEMENT.option = ( value ) => {
  var template = `<option value="${value}">${value}</option>`
  return template
}

ELEMENT.tab = (tab, classe) => {
  
  if( !classe ) classe = ""
  
  var template = gg({    
    id: "slot"+tab,
    class: `tab center noSelect ${classe}`,
    onclick: "EVENT.menuTop.tab.click(event)",
    onmouseover: "EVENT.menuTop.tab.over(event)",
    onmouseout: "EVENT.menuTop.tab.out(event)",
    html: tab,
  })
  return template
}


ELEMENT.input = ( id ) => {

  var input = gg({
    tag: "input",
    id: id,
    class: "input",
    onkeydown: "EVENT.input.keydown(event)",
    autocomplete: "off"
  })

  var t = gg({
    class: "border",
    html: input,
    style: `
margin: 1px;
`
  })

  return t
}


ELEMENT.box = ( data, classe ) => {

  if( !classe ) classe = ""

  var components = FN.block.get( data )

  var t = gg({
    id: data,
    class: `leftMT dark scrollbar noSelect sortable-${data} `+classe,
    html: components,
    style:`
max-height: calc( 160px - 32px - 21px );
min-height: calc( 160px - 32px - 21px );

`
  })

  return t
}




ELEMENT.block = ( filename, group, classe ) => {
  if( DATA.project.plurality.all && DATA.project.plurality.all[ filename ] == 1 ) classe = "file"
  else classe = "folder"

  var template = gg({
    id: FN.getID(),
    class: `block pointer ${ group } ${ classe }`,
    onmouseover: "EVENT.block.over(event)",
    onmouseout: "EVENT.block.out(event)",
    onmousedown: "EVENT.block.down(event)",
    group: group,
    filename: filename,
    html: FN.removeSpace( filename ),
      style:`
color: var(--white);
font-size: 12px;
padding: 6px;
margin: 2px;
`
  })

  return template
}

FN.removeSpace = (val) => {
  
  if( val.includes("___") ){
    var n = val.split("___")
    var l = n.length
    n[l-1] = n[l-1].split(".")[1]
    return n.join(".")
  }else{
    return val
  }
}


ELEMENT.menuOptions = ( event ) => {
  let template = gg({
    tag: "div",
    class: "element_menuOptions center noSelect",
    onclick: event, 
    html: `  <svg id="icon_menuOptions" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416.3 256c0-21 13.1-38.9 31.7-46.1-4.9-20.5-13-39.7-23.7-57.1-6.4 2.8-13.2 4.3-20.1 4.3-12.6 0-25.2-4.8-34.9-14.4-14.9-14.9-18.2-36.8-10.2-55-17.3-10.7-36.6-18.8-57-23.7C295 82.5 277 95.7 256 95.7S217 82.5 209.9 64c-20.5 4.9-39.7 13-57.1 23.7 8.1 18.1 4.7 40.1-10.2 55-9.6 9.6-22.3 14.4-34.9 14.4-6.9 0-13.7-1.4-20.1-4.3C77 170.3 68.9 189.5 64 210c18.5 7.1 31.7 25 31.7 46.1 0 21-13.1 38.9-31.6 46.1 4.9 20.5 13 39.7 23.7 57.1 6.4-2.8 13.2-4.2 20-4.2 12.6 0 25.2 4.8 34.9 14.4 14.8 14.8 18.2 36.8 10.2 54.9 17.4 10.7 36.7 18.8 57.1 23.7 7.1-18.5 25-31.6 46-31.6s38.9 13.1 46 31.6c20.5-4.9 39.7-13 57.1-23.7-8-18.1-4.6-40 10.2-54.9 9.6-9.6 22.2-14.4 34.9-14.4 6.8 0 13.7 1.4 20 4.2 10.7-17.4 18.8-36.7 23.7-57.1-18.4-7.2-31.6-25.1-31.6-46.2zm-159.4 79.9c-44.3 0-80-35.9-80-80s35.7-80 80-80 80 35.9 80 80-35.7 80-80 80z"></path></svg>`
  })   
  return template
}


COMPONENT.buttons = () => {
  let template = gg({
    class: "component_buttons center-buttons",
    html: `
    
    ${ ELEMENT.button( "Open", "EVENT.menuTop.btn.open()" ) }
    ${ ELEMENT.button( "New", "EVENT.menuTop.btn.new()" ) }
    ${ ELEMENT.button( "Delete", "EVENT.menuTop.btn.delete()" ) }
    
    ${ ELEMENT.slider("EVENT.menuTop.slider(event)") }
     
    ${ ELEMENT.button( "Render", "EVENT.menuTop.btn.render()" ) } 
    ${ ELEMENT.button( "Save", "EVENT.menuTop.btn.save()" ) }
    ${ ELEMENT.button( "Run", "EVENT.menuTop.btn.run()" ) }
 
    ${ ELEMENT.button( "About", "EVENT.menuTop.btn.about()" ) }
    
    ${ ELEMENT.menuOptions("EVENT.menuTop.btn.menuOptions()" ) }
    `
  })
  return template
}





COMPONENT.alert = () => {
  let template = gg({
    class: "alert",
    html: "File saved"
  })
  return template
}

COMPONENT.tabs = () => {
  let template = gg({
    class: "tabs",
    html: `
    ${ ELEMENT.tab(1, "tabSelected") }
    ${ ELEMENT.tab(2) }
    ${ ELEMENT.tab(3) }
    ${ ELEMENT.tab(4) }
    `
  })
  return template
}


TEMPLATE.menuTop_top = () => {
  let template = gg({
    class: "menuTop_top center",
    html: `
    ${ COMPONENT.buttons() }
    ${ TEMPLATE.menuOpen() }
    ${ TEMPLATE.menuNew() }
    ${ TEMPLATE.menuOptions() } 
    ${ TEMPLATE.menuAbout() } 
    ${ COMPONENT.alert() }
    `
  })
  return template
}
 
TEMPLATE.menuTop_bottom = () => {
  let template = gg({
    class: "menuTop_bottom",
    html: COMPONENT.tabs()
  })
  return template
}

TEMPLATE.menuTop = () => {
  let template = gg({
    class: "menuTop border",
    html: TEMPLATE.menuTop_top() + TEMPLATE.menuTop_bottom()
  })
  return template
}


TEMPLATE.menuOptions = () => {
  let template = gg({
    class: "menuOptions center",
    id: "menuOptions",
    html: `
 
    <div class="menuNew_top">
       
        <div class="menuLine">
          <div class="menuAttr">Port: </div>
          <input class="menuInput menuOptions_port" value="${DATA.port}">
        </div>
        
        <div class="menuLine">
          <div class="menuAttr">Font size: </div>
          <input class="menuInput menuOptions_font" value="${DATA.font}">
        </div>     
        
        <div class="menuLine">
          <div class="menuAttr">Editor theme: </div>
                 
          <select class="select border dark select-EditorTheme" onchange="EVENT.menuOptions.selectEditorTheme()">
             <option value="select folder">Select EditorTheme</option>      
          </select>          
        </div>
 
       
    </div>

    <div class="menuBottom center">
      <div class="btn noSelect" onmousedown="EVENT.menuOptions.btn.save()">Save</div>
      <div class="btn noSelect" onmousedown="EVENT.menuOptions.btn.cancel()">Cancel</div>
    </div>
 
    `
  })
  return template
}

/*
   <div class="menuLine">
           <div class="menuAttr">AppTheme: </div>  
           <div class="colors">
           <input type="color" class="color" id="color1" name="head" value="#2C374B" onchange="EVENT.menuOptions.color1()">    
           <input type="color" class="color" id="color2" name="head" value="#151925" onchange="EVENT.menuOptions.color2()"> 
           <input type="color" class="color" id="color3" name="head" value="#242844" onchange="EVENT.menuOptions.color3()"> 
           </div>
        </div>
*/

TEMPLATE.menuAbout = () => {
  let template = gg({
    class: "menuAbout center",
    id: "menuAbout",
    html: `
 
      <div class="menuAbout_top">
      
      <img src="images/logo.png">
      
      <div> Version 1.0.1 </div>
      
      <div class="checking"> Checking for updates 
      <svg id="updatesIcon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M492 257.1c-2.6-2.6-6-4-9.6-4-3.6 0-7 1.4-9.6 4l-13 13c4.3-61.8-19.5-122.5-65.3-165C356.9 70.2 307.7 51 256.1 51c-26.7 0-52.8 5.1-77.4 15.1-25.5 10.4-48.3 25.6-67.7 45.3-13.2 13.4-24.6 28.5-33.6 44.8-1.9 3.4-2.3 7.4-1.2 11.1 1.1 3.7 3.8 6.8 7.2 8.5 2 1 4.2 1.5 6.4 1.5 5.2 0 9.9-2.8 12.4-7.3 7.9-14.3 17.8-27.5 29.4-39.1 16.8-16.8 36.3-29.8 58.1-38.7 21.1-8.6 43.4-12.9 66.2-12.9 22.9 0 45.2 4.3 66.3 12.9 21.8 8.9 41.4 21.9 58.2 38.8 20.3 20.4 35.4 45.6 43.8 73 7 22.9 9.2 47.3 6.6 71.2l-18.9-18.5c-2.5-2.4-5.8-3.8-9.3-3.8-3.5 0-6.9 1.4-9.4 3.9-5.2 5.2-5.2 13.6 0 18.8l42.8 42.9c1.9 1.9 4.4 2.9 7 2.9 2.6 0 5.1-1 7-2.9l42.1-42.2c5.2-5.3 5.2-13.9-.1-19.2zM428.6 335.9c-2-1-4.2-1.5-6.4-1.5-5.2 0-9.9 2.8-12.4 7.3-7.9 14.3-17.8 27.5-29.4 39.1-16.8 16.8-36.3 29.9-58.2 38.7-21.1 8.6-43.4 12.9-66.3 12.9s-45.2-4.3-66.2-12.9c-21.8-8.9-41.4-21.9-58.2-38.7-37.6-37.8-56-90.9-50.3-143.9l18.4 18.5c2.4 2.4 5.6 3.7 9 3.7 3.4 0 6.6-1.3 9-3.7l1.3-1.3c4.9-4.9 4.9-13 0-17.9l-42.9-43c-1.9-1.9-4.4-2.9-7-2.9-2.6 0-5.1 1-7 2.9l-42 42.3c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7-1.4 9.6-4l13-13.1c-1.8 25.8 1.3 52 9 76.5 9.9 31.4 26.8 59.3 50.3 82.8 19.5 19.6 42.2 34.7 67.6 45.1 24.5 10 50.4 15 76.9 15 26.5 0 52.4-5.1 76.9-15 25.4-10.3 48.1-25.5 67.6-45.1 13.5-13.5 25-28.8 34.2-45.4 1.9-3.4 2.3-7.4 1.2-11.1-1.2-3.7-3.8-6.8-7.3-8.5z"></path></svg>
      </div> 
      
      <div> Site: <a href="https://editoi.com" target="_blank">Editoi.com</a> </div>
      <div> Github: <a href="https://github.com/Editoi-Studio/Editoi" target="_blank">Github</a> </div>
      <div> Discord: <a href="https://discord.gg/48AHpUYnhJ" target="_blank">Discord</a> </div>
<br>
      <div>Author: Gurigraphics </div>



       </div>
    `
  })
  return template
}


TEMPLATE.menuNew_top = () => {
  
  var folders = ELEMENT.option( "Select folder" )

  DATA.folders.forEach( file => {
    folders+= ELEMENT.option( file )
  })

  var selectTop = gg({
    class: "select border dark selectTopNew",
    tag: "select",
    html: folders,
    onchange: "EVENT.menuNew.selectFolder()"
  })

  return selectTop
}


TEMPLATE.menuNew = () => {
  let template = gg({
    class: "menuNew center",
    html: `
 
      <div class="menuNew_top">
      
        <div class="menuLine">
          <div class="menuAttr"> Folder: </div>
           ${ TEMPLATE.menuNew_top() }
        </div>

        <div class="menuLine">
          <div class="menuAttr">Name: </div>
          <input class="menuInput menuItem1" value="Example">
        </div>

        <div class="menuLine">
          <div class="menuAttr">Version: </div>
          <input class="menuInput menuItem2" value="1.0.0">
        </div>

        <div class="menuLine">
          <div class="menuAttr">Author: </div>
          <input class="menuInput menuItem3" value="${DATA.username}">
        </div>

        <div class="menuLine">
          <div class="menuAttr">License: </div>
          <input class="menuInput menuItem4" value="ISC">
        </div>

        <div class="menuLine">
          <div class="menuAttr">Description: </div>
          <textarea class="menuTextarea menuItem5" value="" style="resize: none"></textarea>
        </div>
    </div>

    <div class="menuBottom center">
      <div class="btn noSelect" onmousedown="EVENT.menuNew.btn.create()">Create</div>
      <div class="btn noSelect" onmousedown="EVENT.menuNew.btn.cancel()">Cancel</div>
    </div>
 
    `
  })
  return template
}


TEMPLATE.menuOpen = () => {
  let template = gg({
    class: "menuOpen border",
    html: `
 
    <select class="select border dark menuOpen-selectTop" onchange="EVENT.menuOpen.selectFolder()">
      <option value="select folder">Select folder</option>      
    </select>
    <select class="select border dark menuOpen-selectBottom" 
      onchange="EVENT.menuOpen.selectProject()">Select project</select>
 
    `
  })
  return template
}


TEMPLATE.panelFiles = {}

TEMPLATE.panelFiles.main = () => {

  var components = TEMPLATE.panelFiles.top() + TEMPLATE.panelFiles.middle() + TEMPLATE.panelFiles.bottom()

  var template = gg({
    class: "panelFiles border",
    html: components
  })

  return template
}


TEMPLATE.panelFiles.top = () => {

  var kanbanBtn = (v) => gg({
    class: "kanbanBtn center over noSelect",
    html: v,
    onclick: `EVENT.box.colBtn${v}()`,  
    style:`
height: 22px;
width: 22px;
cursor: pointer;
background: var(--dark);
margin-left: 0px;
color: white;
font-size: 11px;
`
  })

  var menu = gg({
    html: kanbanBtn(1) + kanbanBtn(2) + kanbanBtn(3) + kanbanBtn(4),
    style:`
display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-template-rows: 1fr;
`

  })


  var rightMT = gg({
    class: "rightMT blockSelectedName",
    html: "",
    style:`
color: var(--white);
font-size: 12px;
padding: 6px;
`
  })

  var box = gg({
    class: "",
    html: rightMT + menu,
    style:`
display: grid;
grid-template-columns: 1fr 94px;
grid-template-rows: 1fr;
`
  })

  return box
}


TEMPLATE.panelFiles.middle = () => {

  var inputs = ELEMENT.input("inputBox1") +
      ELEMENT.input("inputBox2") +
      ELEMENT.input("inputBox3") +
      ELEMENT.input("inputBox4")

  var t = gg({
    class: "rightMM colGrid",
    html: inputs,
    style:`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr;

`
  })

  return t
}


TEMPLATE.panelFiles.bottom = () => {

  var inputs = ELEMENT.box( "box1" ) +
      ELEMENT.box( "box2" ) +
      ELEMENT.box( "box3" ) +
      ELEMENT.box( "box4" )

  var t = gg({
    class: "rightMM colGrid",
    html: inputs,
    style:`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr;
`
  })

  return t
}


TEMPLATE.panelModules = {}

TEMPLATE.panelModules.top = () => {
  let template = `<div class="panelModules-top blue-2">Modules</div>`
  return template
}

TEMPLATE.panelModules.middle = () => {
  let template = `
  <div class="panelModules-middle">
     ${ ELEMENT.input( "inputBox0" ) }
  </div>`
  return template
}

TEMPLATE.panelModules.bottom = () => {
  let template = `
   <div class="leftBottom"> 
    
      <div id="box0" class="dark scrollbar noSelect sortable-box0 ui-sortable" >
    
   
      </div>
    </div>`
  return template
}
//${ Editoi.elements.block () }


TEMPLATE.panelModules.main = () => {
  let template = gg({
    class: "panelModules left border",
    html: `
    ${ TEMPLATE.panelModules.top() }
    ${ TEMPLATE.panelModules.middle() }
    ${ TEMPLATE.panelModules.bottom() } 
    `
  })
  return template
}


TEMPLATE.panelEditor = () => {
  let template = gg({
    class: "panelEditor editor border",
    html: `
    <div id="markdown" class="scrollbar none"></div>
    <textarea id="editor" style="display: none;"></textarea>`
  })
  return template
}


TEMPLATE.panelRight = () => {
  let template = gg({
    class: "panelRight",
    html: TEMPLATE.panelFiles.main() + TEMPLATE.panelEditor()
  })
  return template
}

TEMPLATE.main_bottomLeft = () => {
  let template = gg({
    class: "main_bottomLeft",
    html: TEMPLATE.panelModules.main()
  })
  return template
}

TEMPLATE.main_bottomRight = () => {
  let template = gg({
    class: "main_bottomRight",
    html: TEMPLATE.panelRight()
  })
  return template
}

TEMPLATE.main_bottom = () => {
  let template = gg({
    class: "main_bottom",
    html: TEMPLATE.main_bottomLeft() + TEMPLATE.main_bottomRight()
  })
  return template
}

TEMPLATE.main = () => {
  let template = gg({
    class: "main",
    html: TEMPLATE.menuTop() + TEMPLATE.main_bottom()
  })
  return template
}



/*
$(".menuOpenProject").hide()
$(".menuNewProject").hide()
FN.editor.start()
*/
/*
 Editoi.panels.editor.snippets.load()
  
  $('.CodeMirror').attr("onkeyup", "EVENT.editor.tabSnippets(event)")
 
  Editoi.events.sortable.drag() 

  Editoi.server.project.slotStart()
*/


let start = async() => {

  await SERVER.files.getFolders( DATA.directory )
  
  $("#loader").hide()
  // $("#root").append( TEMPLATE.menuTop() )  
  // $("#root").append( TEMPLATE.menuNew() )
  // $("#root").append( TEMPLATE.menuOpen() )

  get("#root").innerHTML = TEMPLATE.main()
  
  FN.box.sortable.start()
  
  FN.editor.start()

  $(".menuOpen").hide()
  $(".menuNew").hide()
  $(".menuOptions").hide()
  $(".menuAbout").hide()
  
  FN.snippets.load()
  
  FN.project.slotStart() 
  
  FN.menuOptions.start()
}

start()