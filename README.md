## React-ui-library

##### 用于创建自己的 React UI 库的模板

- **:sparkles:** 让模块更加的规范, 更容易维护;
- **:label:** 使用 TypeScript 编写;
- **:package:** 使用 Rollup 打包, 输出 cjs, esm, umd 模块;
- **:rocket:** 规范代码: eslint + stylelint + lint-staged + prettier;
- **:rocket:** 控制提交信息: husky + commitizen + commitlint;
- **:loud_sound:** 根据规范自动生成 changelog;
- **:chart_with_upwards_trend:** 代码分析: analyzer

##### 如何使用该模板

```javascript
$ npx degit https://github.com/JaremyCheng/react-ui-library.git dirName
```

##### 如何进行本地测试

```javascript
// npm link方式
// 在当前npm模块项目下
npm link
// or
sudo npm link

// 在引入该模块的项目下
npm link moduleName // 模块名称

// 软连接方式
ln -s  /path/to/module ./node_modules/moduleName // 模块名称

```
