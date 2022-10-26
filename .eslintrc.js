module.exports = {
  extends: ["next/core-web-vitals", "next", "prettier"],
  plugins: ["react", "simple-import-sort", "unused-imports"],
  rules: {
    // increase the severity of rules so they are auto-fixable
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
  },
};
