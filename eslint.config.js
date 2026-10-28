import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    rules: {
      // prettier专注于代码的美观度（格式化工具）
      // 前置条件：
      // 1.禁用格式化插件prettier    format on save 关闭
      // 2.安装Eslint插件,并配置保存时自动修复
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true, // 单引号
          semi: false, // 无分号
          printWidth: 80, // 每行宽度至多80字符
          trailingComma: 'none', // 不加对象|数组最后逗号
          endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
        }
      ],

      // ESLint关注于规范
      // vue/multi-word-component-names：这是 Vue ESLint 插件提供的一个规则，要求组件名称必须由多个单词组成（使用 PascalCase 命名法，如 MyComponent），目的是避免与现有的或未来的 HTML 元素冲突。
      // 'warn'：设置规则的严重程度为警告级别。当违反此规则时，ESLint 会显示警告而不是错误。这意味着代码仍可以运行，但会提醒开发者注意这个问题。
      // ignores: ['index']：这是一个例外列表，指定哪些单词名称的组件可以被忽略（不触发警告）。在这里，名为 index 的组件（通常是 index.vue 文件）被允许使用单个单词作为组件名。
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
        }
      ],
      'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验 (props解构丢失响应式，但可以被解决)
      // 💡 添加未定义变量错误提示
      'no-undef': 'error'

    }

    },





  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,


]




