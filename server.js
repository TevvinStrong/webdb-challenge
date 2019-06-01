const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./routers/project-model');
const actionsRouter = require('./routers/actions-model');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

// Sanity test
server.get('/', (req, res) => {
    res.send("<h1>You are not going crazy!!!1</h1>");
});

module.exports = server;