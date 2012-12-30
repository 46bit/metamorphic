var _ = require("underscore")

exports.TreeNode = function (parent) {
  this.parent = parent
  this.children = []
  this.options = {}
  this.attributes = {}
}

_.extend(exports.TreeNode.prototype, {
  add_child: function () {
    var child_tree_node = new exports.TreeNode(this)
    this.children.push(child_tree_node)
    return child_tree_node
  },

  depth: function () {
    return _.isUndefined(this.parent) ? 0 : this.parent.depth() + 1
  }
})
