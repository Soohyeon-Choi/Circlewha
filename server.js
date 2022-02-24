const express = require('express');
const expressSession = require('express-session');
const next = require('next');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const mysql = require('mysql');
var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'circlewha',
  password: 'circlewha123',
  database: 'circle'
});
db.connect();

var bname = [
  ['belong_category', 'belong_colleage', 'belong_major'],
  ['qual_new', 'qual_allgrade', 'qual_allmajor'],
  ['else', '1', '2', '3', '4'],
  ['etc_feeX', 'etc_room', 'etc_interviewX', 'etc_allday'],
  ['interest_u', 'tag_frac']];

function makesql(bval) {
  var sql = 'SELECT id,title,tag_all FROM circle_all WHERE ('
  var sql_belong = '(';
  var sql_qual = '(';
  var sql_period = '(';
  var sql_etc = '(';
  var sql_interest = '(';

  for (let i = 0; i < 1; i++) {
    if (bval[0] == -1) {
      break;
    }
    for (let j = 0; j < bval[0].length; j++) {
      sql_belong += '('
      for (let k = 0; k < 3; k++) {
        if (bval[0][j][k] == 1886) {
          if (k == 0) {
            sql_belong += (bname[0][k]);
          }
          else {
            sql_belong += (' AND ' + bname[0][k]);
          }
        }
        else {
          if (k == 0) {
            sql_belong += (bname[0][k] + '=' + bval[0][j][k]);
          }
          else {
            sql_belong += (' AND ' + bname[0][k] + '=' + bval[0][j][k]);
          }
        }
      }
      if (j != (bval[0].length - 1)) {
        sql_belong += ') OR ';
      }
    }
    sql_belong += '))';
  }
  //console.log('sql_belong: ' + sql_belong);

  for (let i = 1; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      if (bval[1][j] == 1) {
        sql_qual += (' AND ' + bname[1][j] + '=' + bval[1][j]);
      }
    }
    sql_qual += ')';
    if (sql_qual.startsWith('( AND ')) {
      sql_qual = sql_qual.replace('( AND ', '(');
    }
    //console.log('sql_qual: ' + sql_qual);
  }



  for (let i = 2; i < 3; i++) {
    for (let j = 0; j < bval[2].length; j++) {
      if (bval[2][j] == 1) {
        sql_period += (' OR period =' + j);
      }
    }
    sql_period += ')';
    if (sql_period.startsWith('( OR ')) {
      sql_period = sql_period.replace('( OR ', '(');
    }
    //console.log('sql_period: ' + sql_period);
  }

  for (let i = 3; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (bval[3][j] == 1) {
        sql_etc += (' AND ' + bname[3][j] + '=' + bval[3][j]);
      }
    }
    sql_etc += ')';
    if (sql_etc.startsWith('( AND ')) {
      sql_etc = sql_etc.replace('( AND ', '(');
    }
    //console.log('sql_etc: '+ sql_etc);
  }

  for (let i = 4; i < 5; i++) {
    if (bval[4] == -1) {
      break;
    }
    for (let j = 0; j < bval[4].length; j++) {
      if (bval[4][j][1] == '전체') {
        sql_interest += (' OR ' + bname[4][0] + '=' + bval[4][j][0]);
      }
      else {
        sql_interest += (' OR (' + bname[4][0] + '=' + bval[4][j][0] + ' AND ' + bname[4][1] + ' LIKE ' + '\'%' + bval[4][j][1] + '%\'' + ')');
      }
    }
    sql_interest += ')';
    if (sql_interest.startsWith('( OR ')) {
      sql_interest = sql_interest.replace('( OR ', '(');
    }
    //console.log('sql_interest: '+sql_interest);
  }

  var button_arr = [sql_belong, sql_qual, sql_period, sql_etc, sql_interest];
  for (let i = 0; i < button_arr.length; i++) {
    if (button_arr[i] != '(') {
      if (button_arr[i] != '()')
        sql += (button_arr[i] + ' AND ');
    }

  }

  sql += ')';
  if (sql.endsWith('AND )')) {
    sql = sql.replace('AND )', ')');
  }

  //console.log('최종: ' + sql);
  return sql;
}

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler(); // app에서 뽑아온 get요청 처리기

dotenv.config();
app.prepare().then(() => {
  const server = express();
  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: 'process.env.COOKIE_SECRET',
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );
  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  });
  server.get('/index', (req, res) => {
    app.render(req, res, '/index');
  });
  server.get('/tagSearch', (req, res) => {
    console.log('*** get tag ***')
    return app.render(req, res, '/tagSearch');
  });

  server.post('/tagSearch', (req, res) => {
    console.log('*** post tag ***')
    var Bval = [
      -1,
      req.body.qual,
      req.body.sem,
      req.body.etc,
      req.body.interest
    ]
    var query = makesql(Bval)
    console.log('query: '+query);
    
    db.query(query, function (err, rows){
      if(err){
        console.log(err)
      }
      else{
        return res.send(rows);
      }
    })

  //return app.render(req, res, '/tagSearch');
  });

  server.get(`/get-detail`, (request, response) => {
    try {
      console.log('*** get detail ***')
      const req = request.query;
      db.query(
        "SELECT * FROM `desc` where id=?",
        [req.num],
        (err, rows) => {
          if (err) throw err;
          response.json({ data: rows });
        });
    } catch (error) {
      console.log(error);
    }
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(3060, () => {
    console.log('next + express running on port 3060');
  });
});