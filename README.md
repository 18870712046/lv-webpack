# lv-webpack

#### 介绍
本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包工具。当 webpack 处理应用程序时，它会在内部构建一个 依赖图(dependency graph)，此依赖图会映射项目所需的每个模块，并生成一个或多个 bundle。


#### 概念

1. 入口
2. 输出
3. loader
4. 插件
5. 模式

#### 配置文件

项目根目录下创建 ```webpack.config.js```

#### 运行启动

1. ./node_modules/.bin/webpack
2. npx webpack
3. 配置 npm 脚本

#### 1. CopyWebpackPlugin (插件)

CopyWebpackPlugin 能够实现将某些文件或文件夹进行拷贝。

1. 安装

```
npm install --save-dev copy-webpack-plugin
```

2. webpack.config.js

```
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin([
      { from: 'source', to: 'dest' },
    ]),
  ],
};
```

#### 2. HtmlWebpackPlugin (插件)

HtmlWebpackPlugin 简化了html的创建，以便为你的webpack包提供服务。

1. 安装

```
npm install --save-dev html-webpack-plugin
```

2. webpack.config.js

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin()
  ],
};
```

#### 3. CleanWebpackPlugin (插件)

CleanWebpackPlugin 能帮忙每次打包之前先删除dist文件夹。

1. 安装

```
npm install --save-dev clean-webpack-plugin
```

2. webpack.config.js

```
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}
```

#### 4. ProgressPlugin (插件)

ProgressPlugin 提供了一种自定义编译期间如何报告进度的方法。

1. webpack.config.js

```
const { ProgressPlugin } = require('webpack');

module.exports = {
  plugins: [
    new ProgressPlugin()
  ]
}
```

#### 5. DefinePlugin (插件)

DefinePlugin 能创建环境变量

1. webpack.config.js

```
const { DefinePlugin } = require('webpack');

module.exports = {
  plugins: [
    new DefinePlugin()
  ]
}
```

#### 6. 开发与生产时的不同配置

1. cli 时使用 --config 选项设置不同的配置文件

```
// 开发
npx webpack --config webpack.config.js

// 生产
npx webpack --config webpack.config.prod.js
```

2. npm script 时

```
"scripts": {
  "dev": "webpack --config webpack.config.js",
  "build": "webpack --config webpac.config.prod.js"
},
```

#### 7. webpack-dev-server

webpack-dev-server 能够为我们提供一个简单的 web server, 并且具有live reloading(实时重新加载) 功能。

1. 安装

```
npm install --save-dev webpack-dev-server
```

2. 使用

开发时，将 ```webpack``` 命令修改为  ```webpack-dev-server``` 命令。

#### 8. webpack-merge 模块

通过 webpack-merge 可以抽取出 开发与生产环境的相同的webapck配置。

1. 安装

```
npm install --save-dev webpack-merge
```

2. 写一个 webpack.config.base.js 。并在这个文件中写入基本的webpack配置

3. 在 webpack.config.dev.js 与 webpack.config.prod.js 中引入 webpack.config.base.js 然后使用 webpack-merge 进行重写或合并的操作。

#### 9. 别名的配置

1. 疼点：

- src 下面目录结构庞大且复杂的时候，可能引入模块会出现 ../../../../../../ 这种形式
- 那一天对文件路径调整了一下。import 的路径也得跟着修改一下。

2. 定义别名规则

```js
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
```

#### 10. vue的版本问题
