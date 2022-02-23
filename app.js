var createError = require('http-errors');

var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var router = require('./routes/index');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(logger('dev'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(cors());
app.post('/tagSearch', (req, res) =>{
  console.log("req.body.id");
})
app.get('/tagSearch', (req, res) =>{
  console.log("req.body.id");
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

app.use(router);

