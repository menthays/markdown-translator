# Markdown Translator

> Directly translate markdown file using Azure Text Translate Api

## Prerequisites
Get Text Translate API Key from [Azure Cognitive Services](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/translator-text-how-to-signup)

## Quick Start
### Use as cli
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

### Use as a module
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



