
// Configuración del servidor Express y conexión a MongoDB
require('dotenv').config();
// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27016/myappdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Contando a MongoDB'))
.catch(err => console.error('error conetando a MongoDB', err));

// Importar y usar las rutas
const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);

// Iniciar el servidor
app.listen(port, () => console.log(`API corriendo en http://localhost:${port}`));