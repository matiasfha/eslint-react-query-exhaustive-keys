module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    "@typescript-eslint","import"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": 0
  }
}
