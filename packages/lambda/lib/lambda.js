#!/usr/bin/env node

const http = require('http'); 

        let responseBody = {
            message: "Hello Lambda!",
        };
        http.createServer ((req, res) => {
            res.statusCode = 200;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(responseBody));
        }).listen(9060);
