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
app.get('/index', function(req, res, next) {
  //res.render('index', { title: 'Express!' });
});

app.get('/tagSearch', function(req, res, next) {
  res.render('tagSearch', { title: 'tag!' });
});


module.exports = app;
