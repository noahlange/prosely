module.exports = {"1":function(container,depth0,helpers,partials,data) {
    return "  "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.data : depth0), depth0))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "    <td>"
    + container.escapeExpression((helpers.metadata || (depth0 && depth0.metadata) || helpers.helperMissing).call(depth0,depth0,{"name":"metadata","hash":{},"data":data}))
    + "</td>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <table>\n    <thead>\n      <tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tr>\n    </thead>\n    <tbody>\n      <tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tr>\n    </tbody>\n  </table>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isArray : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "          <th colspan=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.value : depth0)) != null ? stack1.length : stack1), depth0))
    + "\">"
    + alias1(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <th>"
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isArray : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "          "
    + container.escapeExpression((helpers.metadata || (depth0 && depth0.metadata) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.value : depth0),{"name":"metadata","hash":{},"data":data}))
    + "\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "          <td>"
    + container.escapeExpression((helpers.metadata || (depth0 && depth0.metadata) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.value : depth0),{"name":"metadata","hash":{},"data":data}))
    + "</td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isPrimitive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isArray : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isObject : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}
