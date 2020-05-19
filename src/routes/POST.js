const createController = require('../controllers/create');

const POST = (req, res) => {
  createController(req, res);
}

module.exports = POST;