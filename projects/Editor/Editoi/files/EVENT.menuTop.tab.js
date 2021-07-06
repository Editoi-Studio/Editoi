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
