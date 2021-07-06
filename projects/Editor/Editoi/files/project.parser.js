FN.project.parser = (data, projectName) => {
  DATA.project = JSON.parse( data )
  DATA.fileDisabled = DATA.project.plurality.fileDisabled
  FN.project.open()
  DATA.projectSelected = projectName || $(".menuOpen-selectBottom").val()
}