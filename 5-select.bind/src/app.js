import './style.scss';

const components = require('components');
const data = require('./data.json');
const BeelineJS = require('beelinejs-core');

BeelineJS
    .create({
        components
    })
    .onLoad(data);