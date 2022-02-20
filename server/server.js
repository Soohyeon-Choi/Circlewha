// const express = require("express");
// const app = express();
// const test = require("./Router/test");
// const cors = require("cors");
// app.use(cors({ origin: true, credentials: true }));
// app.use("/api", test);
// const port = 5000;
// app.listen(port, () => console.log(`${port}`));

const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "circlewha",
  password: "circlewha123",
  database: "circle",
});

app.get("/", (req, res) => {
  res.json({ message: "Root page" });
});

app.get("/api/test", (req, res) => {
  res.json({ hi: "Hello World!" });
});

app.get(`/api/get-detail`, (request, response) => {
  try {
    const req = request.query;
    connection.query(
      "SELECT * FROM `desc` where id=?",
      [req.num],
      (err, rows) => {
        if (err) throw err;
        response.json({ data: rows });
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
