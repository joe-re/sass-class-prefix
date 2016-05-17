const { parse, stringify } = require('scss-parser');
const createQueryWrapper = require('query-ast');

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

module.exports.parse = (prefix, text) => {
  return addPrefix(prefix, text);
};
