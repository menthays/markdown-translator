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

# do translate
md-translator translate --src README.md --dest README.zh.md --to zh

# get more infomation
md-translator --help
```

### 以模块的方式使用

```bash
# install module
npm install markdown-translator
```

```javascript
const markdownTranslate = require('markdown-translator')
markdownTranslate({
  src,
  from,
  to,
  subscriptionKey
}).then(res => {
  // deal with result
})
```
