CodeMirror.modeURL = 'bower/codemirror/mode/%N/%N.js';
var mm;

// Initialize editor
module.exports.init = linter => {
  
  mm = window.mirrorMark(document.getElementById('editable'), {
    autofocus: true,
    showToolbar: true,
    mode: 'gfm',
    lint: { getAnnotations: linter, async: true }
  });
  
  mm.render();
  return mm.cm;
};

// Load highlighting modes.
module.exports.modes = modes => {
  modes.forEach(mode => {
    CodeMirror.autoLoadMode(mm.cm, mode);
  });
};