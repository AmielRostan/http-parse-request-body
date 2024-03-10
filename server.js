const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
// const fs = require('fs');
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here

const http = require('http');
server = http.createServer((req, res) => {
    let body = "";

    req.on('data', (data) => {
        body += data;
    });

    req.on("end", () => {
        body = parseBody(body);
        req.body = body;
        console.log(body);
        sendFormPage(req, res);
    })
});
const port = 5000;

server.listen(port, () => console.log('Successfully started the server on port', port));


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
