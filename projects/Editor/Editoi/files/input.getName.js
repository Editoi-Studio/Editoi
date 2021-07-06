
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