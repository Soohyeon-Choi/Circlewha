/*var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mysql = require('mysql');
const multer = require('multer');

// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var conn = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'circlewha',
  password : 'circlewha123',
  database : 'circle'
});

var app = express();
conn.connect();
var upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({extended: false}));

//app.locals.pretty = true;

conn.query('SELECT title FROM circle_all', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
 
conn.end();*/