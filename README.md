# Markdown Translator

其他语言：[中文](./README.zh.md)

> Directly translate markdown file using Azure Text Translate API

## Prerequisites

Get Text Translate API Key from [Azure Cognitive Services](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/translator-text-how-to-signup)

## Quick Start

### Use as cli

```bash
# install cli
npm install markdown-translator -g

# set key and region from Azure Text Translate API
md-translator set --key <your key>
md-translator set --region <your region>

# do translate
md-translator translate --src README.md --dest README.zh.md --to zh

# get more information
md-translator --help
```

### Use as binaries

> Run markdown-translator without Node environment

- Update config.json with your Azure Text Translate API.
- Run `npm run dist:mac` to build for macos and `npm run dist:win` for windows.
- Run the dist binary files like cli, e.g, `./markdown-translator translate --src README.md --dest README.zh.md --to zh`

> Modify dist scripts according to your platform. Find more at [here](https://github.com/zeit/pkg)

### Use as a module

```bash
# install module
npm install markdown-translator
```

```javascript
const markdownTranslate = require('markdown-translator')
markdownTranslate({
  // Give either a filepath
  src: pathToSrcFile,
  // Or pass in the text directly
  text: markdownContent,

  from: languageToTranslateFrom,
  to: languageToTranslateTo,
  subscriptionKey: yourSubscriptionKey,
  region: theRegionOfYourAzureInstance,
}).then((res) => {
  // deal with result
})
```

Note that there are some opinionated defaults: from is by default 'en', to 'zh'.
The region argument is optional.
