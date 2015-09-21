var Handlebars = require('handlebars');
var marked = require('meta-marked');
var metadata = require('../templates/compiled/metadata.js');
var hljs = require('highlight.js');

// Set our marked options.
marked.setOptions({
  highlight: code => {
    return hljs.highlightAuto(code).value;
  },
  gfm: true,
  tables: true,
  smartLists: true,
  smartypants: true
});

var templates = {
  metadata: Handlebars.template(metadata)
};

// Maps an object's keys into an array of key value pairs, along with
// whether or not the resulting value is an array. This is important
// for templating purposes.
var objectMap = ctx => {
  return key => {
    return {
      key: key,
      value: ctx[key],
      isArray: Array.isArray(ctx[key])
    };
  }
}

// Generate html from some text, with a convoluted try-catch block because when
// you're parsing YAML there's no limit to ways it can be botched.
var generateHTML = text => {
  var out = '';
  if (!text) { return out; }
  else {
    try {
      var rendered = marked(text);
      var meta = rendered.meta;
      var html = rendered.html;
      out = templates.metadata({
        isObject: true,
        data: meta ? Object.keys(meta).map(objectMap(meta)) : meta
      }) + html;
    } catch(e) {
      out = marked.noMeta(text);
    } finally {
      return out;
    }
  }
}

Handlebars.registerHelper('metadata', ctx => {
  
  // Gather information about our data so we can format it properly.
  var isArray = Array.isArray(ctx);
  var isDate = ctx instanceof Date;
  var isObject = !isDate && !isArray && typeof ctx === 'object';
  var isPrimitive = isDate || (!isArray && !isObject);

  // Dates were previously counting as object, here we just want a string.
  if (isDate) { ctx = ctx.toLocaleDateString(); }
  
  // Return the new context object.
  var out = {
    isArray: isArray,
    isObject: isObject,
    isPrimitive: isPrimitive,
    data: isObject ? Object.keys(ctx).map(objectMap(ctx)) : ctx
  };
  
  // Return a safe string of the rendered template of this ctx.
  return new Handlebars.SafeString(templates.metadata(out));
});

// Export the generate HTML function, the rest of this is internal.
module.exports.generateHTML = generateHTML;