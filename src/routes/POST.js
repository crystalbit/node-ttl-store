const createController = require('../controllers/create');

const POST = (req, res) => {
  const data = [];
  req.on('data', chunk => data.push(chunk));
  req.on('end', () => {
    try {
      const body = JSON.parse(data);
      req.body = body;
      createController(req, res);
    } catch (err) {
      res.statusCode = 500;
      res.end();
      console.log(err)
    }
  });
}

module.exports = POST;