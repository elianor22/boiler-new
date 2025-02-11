import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules } from '@eslint/compat';

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  ...fixupConfigRules(
    compat.extends(
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'prettier',
    ),
  ),
  {
    settings: {
      react: {
        version: 'detect',
      },

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        node: {},

        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      'jsx-a11y/alt-text': 'off',
      'react/display-name': 'off',
      'react/no-children-prop': 'off',
      '@next/next/no-img-element': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'import/no-named-as-default': 'off',

      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true,
          beforeLineComment: true,
          allowBlockStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'any',
          prev: 'export',
          next: 'export',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['function', 'multiline-const', 'multiline-block-like'],
        },
        {
          blankLine: 'always',
          prev: ['function', 'multiline-const', 'multiline-block-like'],
          next: '*',
        },
      ],

      'newline-before-return': 'error',

      'import/newline-after-import': [
        'error',
        {
          count: 1,
        },
      ],

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            ['internal', 'parent', 'sibling', 'index'],
            ['object', 'unknown'],
          ],

          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '~/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],

          pathGroupsExcludedImportTypes: ['react', 'type'],
          'newlines-between': 'always-and-inside-groups',
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', 'src/iconify-bundle/*'],

    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
];
