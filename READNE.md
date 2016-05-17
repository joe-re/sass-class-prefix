# sass-class-prefix

Parse sass file and add any prefix to scss(sass)'s class selector.


# Install

Install with npm

npm install --save-dev sass-class-prefix

# Usage

```js
const prefixer = require('sass-class-prefix');
const target = `
  .hello {
    .world {
      color: red;
    }
  }
`;
const parsed = prefixer.parse(target, 'prefix-');
console.log(parsed);
// =>
// .prefix-hello {
//  .prefix-world {
//    color: red;
//  }
// }
```

# API

- `parse(scssText: string, prefix: string)`
- `parseFile(filePath: string, prefix: string)`

# ToDo

- implements cli
- gulp integration
- webpack loader integration
