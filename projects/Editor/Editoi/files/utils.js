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