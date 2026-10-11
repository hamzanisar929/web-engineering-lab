export default [
  {
    ignores: ["node_modules/**", "evidence/**"],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        document: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      eqeqeq: "error",
    },
  },
];
