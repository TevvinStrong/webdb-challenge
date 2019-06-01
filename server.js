// Configure imports.
const express = require('express');
const helmet = require('helmet');
const knex = require('knex')('devlopment');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig);


// Configure server
const server = express();

// Configure middleware(Global)
server.use(express.json());
server.use(helmet());

// Sanity test
server.get('/', (req, res) => {
    res.send("<h1>You are not going crazy!!!1</h1>");
});

module.exports = server;