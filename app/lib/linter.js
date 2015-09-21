var writeGood = require('write-good-as-promised');
var preview = require('./preview');

module.exports = config => {
  
  // Function signature for CodeMirror linter
  return (text, updateLinting, opts, cm) => {
    
    // Generate html preview
    var html = preview.generateHTML(text);
    var tag = document.querySelectorAll('.preview')[0];
        tag.innerHTML = html;
    
    // Lint document
    writeGood(text, config.writeGood)
      .then(suggestions => {
        
        // Map each suggestion onto an annotation.
        var found = suggestions.map(suggestion => {
          return {
            from: cm.posFromIndex(suggestion.index),
            to: cm.doc.posFromIndex(suggestion.index + suggestion.offset),
            message: suggestion.reason,
            severity: suggestion.type
          }
        }).sort((a, b) => {
          // Put Flesch-Kincaid at the beginning of the array so tooltips
          // for other warnings are prioritized.            
          var aIsFK = (a.severity === 'readability');
          var bIsFK = (b.severity === 'readability');
          return !aIsFK && bIsFK ? -1 : (aIsFK && !bIsFK) ? 1 : 0;      
        })
        
        // Update linting (since this is async)
        updateLinting(cm, found);
      })
      .catch(err => console.error(err));
    }
}