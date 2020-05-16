const { add } = require('../store');

const controller = (req, res) => {
  const { string = '', seconds = 1 } = req.body;
  add(string, seconds);
  res.statusCode = 200;
  res.end('ok');
}

module.exports = controller;