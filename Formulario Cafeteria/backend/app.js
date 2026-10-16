const express = require('express');
const path = require('path'); // Importante para manejar rutas absolutas
const app = express();

// Middleware para leer JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../frontend'))); 

const pedidoRoutes = require('./routes/pedidoRoutes');
app.use('/api', pedidoRoutes);

app.listen(3000, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});