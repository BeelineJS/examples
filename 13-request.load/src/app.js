import './style.scss';

const BeelineJS = require('beelinejs-core');
const components = require('components');
const layouts = require('layouts');

const request = require('./request');
const data = require('./data/home.json')


BeelineJS
    .create({
        components,
        request,
        layouts
    })
    .onLoad(data);