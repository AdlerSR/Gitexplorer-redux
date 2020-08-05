module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
      'import/prefer-default-export': 'off',
      'react/button-has-type': 0,
      'react/prop-types': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/no-static-element-interactions': 0
    },
  };