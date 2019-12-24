module.exports = {

  parserOptions: {
    ecmaVersion: 6,
    parser: "babel-eslint"
  },
  extends: [
    "plugin:vue/recommended",
    "airbnb/base"
  ],
  plugins: [
    'eslint-plugin'
  ],
  rules: {
    "no-extra-semi": "off",
    "vue/require-default-prop":"off",
    "no-mixed-spaces-and-tabs": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
  },
  env : {
    "browser": true
  },
}
