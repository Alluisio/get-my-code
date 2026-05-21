import expo from "eslint-config-expo";

export default [
  ...expo,
  {
    rules: {
      "no-unused-vars": "error",
    },
  },
];
