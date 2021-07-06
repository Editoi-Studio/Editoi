FN.editor = {}

FN.editor.deleteLine = () => {
   var doc = editor.getDoc()
   var cursor = doc.getCursor()
   doc.replaceRange("", { line: cursor.line, ch: 0 }, { line: cursor.line, ch: 1000 })
}

FN.editor.insertLine = ( text ) => {
   var doc = editor.getDoc()
   var cursor = doc.getCursor()
   doc.replaceRange(text, cursor)
}

FN.editor.getLine = () => {
  var doc = editor.getDoc()
  var cursor = doc.getCursor()
  return doc.getLine(cursor.line)
}
