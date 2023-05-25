// npm init
// npm install --save express

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express(); // Genera una app con express, se puede crear mas de una

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('AT',accessToken);
    console.log('RT',refreshToken);
    console.log('PR',profile);
  }
));

app.get('/', (req,res)=>{
    res.send({ hello: "World!"});
})
app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile','email']
}));
app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000;
app.listen(PORT);
