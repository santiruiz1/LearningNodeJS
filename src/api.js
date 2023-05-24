// npm init
// npm install --save express

const express = require('express');
const serverless = require('serverless-http');

const app = express(); // Genera una app con express, se puede crear mas de una
const router = express.Router();

router.get('/', (req,res)=> {
    res.send({ hi: 'buddy' });
});

app.use('/.netlify/functions/api',router);
module.exports.handler = serverless(app);