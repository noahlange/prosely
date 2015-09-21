// Require dependencies
var ipc = require('ipc');
var fs = require('fs')

module.exports = editor => {
  
  // Load a file.
  ipc.on('open-file', filename => {
    fs.readFile(filename, (err, contents) => {
      if (err) throw err;
      editor.setValue(contents.toString());
    });
  });
  
  // Save a file. 
  ipc.on('save-file', filename => {
    fs.writeFile(filename, editor.getValue(), err => {
      if (err) throw err;
    });
  });
}