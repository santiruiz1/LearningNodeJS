const express = require("express");
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require("./config/keys");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); // Genera una app con express, se puede crear mas de una
app.use(cookieSession({
  maxAge: 2592000000,
  keys: [keys.cookieKey]
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
