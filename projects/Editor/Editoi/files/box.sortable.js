FN.box.sortable.start = () => {

  FN.box.sortable.box0()
  FN.box.sortable.box1()
  FN.box.sortable.box2()
  FN.box.sortable.box3()
  FN.box.sortable.box4()
}

FN.box.sortable.box0 = () => {

  $(".sortable-box0").sortable({
    connectWith: ".sortable-box0",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      var name = ui.item.html()
      var group = ui.item.attr('group')

      DATA.project.plurality.files = []

      $('#box0 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.files.push( fname )
      })
    }
  }).disableSelection()
}

FN.box.sortable.box1 = () => {

  $( ".sortable-box1" ).sortable({
    connectWith: ".sortable-box1",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      DATA.project.plurality.p0[ DATA.box0Selected ] = []

      $('#box1 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.p0[ DATA.box0Selected ].push( fname )
      })
    }
  }).disableSelection()
}

FN.box.sortable.box2 = () => {

  $( ".sortable-box2" ).sortable({
    connectWith: ".sortable-box2",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      DATA.project.plurality.p1[ DATA.box1Selected ] = []

      $('#box2 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.p1[ DATA.box1Selected ].push( fname )
      })
    }
  }).disableSelection()
}

FN.box.sortable.box3 = () => {

  $( ".sortable-box3" ).sortable({
    connectWith: ".sortable-box3",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      DATA.project.plurality.p2[ DATA.box2Selected ] = []

      $('#box3 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.p2[ DATA.box2Selected ].push( fname )
      })
    }
  }).disableSelection()
}

FN.box.sortable.box4 = () => {

  $( ".sortable-box4" ).sortable({
    connectWith: ".sortable-box4",
    placeholder: "block-placeholder",
    update: function (event, ui) {

      DATA.project.plurality.p3[ DATA.box3Selected ] = []

      $('#box4 > div').each(function () {
        var fname = $(this).html()
        DATA.project.plurality.p3[ DATA.box3Selected ].push( fname )
      })
    }
  }).disableSelection()
}