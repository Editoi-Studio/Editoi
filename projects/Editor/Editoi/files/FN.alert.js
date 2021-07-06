FN.alert = {}

FN.alert.show = ( value ) => {

  $(".alert").html( value )

  $(".alert").animate({
    height: '36px',
    opacity: 1
  });
}

FN.alert.hide = () => {

  $(".alert").animate({
    height: '2px',
    opacity: 0
  });
}
