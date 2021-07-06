FN.project.templateJson = ( name, version, author, license, description ) => {

  var template = {}

  template.name = name
  template.version = version
  template.description = description
  template.main = "app.js"
  template.scripts = {}
  template.author = author
  template.license = license
  template.dependencies = {}

  Plurality = {}
  Plurality.files = []
  Plurality.modules = []
  Plurality.p0 = {}
  Plurality.p1 = {}
  Plurality.p2 = {}
  Plurality.p3 = {}

  template.plurality = Plurality

  var data = JSON.stringify( template, null, 4 )

  return data
}