# Markdown Translator

其他语言：[中文](.legacy/README.zh.md)

> Translate markdown file while preserving the format using Azure Cognitive Services or Chatgpt

[Migration from 0.4.5](./MIGRATION.md)

## Prerequisites
### Register Service
You need to register and create authentication infos according to the service you use before using the translator:
- [Azure Cognitive Services](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/translator-text-how-to-signup) Get Text Translate API `Subscription Key` and `Subscription Region`
- [OpenAI(ChatGPT)](https://platform.openai.com/account/api-keys) Create secret key

### NodeJS Version
You'd better use NodeJS >= 16 for better support for esm.

## Usage

### Use CLI

```bash
# install cli
npm install @markdown-translator/cli -g

# translate README.md to `zh` and write the result to README.zh.md using ChatGPT
mdtranslatetranslate -i README.md -o README.zh.md -t zh

# supported args:
#   -a, --azure             Use Azure Translator API
#   -c, --chatgpt           Use ChatGPT Translator API (default: true)
#   -f, --from <language>   Translate from language. Default is "en"
#   -t, --to <language>     Translate to language
#   -k --key [key]          Subscription key for Azure or OpenAI API
#   -r --region [region]    Subscription region for Azure API
#   -i, --input <file>      Input file path
#   -o, --output <file>     Output file path
```

### Use Module
```bash
# install module
npm install @markdown-translator/core
```

```javascript
import { azureTranslate, chatgptTranslate } from '@markdown-translator/core';

azureTranslate('# Hello World', {
  // from: 'en',
  to: 'zh',
  subscriptionKey: 'your subscription key', // get from Azure Portal
  subscriptionEngine: 'your subscription region', // get from Azure Portal if you have
}).then(res => {
  console.log(res) // # 你好，世界
})

chatgptTranslate('# Hello World', {
  // from: 'en',
  to: 'zh',
  apiKey: 'your api key', // https://platform.openai.com/account/api-keys
}).then(res => {
  console.log(res) // # 你好，世界
})

```
