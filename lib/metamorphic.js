var _ = require("underscore")

_.extend(
  exports,
  require("./metamorphic/tree_node"),
  {
    Languages: {},
    get_language: function (name) {
      name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      if (name in exports.Languages) {
        return exports.Languages[name]
      }
      return false
    },
    language_names: function (separator) {
      var language_names = []
      _.each(exports.Languages, function (language, language_name) {
        if (language_name != "Html") {
          language_names.push(language_name)
        }
      })
      if (!_.isUndefined(separator)) {
        language_names = language_names.join(separator)
      }
      return language_names
    }
  }
)

_.extend(
  exports.Languages,
  require("./metamorphic/languages/html"),
  require("./metamorphic/languages/jade"),
  require("./metamorphic/languages/slim"),
  require("./metamorphic/languages/haml")
)
