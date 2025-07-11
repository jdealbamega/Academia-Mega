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