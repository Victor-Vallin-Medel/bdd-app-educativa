const mongoose = require('mongoose');
const { Schema } = mongoose;
import { SubCategoria } from './subCategoria';

const Categoria = new Schema({
    nombre: String,
    subCategoria: [SubCategoria],
});

module.exports = mongoose.model('Categoria', Categoria);