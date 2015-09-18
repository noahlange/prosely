// Require dependencies
var ipc = require('ipc');
var fs = require('fs');
var path = require('path');

// Editor defaults
var defaults = {
  prosely: {},
  writeGood: {
    illusion: true,
    so: true,
    thereIs: true,
    passive: true,
    weasel: true,
    adverb: true,
    tooWordy: true,
    cliches: true,
    frankenwords: true,
    fleschKincaid: {
      level: 15
    },
    spelling: true,
    filler: true,
    hedge: true,
    buzzword: true
  }
};

// Load configuration file
var configPath = path.resolve(__dirname, '../prosely.json');
var configFile = fs.readFileSync(configPath).toString() || defaults;
var configOpts = JSON.parse(configFile);

// Initialize editor

var mm = mirrorMark(document.getElementById('editable'), {
  autofocus: true,
  showToolbar: true,
  mode: 'gfm',
  lint: {
    getAnnotations: (text, updateLinting, opts, cm) => {
      var writeGood = require('write-good-as-promised');
      var marked = require('marked');
      marked.setOptions({
        highlight: code => {
          return require('highlight.js').highlightAuto(code).value;
        }
      });
      var html = marked(text);
      var tag = document.querySelectorAll('.preview')[0];
      tag.innerHTML = html;
      writeGood(text, configOpts.writeGood)
        .then(suggestions => {
          var found = suggestions.map(suggestion => {
            var start = cm.posFromIndex(suggestion.index);
            var end = cm.doc.posFromIndex(suggestion.index + suggestion.offset);
            return {
              from: start,
              to: end,
              message: suggestion.reason,
              severity: suggestion.type
            }
          });
          updateLinting(cm, found);
        })
        .catch(err => console.error(err));
    },
    async: true
  }
});

mm.render();

// File loading and saving
ipc.on('open-file', filename => {
  fs.readFile(filename, (err, contents) => {
    if (err) throw err;
    mm.cm.setValue(contents.toString());
  });
});

ipc.on('save-file', filename => {
  fs.writeFile(filename, mm.cm.getValue(), err => {
    if (err) throw err;
  });
});