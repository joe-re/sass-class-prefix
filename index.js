const { parse, stringify } = require('scss-parser');
const createQueryWrapper = require('query-ast');
const fs = require('fs');

const addPrefix = (sassText, prefix) => {
  const ast = parse(sassText);
  const $ = createQueryWrapper(ast);
  $('class').replace((nodeWrapper) => {
    const json = nodeWrapper.toJSON();
    json.value[0].value = `${prefix}${json.value[0].value}`;
    return json;
  });
  return stringify($().get(0));
};

module.exports.parse = (text, prefix) => {
  return addPrefix(text, prefix);
};

module.exports.parseFile = (filePath, prefix) => {
  if (fs.lstatSync(filePath).isFile()) {
    return addPrefix(fs.readFileSync(filePath, 'utf8'), prefix);
  } else {
    throw new Error(`Invalid arguments: ${filePath} isn't file path.`);
  }
};
