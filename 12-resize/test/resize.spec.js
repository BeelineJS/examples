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
        }).onLoad(data);

    test("Check resize is loaded",
        () => {
            const resize = doc.querySelector('div.wrapper.Resize');
            expect(resize).not.toEqual(null);
        });

    test("Check pointer position is updated",
        () => {
            const resize = doc.querySelector('div.wrapper.Resize');
            win.innerHeight = 500;
            win.innerWidth = 1000;

            const event = {
                type: 'resize',
                target: null,
                clientY: 100,
                clientX: 101,
                preventDefault() { },
                stopImmediatePropagation() { },
            };

            bj._.events.window._.onWindowEvent(event);

            expect(resize.style.top).toBe('250px');
            expect(resize.style.left).toBe('500px');
        });
});