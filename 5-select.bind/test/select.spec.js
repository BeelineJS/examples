describe("Select", () => {
    const data = require('../src/data.json')
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


    test("Check Select is loaded",
        () => {
            bjs.onLoad(data);
            const result = doc.querySelector('select').value;
            expect(result).toBe('4');

            const options = doc.querySelectorAll('option');
            expect(options.length).toEqual(6);
        });
});