module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-restricted-syntax': 1,
    'no-await-in-loop': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'error',
    'lines-between-class-members': 1,
    'import/prefer-default-export': 1,
    'class-methods-use-this': 1,
    'import/no-cycle': 1,
    camelcase: 'off',
    'no-useless-constructor': 0,
    '@typescript-eslint/no-inferrable-types': 'off',
    'max-len': [
      2,
      {
        code: 300,
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-shadow': 'off',
    'no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        object: false,
        array: false,
      },
    ],
    'no-undefined': 0,
    'no-unused-vars': 1,
    'no-plusplus': 'off',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3,
      },
    ],
    'linebreak-style': ['off'],
    'arrow-parens': 'off',
    'func-names': ['off'],
    'no-param-reassign': ['off'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'prefer-arrow-callback': ['off'],
    'dot-notation': [
      'error',
      {
        allowPattern: '[a-zA-Z]',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['___initialData___', '_request', '_method', '_baseSelector', '_bodenPoint', '_baseSelectorCity'],
      },
    ],
  },
};
