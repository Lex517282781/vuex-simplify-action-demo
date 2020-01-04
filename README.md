# vuex-simplify-action-demo

## 项目初始化

```
npm install
```

### 项目启动

```
npm start
```

### decorators 支持配置

1. 安装 @babel/plugin-proposal-decorators

```
npm i @babel/plugin-proposal-decorators -D
```

2. babel.config.js 配置 plugins

```
plugins: [
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ]
]
```

3. .eslintrc.js 配置 parserOptions

```
parserOptions: {
  parser: 'babel-eslint',
  ecmaFeatures: {
    legacyDecorators: true
  }
}
```
