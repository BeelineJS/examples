describe("Click increment", () => {

    const data = require('../src/data.js')
    const BeelineJS = require('beelinejs-core');
    const components = require('components');

    const jsdom = require("jsdom");
    const dom = new jsdom.JSDOM(`<!DOCTYPE html><body></body>`);
    // This prints "My First JSDOM!"

    const doc = dom.window.document;
    const win = dom.window;
    global.localStorage = require('../../test/mock');

    const bjs = BeelineJS
        .create({
            components,
            doc,
            win
        });


    test("Click increment",
        () => {
            bjs.onLoad(data);
            const items = [...doc.querySelectorAll('p')];
            expect(items.length).toEqual(1000);

            expect(items[0].textContent).toBe('1');

            items[0].click();
            expect(items[0].textContent).toBe('2');
        });
});