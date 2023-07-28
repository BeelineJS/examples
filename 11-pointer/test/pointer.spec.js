describe("Pointer", () => {

  const data = require('../src/data.json')
  const BeelineJS = require('beelinejs-core');
  const components = require('components');

  const jsdom = require("jsdom");
  const dom = new jsdom.JSDOM(`<!DOCTYPE html><body></body>`);

  const doc = dom.window.document;
  const win = dom.window;
  global.localStorage = require('../../test/mock');


  win.innerHeight = 1024;
  win.innerWidth = 1980;

  const bj = BeelineJS
    .create({
      components,
      doc,
      win
    })
    .onLoad(data);

  test("Check pointer is loaded",
    () => {
      const pointer = doc.querySelector('p.pointer');
      expect(pointer)
        .not.toEqual(null);
    });

  test("Check pointer position is updated",
    () => {
      const pointer = doc.querySelector('p.pointer');
      const event = {
        type: 'mousemove',
        clientY: 100,
        clientX: 101,
        preventDefault() { },
        stopImmediatePropagation() { },
        doc
      };

      bj._.events.document._.onDocumentEvent(event, doc);

      expect(pointer.style.top)
        .toBe('100px');
      expect(pointer.style.left)
        .toBe('101px');
    });
});
