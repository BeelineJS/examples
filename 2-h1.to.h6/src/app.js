import './style.scss';

const components = require('components');
const data = require('./data.js')

const BeelineJS = require('beelinejs-core');

BeelineJS
    .create({
        components
    })
    .onLoad(data);