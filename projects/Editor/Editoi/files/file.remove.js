FN.file.remove = ( array, item ) => {
  var index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
}