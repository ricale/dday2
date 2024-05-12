module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['eslint-plugin-import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['./src', './__tests__'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
