module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    expect: true,
  },
  extends: ['plugin:vue/recommended', 'standard'],
  plugins: ['vue'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 0,
    quotes: [0, 'double'],
    'comma-dangle': 0,
    'space-before-function-paren': 0,
  },
};
