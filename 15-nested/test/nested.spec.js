describe("Paragraph", () => {
    const data = require('../src/data.json')
    const jsdom = require("jsdom");
    const BeelineJS = require('beelinejs-core');
    const components = require('components');
    const dom = new jsdom.JSDOM(`<!DOCTYPE html><body></body>`);
    // This prints "My First JSDOM!"

    const doc = dom.window.document;
    const win = dom.window;
    global.localStorage = require('../../test/mock');

    BeelineJS
        .create({
            components,
            doc,
            win
        })
        .onLoad(data);

    /*test("Check paragraph test is loaded",
        () => {
            const result = doc.querySelector('p').textContent;
            expect(result).toBe('Text Example');
        });*/
});