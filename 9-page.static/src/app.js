import './style.scss';

const components = require('components');
const layouts = require('layouts');
const BeelineJS = require('beelinejs-core');

const data = require('./data.json');


BeelineJS
    .create({
        components,
        layouts
    })
    .onLoad(data);