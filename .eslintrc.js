module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // enable additional rules
    "indent": ["error", 4],
    // "linebreak-style": ["error", "unix"],
    "linebreak-style": 0,
    "global-require": 0,
    "quotes": ["error", "single"],
    "semi": ["error", "never"],

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
     "for-direction": "off",
  },
};
