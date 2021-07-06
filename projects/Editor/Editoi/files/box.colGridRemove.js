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
