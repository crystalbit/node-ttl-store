const getController = require('../controllers/get');

const GET = (req, res) => {
  try {
    const url = req.url;
    req.string = url.substring(1);
    getController(req, res);
  } catch (err) {
    console.log(err)
    res.statusCode = 500;
    res.end();
  }
}

module.exports = GET;