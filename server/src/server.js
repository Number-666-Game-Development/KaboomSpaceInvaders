'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000);

    const url = path.join(__dirname, req.url);

    fs.readFile(url, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
});

server.listen(3001, () => {
    console.log('Listening on port: 3001');
});