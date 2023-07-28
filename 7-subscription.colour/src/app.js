import './style.scss';

const components = require('components');
const layouts = require('layouts');
const data = require('./data.json');

const BeelineJS = require('beelinejs-core');

BeelineJS
    .create({
        components,
        layouts
    })
    .onLoad(data);