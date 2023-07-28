describe("Subscription", () => {

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

    test("Colour subscription",
        async () => {
            bjs.onLoad(data);
            const items = [...doc.querySelectorAll('button')];
            expect(items.length).toEqual(3);

            let p = doc.querySelector('p');

            expect(p.textContent).toBe("Listen to 'set-colour'");

            doc.querySelector('button').click();

            expect(p.textContent).toBe('Green');

            await new Promise((r) => setTimeout(r, 301));

            items[1].click();
            expect(p.textContent).toBe('Red');

            await new Promise((r) => setTimeout(r, 301));

            items[2].click();
            expect(p.textContent).toBe('Blue');
        });
});