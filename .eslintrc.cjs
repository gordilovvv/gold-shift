/* eslint-env node */
module.exports = {
  'root': true,
  'extends': [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      '@vue/eslint-config-typescript/recommended'
  ],
  'env': {
      'vue/setup-compiler-macros': true
  },
  'globals': {
      'defineProps': 'readonly',
      'defineEmits': 'readonly',
      'defineExpose': 'readonly',
      'withDefaults': 'readonly',
  },
  'parserOptions': {
      'parser': '@typescript-eslint/parser',
      'ecmaVersion': 2022,
      'sourceType': 'module',
      'ecmaFeatures': {
          'jsx': true
      }
  },
  'rules': {
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'prettier/prettier': 'off',
      'no-console': ['warn', { 'allow': ['info', 'warn', 'error', 'debug'] }],
      'no-debugger': 'error',
      indent: ['error', 4],
      'no-unused-vars': 'off',
      'vue/html-indent': ['error', 4],
      'vue/html-self-closing': ['error', {
          'html': {
              'void': 'any',
              'normal': 'any',
              'component': 'always'
          }
      }],
      'vue/script-indent': ['error', 4],
      'vue/order-in-components': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
  }
};