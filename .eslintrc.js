module.exports = {
  parser: "babel-eslint",
  root: true,
  plugins: ["react-hooks", "jest"],
  extends: [
    "plugin:react/recommended",
    "plugin:testing-library/recommended", // follow best practices and anticipate common mistakes when writing tests with Testing Library
    "plugin:jest-dom/recommended", // follow best practices in jest tests
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",

    // react hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "no-console": "warn",
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
