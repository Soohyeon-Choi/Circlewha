const express = require('express');
var app = express();
const router = express.Router();
const mysql = require('mysql');

var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'circlewha',
    password: 'circlewha123',
    database: 'circle'
});
db.connect();

//if button_name is clicked
//=> SELECT id FROM circle_all WHERE +'button_name'+'='button_val'
//if button_name is unclicked
//=> 

var button_name = [
    ['belong_category', 'belong_colleage', 'belong_major'],
    'qual_new', 'qual_allgrade', 'qual_nograde', 'qual_allmajor', 'qual_nomajor',
    'period',
    'etc_room', 'etc_interviewX', 'etc_feeX', 'etc_allday',
    ['interest_u', 'interest_d']];
var button_val1 = [
    -1,
    -1, -1, -1, -1, -1,
    -1,
    -1, -1, -1, -1,
    -1];
var button_val = [
    [[3, 4, 40], [2, 9, 0]],//belong
    1, 1, -1, 1, -1,//qual
    -1,//period
    -1, -1, 1, 1,//etc
    [[1, 31], [4, 44]]];//interest

//넘어오는 버튼 배열

var belong_res = [], belong_res1 = [], belong_res2 = [];
var qual_res = [], qual_res1 = [], qual_res2 = [], qual_res3 = [], qual_res4 = [], qual_res5 = [];
var etc_res = [], etc_res1 = [], etc_res2 = [], etc_res3 = [], etc_res4 = [];

var period_res = [];
var interest_res = [];


var res = [];

const postData = (req, res) => {
    const {
        body: {

        }
    } = req
}

var sql = 'SELECT id FROM circle_all WHERE ('
var sql_belong = '(';
var sql_qual = '(';
var sql_period = '(';
var sql_etc = '(';
var sql_interest = '(';
var final_sql;
let sql1;
let sql2;

for (let i = 0; i < 1; i++) {
    if (button_val[0] == -1) {
        break;
    }
    for (let j = 0; j < button_val[0].length; j++) {
        sql_belong += '('
        for (let k = 0; k < 3; k++) {
            if (button_val[0][j][k] == 1886) {
                if (k == 0) {
                    sql_belong += (button_name[0][k]);
                }
                else {
                    sql_belong += (' AND ' + button_name[0][k]);
                }
            }
            else {
                if (k == 0) {
                    sql_belong += (button_name[0][k] + '=' + button_val[0][j][k]);
                }
                else {
                    sql_belong += (' AND ' + button_name[0][k] + '=' + button_val[0][j][k]);
                }
            }
        }
        if (j != (button_val[0].length - 1)) {
            sql_belong += ') OR ';
        }
    }
    sql_belong += '))';
}
//console.log('sql_belong: ' + sql_belong);


for (let i = 1; i < 6; i++) {
    if (button_val[i] != -1) {
        if (button_val == 1886) {
            sql_qual += (' AND ' + button_name[i]);
        }
        else {
            sql_qual += (' AND ' + button_name[i] + '=' + button_val[i]);
        }
    }
}
sql_qual += ')';
if (sql_qual.startsWith('( AND ')) {
    sql_qual = sql_qual.replace('( AND ', '(');
}

//console.log('sql_qual: ' + sql_qual);


for (let i = 6; i < 7; i++) {
    if (button_val[6] == -1) {
        break;
    }
    for (let j = 0; j < button_val[6].length; j++) {
        if (j == 0) {
            sql_period += (button_name[6] + '=' + button_val[6][j]);
        }
        else {
            sql_period += (' OR ' + button_name[6] + '=' + button_val[6][j]);
        }
    }
    sql_period += ')';
}
//console.log(sql_period);


for (let i = 7; i < 11; i++) {
    if (button_val[i] != -1) {

        if (button_val == 1886) {
            sql_etc += (' AND ' + button_name[i]);
        }
        else {
            sql_etc += (' AND ' + button_name[i] + '=' + button_val[i]);
        }
    }
}
sql_etc += ')';
if (sql_etc.startsWith('( AND ')) {
    sql_etc = sql_etc.replace('( AND ', '(');
}

//console.log(sql_etc);

for (let i = 11; i < 12; i++) {
    if (button_val[11] == -1) {
        break;
    }
    for (let j = 0; j < button_val[11].length; j++) {

        if (button_val[11][j][0] == 1886) {
            if (j == 0) {
                sql_interest += (button_name[11][0]);
            }
            else {
                sql_interest += (' OR ' + button_name[11][0]);
            }
        }
        else if (button_val[11][j][1] == 1886) {
            if (j == 0) {
                sql_interest += (button_name[11][0] + ' LIKE ' + '\'%' + button_val[11][j][1] + '%\'');
            }
            else {
                sql_interest += (' OR ' + button_name[11][0] + ' LIKE ' + '\'%' + button_val[11][j][1] + '%\'');
            }
        }
        else {
            if (j == 0) {
                sql_interest += (button_name[11][1] + ' LIKE ' + '\'%' + button_val[11][j][1] + '%\'');
            }
            else {
                sql_interest += (' OR ' + button_name[11][1] + ' LIKE ' + '\'%' + button_val[11][j][1] + '%\'');
            }


        }
    }
    sql_interest += ')';
}

//console.log(sql_interest);


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

//console.log(sql);

router.get(['/', '/id'], function (req, res, next) {

    db.query(sql, (err, rows) => {
        //console.log('최종: ' + sql);
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).send({ 
                message: "im expressjs" 
            });

            //res.json({rows: rows});
            //res.json(true);
        }
    })
    //res.render('tagSearch.html');
})

module.exports = router;
