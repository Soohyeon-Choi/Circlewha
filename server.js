const express = require("express");
const expressSession = require("express-session");
const next = require("next");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const sanitize = require("sanitize-html");
const mysql = require("mysql");

var url = require("url");
const { response } = require("express");
const sanitizeHtml = require("sanitize-html");
var db = mysql.createConnection({
  host: "localhost",
  user: "circlewha",
  password: "circlewha123",
  database: "circle",
});
db.connect();

const bname = [
  ["belong_category", "belong_college", "belong_major"],
  ["qual_new", "qual_allgrade", "qual_allmajor"],
  ["else", "1", "2", "3", "4"],
  ["etc_feeX", "etc_room", "etc_interviewX", "etc_allday"],
  ["interest_u", "tag_frac"],
];

const category = [
  "전체",
  "중앙동아리",
  "단과대학 소속",
  "학부/전공 소속",
  "기타 소속",
  "무소속",
  "연합동아리",
];

const college = [
  "인문과학대학",
  "사회과학대학",
  "자연과학대학",
  "엘텍공과대학",
  "음악대학",
  "조형예술대학",
  "사범대학",
  "경영대학",
  "신산업융합대학",
  "의과대학",
  "간호대학",
  "약학대학",
  "스크랜튼대학",
  "호크마교양대학",
];

const major = [
  ["전체", "국어국문학과", "불어불문학과", "영어영문학과", "사학과", "철학과"],
  ["전체", "심리학과", "행정학과", "커뮤니케이션 미디어학부"],
  ["전체", "화학 나노과학전공", "생명과학전공"],
  [
    "전체",
    "컴퓨터공학과",
    "사이버보안전공",
    "전자전기공학과",
    "식품공학과",
    "화학신소재공학과",
    "기후 에너지시스템공학과",
  ],
  [],
  ["디자인학부"],
  [],
  [],
  ["융합보건학과"],
  [],
  [],
  [],
  ["전체", "뇌 인지과학과", "국제학부"],
  [],
];

function makesql(bval) {
  var sql = "SELECT id,title,tag_all FROM circle_all WHERE (";
  var sql_belong = "(";
  var sql_qual = "(";
  var sql_period = "(";
  var sql_etc = "(";
  var sql_interest = "(";

  for (let i = 0; i < 1; i++) {
    var majorcode;

    if (bval[0][0] == "전체") {
      sql_belong += bname[0][0] + ")";
      break;
    } else if (
      bval[0][0] == "단과대학 소속" ||
      bval[0][0] == "학부/전공 소속"
    ) {
      for (let j = 0; j < category.length; j++) {
        if (bval[0][0] == category[j]) {
          sql_belong += "(" + bname[0][0] + "=" + j + ")";
        }
      }

      if (bval[0][1] != -1) {
        for (let j = 0; j < college.length; j++) {
          if (bval[0][1] == college[j]) {
            sql_belong += "AND" + "(" + bname[0][1] + "=" + (j + 1) + ")";
            majorcode = j;
          }
        }
      } else if (bval[0][1] == -1) {
        sql_belong += "AND" + "(" + bname[0][1] + ")";
      }

      if (bval[0][0] != "단과대학 소속") {
        if (bval[0][2] != -1) {
          for (let j = 0; j < major[majorcode].length; j++) {
            if (bval[0][2] == major[majorcode][j]) {
              sql_belong +=
                "AND" +
                "(" +
                bname[0][2] +
                "=" +
                ((majorcode + 1) * 10 + j - 1) +
                ")";
            }
          }
        } else if (bval[0][2] == -1) {
          sql_belong += "AND (" + bname[0][2] + ")";
        }
      }
    } else {
      for (let j = 0; j < category.length; j++) {
        if (bval[0][0] == category[j]) {
          sql_belong += "(" + bname[0][0] + "=" + j + ")";
        }
      }

      if (bval[0][1] != -1) {
        for (let j = 0; j < college.length; j++) {
          if (bval[0][1] == college[j]) {
            sql_belong += "AND" + "(" + bname[0][1] + "=" + (j + 1) + ")";
            majorcode = j;
          }
        }
      }
      if (bval[0][2] != -1) {
        for (let j = 0; j < major[majorcode].length; j++) {
          if (bval[0][2] == major[majorcode][j]) {
            sql_belong +=
              "AND" +
              "(" +
              bname[0][2] +
              "=" +
              ((majorcode + 1) * 10 + j - 1) +
              ")";
          }
        }
      }
    }

    sql_belong += ")";
  }
  //console.log('sql_belong: ' + sql_belong);

  for (let i = 1; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      if (bval[1][j] == 1) {
        sql_qual += " AND " + bname[1][j] + "=" + bval[1][j];
      }
    }
    sql_qual += ")";
    if (sql_qual.startsWith("( AND ")) {
      sql_qual = sql_qual.replace("( AND ", "(");
    }
    //console.log('sql_qual: ' + sql_qual);
  }

  for (let i = 2; i < 3; i++) {
    for (let j = 0; j < bval[2].length - 1; j++) {
      if (bval[2][j] == 1) {
        sql_period += " OR period =" + (j + 1);
      }
    }
    if (bval[2][4] == 1) {
      sql_period += " OR period = 0";
    }
    sql_period += ")";
    if (sql_period.startsWith("( OR ")) {
      sql_period = sql_period.replace("( OR ", "(");
    }
    //console.log('sql_period: ' + sql_period);
  }

  for (let i = 3; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (bval[3][j] == 1) {
        sql_etc += " AND " + bname[3][j] + "=" + bval[3][j];
      }
    }
    sql_etc += ")";
    if (sql_etc.startsWith("( AND ")) {
      sql_etc = sql_etc.replace("( AND ", "(");
    }
    //console.log('sql_etc: '+ sql_etc);
  }

  for (let i = 4; i < 5; i++) {
    if (bval[4] == -1) {
      break;
    }
    for (let j = 0; j < bval[4].length; j++) {
      if (bval[4][j][1] == "전체") {
        sql_interest += " OR " + bname[4][0] + "=" + bval[4][j][0];
      } else {
        sql_interest +=
          " OR (" +
          bname[4][0] +
          "=" +
          bval[4][j][0] +
          " AND " +
          bname[4][1] +
          " LIKE " +
          "'%" +
          bval[4][j][1] +
          "%'" +
          ")";
      }
    }
    sql_interest += ")";
    if (sql_interest.startsWith("( OR ")) {
      sql_interest = sql_interest.replace("( OR ", "(");
    }
    //console.log('sql_interest: '+sql_interest);
  }

  var button_arr = [sql_belong, sql_qual, sql_period, sql_etc, sql_interest];
  for (let i = 0; i < button_arr.length; i++) {
    if (button_arr[i] != "(") {
      if (button_arr[i] != "()") sql += button_arr[i] + " AND ";
    }
  }

  sql += ")";
  if (sql.endsWith("AND )")) {
    sql = sql.replace("AND )", ")");
  }

  //console.log('최종: ' + sql);
  return sql;
}

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler(); // app에서 뽑아온 get요청 처리기

