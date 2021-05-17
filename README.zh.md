# Markdown 翻译器

Other Language: [English](./README.md)

> 使用 Azure 文本翻译 API 直接翻译 Markdown 文件

## 先决条件

从[Azure 服务](https://docs.microsoft.com/zh-cn/azure/cognitive-services/translator/translator-text-how-to-signup)获取文本翻译 API 密钥

## 快速入门

### 以命令行的方式使用

```bash
# install cli
npm install markdown-translator -g

# set key from Azure Text Translate API
md-translator set --key <your key>
md-translator set --region <your region>

# do translate
md-translator translate --src README.md --dest README.zh.md --to zh

# get more information
md-translator --help
```

### 以二进制文件的方式使用

> 在没有 Nodejs 环境的情况下运行 Markdown 翻译器

- 更新 config.json 中的 azure 文本翻译 api key。
- 运行`npm run dist:mac`（mac 平台）或者`npm run dist:win`（windows 平台）。
- 像使用命令行工具一样使用二进制文件, 例如：`./markdown-translator translate --src README.md --dest README.zh.md --to zh`

> 根据您的平台修改 dist 脚本。更多信息请点击[这里](https://github.com/zeit/pkg)

### 以模块的方式使用

```bash
# install module
npm install markdown-translator
```

```javascript
const markdownTranslate = require('markdown-translator')
markdownTranslate({
  src,
  // 要么
  text,

  from,
  to,
  subscriptionKey,
}).then((res) => {
  // deal with result
})
```
