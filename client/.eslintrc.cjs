module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:css/standard"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'simple-import-sort', 'css'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-first-prop-new-line': [2,'multiline-multiprop'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-tag-spacing': [1, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'allow'
    }],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2, {'SwitchCase': 1}],
    'no-multi-spaces': [
      'warn',
      {
        'ignoreEOLComments': false
      }
    ],
    'no-trailing-spaces': 'warn',
    'semi': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'object-curly-newline': ['error', { 'multiline': true }],
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    'no-multiple-empty-lines': ["warn", { "max": 1, "maxEOF": 0 }],
    'prefer-const': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
  },
  'overrides': [
    {
      'files': ['*.js', '*.jsx', '*.ts', '*.tsx'],
      'rules': {
        'simple-import-sort/imports': [
          'warn',
          {
            'groups': [
              [
                '^react',
                '^@?\\w',
                '^(@|components)(/.*|$)',
                '^\\u0000',
                '^\\.\\.(?!/?$)', '^\\.\\./?$',
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)', '^\\./?$',
                '^.+\\.?(json)$',
                '^.+context[.js]?$',
                '^.+const[.jsx]?$',
                '^.+const[.js]?$',
                '^.+\\.?(css)$'
              ]
            ]
          }
        ]
      }
    }
  ]
}
