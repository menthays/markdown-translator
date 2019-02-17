const fs = require('fs');
const parse = require('remark-parse');
const stringify = require('remark-stringify');
const unified = require('unified');
// const createStream = require('unified-stream');

// const parseToTree = unified()
//   .use(parse)
//   .parse("# Some title");

// console.log(`tree = ${JSON.stringify(parseToTree, null, 4)}`);

// const stringifyToDoc = unified()
//   .use(stringify)
//   .stringify(parseToTree);

// console.log(`${`\u001b[${33}m${`doc`}\u001b[${39}m`} = ${stringifyToDoc}`);

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

// console.log(
//   JSON.stringify(
//     getTextTobeTranslated(parseToTree(path.resolve(__dirname, '../README.md')))
//   )
// )

module.exports = {
  getTextTobeTranslated, parseToTree, stringifyToDoc
}