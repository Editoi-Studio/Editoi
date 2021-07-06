FN.project.openWindow = () => {

  var dir = `${ DATA.root }${ DATA.directory }/${ DATA.folderSelected }/${ DATA.project.name }/www/index.html`

  window.open( dir, DATA.project.name );
}