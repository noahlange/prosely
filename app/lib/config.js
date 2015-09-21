// Imports
var fs = require('fs');
var path = require('path');

// Editor defaults
var defaults = {
  prosely: {
    metadata: true,
    modes: ['javascript']
  },
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
    readability: { level: 15 },
    spelling: true,
    filler: true,
    hedge: true,
    buzzword: true
  }
};

// Load the configuration file. Might as well do it sync because we're not
// really going anywhere without some configuration.
var path = path.resolve(__dirname, '../../prosely.json');
var file = fs.readFileSync(path);
var opts = file ? JSON.parse(file.toString()) : defaults;

// Export our options merged onto the defaults.
module.exports = Object.assign(opts, defaults);