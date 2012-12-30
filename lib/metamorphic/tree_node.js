var _ = require("underscore")

exports.TreeNode = function (depth) {
  this.depth = depth || 0
  this.children = []
  this.options = {}
  this.attributes = {}
}

_.extend(exports.TreeNode.prototype, {
  add_child: function () {
    var child_tree_node = new exports.TreeNode(this.depth + 1)
    this.children.push(child_tree_node)
    return child_tree_node
  }
})
