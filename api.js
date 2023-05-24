// npm init
// npm install --save express

const express = require('express');

const app = express(); // Genera una app con express, se puede crear mas de una

ap.get('/', (req,res)=> {
    res.send({ hi: 'buddy' });
});

app.listen(3000);