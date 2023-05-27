const passport = require('passport');
// En teoria este archivo tiene las rutas para el OAuth
// Está dentro de la f en module.exports para que esa f pueda ser
// llamada donde se creo el app de express y pasarle esa app

module.exports = app => {
    app.get('/', (req,res)=>{
        res.send({ hello: "World!"});
    })
    app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile','email']
    }));
    app.get('/auth/google/callback', passport.authenticate('google'));
    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    })
    app.get('/api/user', (req,res) => {
        res.send(req.user);
    })
}
