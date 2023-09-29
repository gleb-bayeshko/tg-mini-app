module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-first-prop-new-line': [1,'multiline'],
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
    'indent': ['warn', 2],
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
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }]
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
                '^.+\\.?(css)$'
              ]
            ]
          }
        ]
      }
    }
  ]
}
