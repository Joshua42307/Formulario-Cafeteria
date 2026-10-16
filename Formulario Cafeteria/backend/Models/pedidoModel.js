const conectar = require('../config/database');

async function registrarPedido(nombre_cliente, correo, telefono, producto, cantidad, tamano_bebida, direccion, ciudad, codigo_postal) {
    const sql = `
    INSERT INTO pedidos (nombre_cliente, correo, telefono, producto, cantidad, tamano_bebida, direccion, ciudad, codigo_postal)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const db = await conectar();
    const [resultado] = await db.execute(sql, [
        nombre_cliente, 
        correo,
        telefono,
        producto, 
        cantidad,
        tamano_bebida,
        direccion,
        ciudad,
        codigo_postal
    ]);
    
    return resultado.insertId;
}

module.exports = {
    registrarPedido
};