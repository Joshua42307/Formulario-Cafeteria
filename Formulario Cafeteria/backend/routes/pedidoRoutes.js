const express = require('express');
const router = express.Router();
const pedidosControlador = require('../controllers/pedidosControlador');

router.post('/pedido', pedidosControlador.crearPedido);

module.exports = router;