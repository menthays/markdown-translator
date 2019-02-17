const fs = require('fs');
const path = require('path');

const {parseToTree, getTextTobeTranslated, stringifyToDoc} = require('./lib/parseMarkdown');
const {translate} = require('./lib/translateByMicrosoft');

const translateMarkdown = (filepath) => {
  const tree = parseToTree(filepath);
  const nodeArr = getTextTobeTranslated(tree);
  const textArr = nodeArr.reduce((prev = [], cur) => {
    if(cur && cur.value) {
      prev.push({
        text: cur.value
      });
    }
    return prev;
  }, []);


  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, './README.zh.md'),
    {flags: 'a'}
  )
  translate(textArr).then(data => {
    for (let node of nodeArr) {
      if(node && node.value) {
        node.value = data.shift().translations[0].text
      }
    }
    writeStream.write(stringifyToDoc(tree), (err => {
      if(err) {
        throw err
      }
      process.exit(0)
    }))
  }).catch(err => {throw err})
}

translateMarkdown(path.resolve(__dirname, './README.md'))