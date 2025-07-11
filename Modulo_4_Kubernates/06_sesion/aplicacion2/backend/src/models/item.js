// Definicion de esquema de datos para Mongoose
const {Schema, model} = require('mongoose');

// Definición del esquema para los items
const itemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

// Exportar el modelo de Mongoose
module.exports = model('Item', itemSchema);