module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',  // Basic ESLint rules
    'plugin:react/recommended',  // React recommended rules
    'plugin:react/jsx-runtime',  // Support for React's JSX transform
    'plugin:react-hooks/recommended'  // React hooks specific linting rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],  // Ignore the build folder
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },  // Automatically detect the installed React version
  plugins: ['react-refresh'],  // Plugin for React Fast Refresh
  rules: {
    'react/jsx-no-target-blank': 'off',  // Disable no target blank rule
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
};
