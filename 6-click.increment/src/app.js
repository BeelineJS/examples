import './style.scss';

const components = require('components');

const BeelineJS = require('beelinejs-core');
const data = require('./data');

BeelineJS
    .create({
        components
    })
    .onLoad(data);

//TODO: update to css grid