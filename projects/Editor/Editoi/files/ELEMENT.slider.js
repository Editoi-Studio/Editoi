ELEMENT.slider = (ev) => {
  let template = `   
  <label id="promo" name="promo" for="view" class="switch center round" onmouseup="${ev}">     
     <input id="view" aria-labelledby="promo" type="checkbox"> 
     <span class="slider round"></span>  
    
  </label>    
  `
 
  return template
}