dotenv.config();
app.prepare().then(() => {
  const server = express();
  server.use(morgan("dev"));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: "process.env.COOKIE_SECRET",
      cookie: {
        httpOnly: true,
        secure: false,
      },
    })
  );
  server.get("/", (req, res) => {
    return app.render(req, res, "/");
  });
  server.get("/index", (req, res) => {
    app.render(req, res, "/index");
  });
  server.get("/tagSearch", (req, res) => {
    console.log("*** get tag ***");
    return app.render(req, res, "/tagSearch");
  });


  server.post("/tagSearch", (req, res) => {
    console.log("*** post tag ***");
    var query;
    var Bval = [
      req.body.belong,
      req.body.qual,
      req.body.sem,
      req.body.etc,
      req.body.interest,
    ];

    if (req.body.qual[0] != 100) {
      query = makesql(Bval);
    } else {
      query = "SELECT id,title,tag_all FROM circle_all";
    }
    console.log("query: " + query);

    db.query(query, function (err, rows) {
      if (err) {
        console.log(err);
      } else {
        return res.send(rows);
      }
    });

    //return app.render(req, res, '/tagSearch');
  });

  server.get("/title", (request, response) => {
    try {
      console.log("*** get titleSearch ***");
      var queryData = url.parse(request.url, true).query;

      var title = sanitizeHtml(queryData.title);

      var sql = `SELECT id,title,tag_all FROM circle_all WHERE title LIKE '%${title}%' `;
      db.query(sql, (err, rows) => {
        if (err) {
          throw err;
        }
        response.json({ data: rows });
      });
    } catch (error) {
      console.log(error);
    }
  });

  server.get(`/get-detail`, (request, response) => {
    try {
      console.log("*** get detail ***");
      const req = request.query;
      db.query("SELECT * FROM `desc` where id=?", [req.num], (err, rows) => {
        if (err) throw err;
        response.json({ data: rows });
      });
    } catch (error) {
      console.log(error);
    }
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(3060, () => {
    console.log("next + express running on port 3060");
  });
});
