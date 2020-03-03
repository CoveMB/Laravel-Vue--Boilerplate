module.exports = {

  parserOptions: {
    ecmaVersion: 10,
    parser: "babel-eslint"
  },
  extends: [
    // "plugin:vue/recommended",
    'plugin:vue/recommended',
    "airbnb/base"
  ],
  plugins: [
    'eslint-plugin',
    'vue'
  ],
  rules: {
    "max-len": [
      "warn", 
      { 
        "code": 100,
        "ignoreStrings": true, 
        "ignoreUrls": true, 
        "ignoreComments": true, 
        "ignoreTemplateLiterals": true 
      }],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "comma-dangle": "off",
    "padded-blocks": "warn",
    "padding-line-between-statements": [
      "warn",
      { 
        blankLine: "always", 
        prev: "*", 
        next: "return" 
      },
      { 
        blankLine: "always", 
        prev: ["const", "let", "var", "import"], 
        next: "*"
      },
       { 
         blankLine: "any", 
         prev: ["const", "let", "var", "import"], 
         next: ["const", "let", "var", "import"]
        }
    ],
    "quotes": [
      "warn",
      "single"
    ],
    // Semi and coma rules
    "no-extra-semi": "warn",
    "semi-style": ["error", "last"],
    "semi": ['warn','always', {"omitLastInOneLineBlock": false} ],
    "indent": [
      "warn",
      2
    ],
    "comma-spacing": ["warn", { "before": false, "after": true }],
    // Object rules
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-curly-newline": [
      "warn",
      {
        "ObjectPattern": { 
        "multiline": true,
        "minProperties": 2,
      },
      "ImportDeclaration": "never"
    }
    ],
    // Array rules
    "array-bracket-spacing": [
      "warn",
      "always"
    ],
    "array-bracket-newline": [
      "warn",
      {
        "multiline": true,
        "minItems": 3
      }
    ],
    "array-element-newline": [
      "warn",
      {
        "multiline": true,
        "minItems": 3
      }
    ],
  },
  env: {
    browser: true,
  },
}
