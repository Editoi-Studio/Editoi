FN.editor.start = () => {

  editor = CodeMirror.fromTextArea( document.getElementById("editor"), {
    lineNumbers: true,
    mode: "javascript", //htmlmixed
    theme: "guri",
    lineWrapping: true,
    styleActiveLine: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    matchBrackets: true,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    onLoad: FN.editor.loaded(),
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  })

  editor.foldCode(CodeMirror.Pos(0, 0))

  $('.CodeMirror').attr("onkeyup", "EVENT.editor.tabSnippets(event)")
}