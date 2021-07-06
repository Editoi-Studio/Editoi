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
