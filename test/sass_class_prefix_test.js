const sassClassPrefix = require('./../index');
const assert = require('power-assert');
const fs = require('fs');

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

    it('can add prefix to scss', () => {
      assert.equal(sassClassPrefix.parse(targetText, 'prefix-'), expectedText);
    });
  });

  describe('.parseFile', () => {
    let targetFilePath = `${__dirname}/fixtures/sample.scss`;
    let expectedFile = `${__dirname}/fixtures/parsed_sample.scss`;

    it('can add prefix to scss from file', () => {
      assert.equal(sassClassPrefix.parseFile(targetFilePath, 'prefix-'), fs.readFileSync(expectedFile, 'utf8'));
    });
  });

});
