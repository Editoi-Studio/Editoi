SERVER.close = () => {
    
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:9001/exit', true)

  request.onload = function (data) {
    log(data)
  }
  request.send()
  log("Stop server -> localhost:9001")
}
