// npm init
// npm install --save express

const express = require("express");
// const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require("./config/keys");
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); // Genera una app con express, se puede crear mas de una
app.use(cookieSession({
  maxAge: 2592000000,
  keys: [keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true
// }));
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
