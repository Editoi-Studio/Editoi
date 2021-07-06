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
