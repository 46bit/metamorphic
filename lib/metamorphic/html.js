var _ = require("underscore"),
    jsdom = require("jsdom"),
    metamorphic = require("./tree_node")

exports.HTML = function () {}

_.extend(exports.HTML.prototype, {
  read: function (node, parent_tree_node) {
    if (_.isUndefined(parent_tree_node)) {
      var tree_node = new metamorphic.TreeNode()
    } else {
      var tree_node = parent_tree_node.add_child()
    }

    tree_node.options.name = node.nodeName.toLowerCase()
    tree_node.options.tagged = node.nodeName[0] != "#"
    tree_node.options.value = node.nodeValue

    if (node.attributes) {
      _.map(node.attributes, function (attribute) {
        tree_node.attributes[attribute.nodeName] = attribute.nodeValue
      })
    }

    if (node.childNodes) {
      _.map(node.childNodes, function (child_node) {
        this.read(child_node, tree_node)
      }, this)
    }

    return tree_node
  },

  write: function (tree_node) {
    if (_.isUndefined(tree_node)) {
      return
    }

    var line = Array(tree_node.depth()).join("  ")

    if (tree_node.options.value) {
      line += tree_node.options.value
    } else {
      if (tree_node.options.tagged) {
        line += "<" + tree_node.options.name
        _.map(tree_node.attributes, function (value, key) {
          line += " " + key + "=\"" + value + "\""
        })
        line += ">"
      }
      for (var j = 0; j < tree_node.children.length; j++) {
        line += this.write(tree_node.children[j])
      }
      if (tree_node.tagged) line += "</" + tree_node.options.name + ">"
    }

    return line
  }
})
