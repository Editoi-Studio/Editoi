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
