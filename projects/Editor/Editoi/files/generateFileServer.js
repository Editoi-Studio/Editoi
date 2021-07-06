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
