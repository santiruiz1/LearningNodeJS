// npm init
// npm install --save express

const express = require('express');

const app = express(); // Genera una app con express, se puede crear mas de una

app.get('/', (req,res)=> {
    res.send({ hi: 'buddy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);