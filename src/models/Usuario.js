const mongoose = require('mongoose');
const { Schema } = mongoose;

const Usuario = new Schema({
    nombre: String,
    email: String,
    passwd: String,
    rol: String,
    perfil: {
        username:String,
        imagen: String,
    },
    cursos:[{
        id: Schema.Types.ObjectId,
        finalizado: Boolean,
    }]
});

module.exports = mongoose.model('Usuario', Usuario);