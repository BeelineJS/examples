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

    test("Check layout Data is loaded",
        () => {
            const resultA = doc.querySelector('.section-a h3');
            expect(resultA).not.toEqual(null);
            expect(resultA.textContent).toEqual('Page Title');

            const resultB = doc.querySelectorAll('.section-b a');
            expect(resultB.length).toBe(3);

            const resultC = doc.querySelector('.section-c p');
            expect(resultC.className).toEqual('Paragraph');
        });
});