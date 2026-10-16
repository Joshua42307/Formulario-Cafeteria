const pedidoModel = require('../Models/pedidoModel');

async function crearPedido(req, res) {
    try {
        const { 
            nombre, 
            correoElec, 
            telefono, 
            productos, 
            cantidad, 
            tamanio, 
            direccion, 
            ciudad, 
            codigoPostal 
        } = req.body;

        if (!nombre || !correoElec || !telefono || !productos || !cantidad || !tamanio || !direccion || !ciudad || !codigoPostal) {
            return res.status(400).json({ error: "Faltan campos obligatorios por llenar." });
        }

        const idPedido = await pedidoModel.registrarPedido(
            nombre, 
            correoElec, 
            telefono, 
            productos, 
            cantidad, 
            tamanio, 
            direccion, 
            ciudad, 
            codigoPostal
        );

        res.status(201).json({ 
            mensaje: "Pedido registrado con éxito", 
            id: idPedido 
        });

    } catch (error) {
        console.error("Error al registrar el pedido en el controlador:", error);
        res.status(500).json({ error: "Hubo un error al registrar el pedido en el servidor." });
    }
}

module.exports = {
    crearPedido
};