require('marko/node-require');
const express = require('express');
const marko = require("marko/express");

const templates = require('../views/index');
const consign = require('consign');
const bodyParser = require('body-parser');
//const methodOverride = require("method-override");
var compression = require('compression');

module.exports = () => {
    const app = express();
    app.use(marko());
    app.use('/static', express.static('public'));
    app.use('/nd_md', express.static('node_modules'));
    //app.use(express.static('public'));

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    consign().include('routes').into(app);
    app.use(compression);//compactação gzip.
    return app;
};
