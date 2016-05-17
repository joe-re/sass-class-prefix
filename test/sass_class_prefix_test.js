const sassClassPrefix = require('./../index');
const assert = require('power-assert');

describe('sassClassPrefix', () => {
  describe('.parse', () => {
    let targetText = '';
    let expectedText = '';
    before(() => {
      targetText = `
        .hello {
          .world { color: $red; }
          .sass { color: $blue; }
        }
      `;
      expectedText = `
        .prefix-hello {
          .prefix-world { color: $red; }
          .prefix-sass { color: $blue; }
        }
      `;
    });

    it('can add prefix', () => {
      assert.equal(sassClassPrefix.parse(targetText, 'prefix-'), expectedText);
    });
  });
});
