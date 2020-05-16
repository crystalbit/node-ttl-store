const { has } = require('../store');

const controller = (req, res) => {
  const string = req.string;
  res.statusCode = 200;
  res.end(has(string) ? '1' : '0');
}

module.exports = controller;