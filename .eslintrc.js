const DISABLED = 0
const WARNING = 1
const CI_ERROR = process.env.CI ? 2 : 1
const ERROR = 2

module.exports = {
  "parser": "babel-eslint",
  "extends": ["react-app"],
  "env": {
    "browser" : true
  },
  "rules": {
    "comma-dangle"                      : [CI_ERROR, "never"],
    "semi"                              : [CI_ERROR, "never"],
    "key-spacing"                       : DISABLED,
    "jsx-quotes"                        : [CI_ERROR, "prefer-double"],
    "max-len"                           : [CI_ERROR, 120, 2],
    "object-curly-spacing"              : [CI_ERROR, "always"],
    "no-tabs"                           : CI_ERROR,
    "no-trailing-spaces"                : CI_ERROR,
    "no-unused-vars"                    : [CI_ERROR, { "args": "after-used", "ignoreRestSiblings": true }],
    "prefer-promise-reject-errors"      : DISABLED,
    "quotes"                            : [CI_ERROR, "double"],
    "react/prop-types"                  : CI_ERROR,
    "react/display-name"                : CI_ERROR,
    "react/prefer-stateless-function"   : [CI_ERROR, { "ignorePureComponents": true }],
    "react/self-closing-comp"           : CI_ERROR,
    "react/sort-comp"                   : CI_ERROR,
    "react/jsx-no-bind"                 : [CI_ERROR, { "allowArrowFunctions": true }],
    "react/jsx-pascal-case"             : CI_ERROR,
    "react/jsx-closing-bracket-location": CI_ERROR,
    "react/no-unused-prop-types"        : CI_ERROR
  }
}
