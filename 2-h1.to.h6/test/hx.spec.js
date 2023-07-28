describe("H1 - H6", () => {

    const data = require('../src/data.js')
    const BeelineJS = require('beelinejs-core');
    const components = require('components');

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
            win
        })
        .onLoad(data);

    test("h1",
        () => {
            const result = doc.querySelector('h1').textContent;
            expect(result).toBe('H1');
        });
    test("h2",
        () => {
            const result = doc.querySelector('h2').textContent;
            expect(result).toBe('H2');
        });
    test("h4",
        () => {
            const result = doc.querySelector('h3').textContent;
            expect(result).toBe('H3');
        });
    test("h4",
        () => {
            const result = doc.querySelector('h4').textContent;
            expect(result).toBe('H4');
        });
    test("h5",
        () => {
            const result = doc.querySelector('h5').textContent;
            expect(result).toBe('H5');
        });
    test("h6",
        () => {
            const result = doc.querySelector('h6').textContent;
            expect(result).toBe('H6');
        });

});