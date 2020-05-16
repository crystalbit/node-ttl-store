const destroyController = require('../controllers/destroy');

const DELETE = (req, res) => {
  try {
    const url = req.url;
    req.string = url.substring(1);
    destroyController(req, res);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.end();
  }
}

module.exports = DELETE;