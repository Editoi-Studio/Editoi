FN.project.slotStart = () => {

  $(".menuOpenProject").hide()

  if( DATA.slots.slot1.folder ){

    $("#slot1").html( DATA.slots.slot1.folder + "/" + DATA.slots.slot1.project)
  }

  if( DATA.slots.slot2.folder ){

    $("#slot2").html( DATA.slots.slot2.folder + "/" + DATA.slots.slot2.project)
  }

  if( DATA.slots.slot3.folder ){

    $("#slot3").html( DATA.slots.slot3.folder + "/" + DATA.slots.slot3.project)
  }

  if( DATA.slots.slot4.folder ){

    $("#slot4").html( DATA.slots.slot4.folder + "/" + DATA.slots.slot4.project)
  }
}
