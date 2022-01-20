module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  settings: {
    react: {
      // 自动检测react版本
      version: 'detect',
    },
  },
};

// module.exports = {
//   parser: '@typescript-eslint/parser',
//   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
//   plugins: ['react', 'prettier', '@typescript-eslint'],
//   overrides: [
//     {
//       files: '*.ts',
//       parserOptions: {
//         project: ['./tsconfig.json']
//       }
//     }
//   ],
//   env: {
//     // 你的环境变量（包含多个预定义的全局变量）
//     //
//     browser: true,
//     node: true,
//     es2020: true
//     // mocha: true,
//     // jest: true,
//     // jquery: true
//   },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true
//     },
//     ecmaVersion: 11,
//     sourceType: 'module'
//   },
//   globals: {
//     // 你的全局变量（设置为 false 表示它不允许被重新赋值）
//     //
//     // myGlobal: false
//   },
//   rules: {
//     // 自定义你的规则
//     '@typescript-eslint/no-explicit-any': 'error'
//   }
// };
