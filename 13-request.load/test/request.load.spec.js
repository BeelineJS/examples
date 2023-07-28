describe("Layout", () => {

    const data = require('../src/data/home.json')
    const BeelineJS = require('beelinejs-core');
    const components = require('components');
    const layouts = require('layouts');
    const request = require('../src/request');

    const jsdom = require("jsdom");
    const dom = new jsdom.JSDOM(`<!DOCTYPE html><body></body>`);
    // This prints "My First JSDOM!"

    const doc = dom.window.document;
    const win = dom.window;
    global.localStorage = require('../../test/mock');

    BeelineJS
        .create({
            components,
            layouts,
            request,
            doc,
            win,

        })
        .onLoad(data);

    test("Check layout Data is loaded",
        () => {
            const header = doc.querySelector('.section-a h3');
            expect(header).not.toEqual(null);
            expect(header.textContent).toEqual('Page Title');

            const links = doc.querySelectorAll('.section-b a');
            expect(links.length).toBe(3);

            const content = doc.querySelector('.section-c p');
            expect(content.textContent.startsWith('Home')).toBeTruthy();
        });

    test("Check load Page A",
        () => {


            const links = [...doc.querySelectorAll('.section-b a')];
            links[0].click();


            const content = doc.querySelector('.section-c p');
            expect(content.textContent.startsWith('Page A')).toBeTruthy();
        });

    test("Check load Page B",
        () => {


            const links = [...doc.querySelectorAll('.section-b a')];
            links[1].click();


            const content = doc.querySelector('.section-c p');
            expect(content.textContent.startsWith('Page B')).toBeTruthy();
        });
});