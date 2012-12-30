var _ = require("underscore")

exports.Jade = function () {}

_.extend(exports.Jade.prototype, {
  write: function (tree_node) {
    if (_.isUndefined(tree_node)) return ""

    var line = (tree_node.depth() > 0 ? "\n" : "") + Array(tree_node.depth()).join("  ")

    if (tree_node.options.value) {
      if (tree_node.options.value.match(/^\s+$/)) return ""

      var trimmed_value = tree_node.options.value.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
      var value_lines = trimmed_value.split("\n")
      var start_line = line
      line = ""
      _.map(value_lines, function (value_line) {
        line += start_line + "| " + value_line.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
      })
    } else {
      if (tree_node.options.tagged) {
        line += tree_node.options.name
        if (!_.isEmpty(tree_node.attributes)) {
          line += "("
          var line_attributes = []
          _.map(tree_node.attributes, function (value, key) {
            line_attributes.push(key + "=\"" + value + "\"")
          })
          line += line_attributes.join(", ") + ")"
        }
      } else {
        line += "!!!"
      }

      _.map(tree_node.children, function (child_tree_node) {
        line += this.write(child_tree_node)
      }, this)
    }

    return line
  }
})
