// eslint-disable-next-line no-undef
module.exports = {
  plugins: ["stylelint-order", "stylelint-prettier"],
  extends: ["stylelint-config-recommended", "stylelint-config-prettier"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends", "tailwind"],
      },
    ],
    "block-no-empty": null,
    "prettier/prettier": true,
    "order/properties-alphabetical-order": true,
    indentation: 2,
  },
  ignoreFiles: ["**/node_modules/**"],
};
