// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default tseslint.config(
  // ── Ignored paths ────────────────────────────────────────────────────────
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/generated/**',
      'pnpm-lock.yaml',
    ],
  },

  // ── Base JS recommended ───────────────────────────────────────────────────
  js.configs.recommended,

  // ── TypeScript recommended (all TS/TSX files) ────────────────────────────
  ...tseslint.configs.recommended,

  // ── Global rules ─────────────────────────────────────────────────────────
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },

  // ── React rules (web package only) ───────────────────────────────────────
  {
    files: ['apps/web/**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // Spread plugin rules using plain JS (no TypeScript casts — this is a .js file)
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+ JSX transform
      'react/prop-types': 'off', // TypeScript handles prop types
    },
  },

  // ── Prettier (must be last — disables conflicting formatting rules) ───────
  prettierConfig,
);
