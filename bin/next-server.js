const http = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const nextPort = "3006";

nextApp
    .prepare()
    .then(() => { 
        http.createServer((req, res) => handle(req, res)).listen(nextPort); 
    })
    .catch(e => { 
        console.log("cannot prepare next", e); 
    });
