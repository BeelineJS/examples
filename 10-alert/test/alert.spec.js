describe("Layout", () => {

    const data = require('../src/data.json')
    const BeelineJS = require('beelinejs-core');
    const components = require('components');
    const layouts = require('layouts');

    const jsdom = require("jsdom");
    const dom = new jsdom.JSDOM(`<!DOCTYPE html><body><div id="content"></div>
<div id="modal"></div></body>`);
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

    test("Check alert is showing",
        () => {
            const alert = doc.querySelector('.alert-box');
            expect(alert).not.toEqual(null);

            const h1 = alert.querySelector('h1');
            expect(h1).not.toEqual(null);
            expect(h1.textContent).toBe('Alert Title');
        });

    test("Check alert is closing", () => {
        const button = doc.querySelector('.alert-box button');
        expect(button).not.toEqual(null);
        expect(button.textContent).toBe('OK');

        button.click();
        const alert = doc.querySelector('.alert-box');
        expect(alert).toEqual(null);
    });
});