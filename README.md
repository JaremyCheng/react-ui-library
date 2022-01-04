## module-template

##### 用于给基础模块建设使用的模板

- **:sparkles:** 让模块更加的规范, 更容易维护;
- **:label:** 使用TypeScript编写;
- **:package:** 使用Rollup打包, 输出cjs, esm, umd模块;
- **:rocket:** 规范代码及自动修改: eslint + lint-staged + prettier;
- **:rocket:** 控制提交信息: husky + commitizen + commitlint;
- **:loud_sound:** 根据规范自动生成changelog;
- **:chart_with_upwards_trend:** 代码分析: analyzer

##### 如何使用该模板

```javascript
$ npx degit https://github.com/JaremyCheng/module-template.git dirName
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

##### Future

- **:construction_worker:** 脚手架
- **:wrench:** eslint的规范注入



> 以下为模板格式, 发布前需自行替换内容

## Installation

```shell
$ npm i module-name
```

## Quick Start

```javascript
import xxx from 'module-name';
import { xxx } from 'module-name';
```

## Documentation

Some Description...
[Some Link](https://blabla-example-name.com)
