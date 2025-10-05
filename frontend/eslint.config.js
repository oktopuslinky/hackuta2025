import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react'; // Import the react plugin
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended, // Add the recommended react config
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // It's also a good practice to explicitly define the plugin
    plugins: {
      react,
    },
    // And to specify react version in settings for optimal rules application
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);