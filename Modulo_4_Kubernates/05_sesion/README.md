# Sesión 05: Kubernetes

## Fecha: 27/06/2025

## Objetivos de la Sesión

- Construir una imagen mediante mongo

## Temas Cubiertos

1. **Dockers**
   - Creación de imagenes con DockerFile y mongo

## Ejercicios Realizados

### Ejercicio 1: Construir un contenedor mediante mongo con docker-compose

```node
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Contando a MongoDB'))
.catch(err => console.error('error conectando a MongoDB', err));


const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);

app.listen(port, () => console.log(`API corriendo en http://localhost:${port}`));

const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// GET all
router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// POST create
router.post('/', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const saved = await newItem.save();
        res.status(201).json(saved);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// GET by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).end();
            res.json(item);
    } catch {
        res.status(404).end();
    }
});

module.exports = router;

const {Schema, model} = require('mongoose');

const itemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = model('Item', itemSchema);
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Usos de Docker

## Reflexiones Personales

Esta sesión me ayudó a como crear y configurar una imagen con su contenedor de Docker y el uso de docker-compose.

---

*Entregable correspondiente a la Clase 05 del Módulo 4: Kubernetes*