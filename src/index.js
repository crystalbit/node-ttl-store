#! /usr/bin/env node
const cluster = require('cluster');
const http = require('http');
const port = process.env.PORT || 27027;
const initMaster = require('./clusters/initMaster');
const { GET, POST, DELETE } = require('./routes');

const router = { GET, POST, DELETE };
const inTest = !!module.parent;

if (cluster.isMaster && !inTest) {
  initMaster(cluster);
} else {
  const server = http.createServer((req, res) => {
    if (router[req.method]) router[req.method](req, res);
    else res.end('Invalid method');
  });
  (module.exports.listen = () => {
    return server.listening || server.listen(port, '127.0.0.1', () => !inTest && console.log(`TTL Store started at ${port} port`));
  })();
  if (inTest) module.exports.server = server;
}

if (inTest) module.exports.close = (callback = () => {}) => this.server.close(callback);
