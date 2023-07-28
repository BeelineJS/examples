describe("Layout", () => {

    const data = require('../src/data.json')
    const BeelineJS = require('beelinejs-core');
    const components = require('components');
    const layouts = require('layouts');

    const jsdom = require("jsdom");
    const dom = new jsdom.JSDOM(`<!DOCTYPE html><body></body>`);
    // This prints "My First JSDOM!"

    const doc = dom.window.document;
    const win = dom.window;
    global.localStorage = require('../../test/mock');

    BeelineJS
        .create({
            components,
            doc,
            win,
            layouts
        })
        .onLoad(data);

    test("Check layout is loaded",
        () => {
            const resultA = doc.querySelector('.section-a');
            expect(resultA).not.toEqual(null);

            const resultB = doc.querySelector('.section-b');
            expect(resultB).not.toEqual(null);

            const resultC = doc.querySelector('.section-c');
            expect(resultC).not.toEqual(null);
        });
});