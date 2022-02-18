var db = require('./db');
var template = require('./template.js');
var qs = require('querystring');
var url = require('url');
var sanitizeHtml = require('sanitize-html');

exports.home = function (request, response) {
    db.query(`SELECT * FROM circle_all`, function (error, circles) {
        var title = 'circle';
        var description = 'Hello, Node.js';
        var list = template.list(circle_alls);
        var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}

exports.page = function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    db.query(`SELECT * FROM circle_all`, function (error, circle_alls) {
        if (error) {
            throw error;
        }

        response.writeHead(200);
        response.end(html);

    });
}

