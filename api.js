// npm init
// npm install --save express

const express = require('express');

const app = express(); // Genera una app con express, se puede crear mas de una

app.get('/', (req,res)=> {
    res.send({ hi: 'buddy' });
});

app.listen("https://santiruiz1.github.io/");