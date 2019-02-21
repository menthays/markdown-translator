const fs = require('fs');
const parse = require('remark-parse');
const stringify = require('remark-stringify');
const unified = require('unified');

const parseToTree = (filepath) => {
  const file = fs.readFileSync(filepath)
  return unified().use(parse).parse(file);
}

const stringifyToDoc = (syntaxTree) => {
  return unified().use(stringify).stringify(syntaxTree);
}

const getTextTobeTranslated = (tree) => {
  let arr = []
  let node = tree;
  if(node.type === 'text') {
    let tempNode = node;
    arr.push(tempNode);
    return arr;
  } 

  if(node.children && node.children.length) {
    for (let childNode of node.children) {
      arr = arr.concat(getTextTobeTranslated(childNode))
    }
    return arr;
  }
}

module.exports = {
  getTextTobeTranslated, parseToTree, stringifyToDoc
}