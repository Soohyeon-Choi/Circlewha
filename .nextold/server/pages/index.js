var express = require('express');
var router = express.Router();
const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

/* GET home page. */
router.get('/index', function(req, res, next) {
  //res.render('index', { title: 'Express!' });
});

module.exports = router;
