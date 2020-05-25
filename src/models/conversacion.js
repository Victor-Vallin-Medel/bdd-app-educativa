const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubCateogria = new Schema({
    miembros: [Schema.Types.ObjectId],
    mensajes: 
    [
        {
        autor: Schema.Types.ObjectId,
        cuerpo: String,
        fechaEnviado: Date,
        }
    ]
});

module.exports = mongoose.model('SubCateogria', SubCateogria);