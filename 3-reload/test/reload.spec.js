describe("Paragraph", () => {
  require('../../test/mock');
  const data = require('../src/data.js')
  const BeelineJS = require('beelinejs-core');
  const components = require('components');

  const jsdom = require("jsdom");
  const dom = new jsdom.JSDOM(`<!DOCTYPE html><body></body>`);
  // This prints "My First JSDOM!"

  const doc = dom.window.document;
  const win = dom.window;
  global.localStorage = require('../../test/mock');

  let index = 1;

  const bjs = BeelineJS
    .create({
      components,
      doc,
      win
    });

  test("Check paragraph test is loaded",
    () => {
      bjs.onLoad(data.getInitData(index));
      const result = doc.querySelector('p')
        .textContent;
      expect(result)
        .toBe('Text Example 1');
    });

  test("Check paragraph test is updated",
    () => {
      index++;
      bjs.onLoad(data.getUpdateData(index));
      const result = doc.querySelector('p')
        .textContent;
      expect(result)
        .toBe('Text Example 2');
    });
});
