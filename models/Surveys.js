const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveysSchema = new Schema({
    userId: String,
    name: String,
    message: String,
    emails: { type: Array, default: []} // Set default/initial value
}); // Está es la estructura que tendrá cada registro de usuario

mongoose.model('surveys', surveysSchema);