const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioContenido = new Schema({
    idUsuario: Schema.Types.ObjectId,
    idContenido: Schema.Types.ObjectId,
    calificacion: Number,
});

module.exports = mongoose.model('UsuarioContenido', UsuarioContenido);