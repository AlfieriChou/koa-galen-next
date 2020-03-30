module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ["airbnb-typescript/base"],
  env: {
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}