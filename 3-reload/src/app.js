import './style.scss';

const components = require('components');


let index = 1;
const data = require('./data')
const BeelineJS = require('beelinejs-core');

const bjs = BeelineJS
    .create({
        components
    });

bjs.onLoad(data.getInitData(index++));

setInterval(refresh, 1000)

function refresh() {
    bjs.onLoad(data.getUpdateData(index++));
}