// En este archivo vamos a crear nuestros modelos de clase para
// crear las colecciones de MongoDB

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    name: String,
    email: String,
    credits: { type: Number, default: 0 } // Set default/initial value
}); // Está es la estructura que tendrá cada registro de usuario

mongoose.model('users', userSchema);
// El primer argumento es el nombre de la colección
// Así se crea el modelo que luego
// será usado para crear la colección en la DB