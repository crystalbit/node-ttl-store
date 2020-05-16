const { destroy } = require('../store');

const controller = (req, res) => {
  const string = req.string;
  destroy(string);
  res.statusCode = 200;
  res.end('ok');
}

module.exports = controller;