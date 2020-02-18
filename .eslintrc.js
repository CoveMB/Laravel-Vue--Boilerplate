module.exports = {

  parserOptions: {
    ecmaVersion: 6,
    parser: "babel-eslint"
  },
  extends: [
    // "plugin:vue/recommended",
    "@nuxtjs",
    "airbnb/base"
  ],
  plugins: [
    'eslint-plugin'
  ],
  rules: {
    "padded-blocks": "error",
    "no-console": "off",
    "comma-dangle": "off",
    "newline-before-return": "error",
    "no-extra-semi": "error",
    "quotes": [
      "error",
      "single"
    ],
    "semi": "error",
    "indent": [
      "error",
      2
    ],
    // Object rules
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-curly-newline": [
      "error",
      {
        "multiline": true,
        "minProperties": 3
      }
    ],
    "object-property-newline": "error",
    "import/prefer-default-export": "off",
    // Array rules
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "array-bracket-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 5
      }
    ],
    "array-element-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 5
      }
    ]
  },
  env : {
    "browser": true
  },
}
