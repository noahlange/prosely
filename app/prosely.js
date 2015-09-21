// Modules
var config  = require('./lib/config');
var preview = require('./lib/preview');
var editor  = require('./lib/editor');
var linter  = require('./lib/linter');

// Initialize the editor, returning the CodeMirror instance.
var cm      = editor.init(linter(config));
var files   = require('./lib/files')(cm);

editor.modes(config.prosely.modes);