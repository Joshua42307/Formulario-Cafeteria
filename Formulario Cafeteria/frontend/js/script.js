document.getElementById('pedidoForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    // Capturamos los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const tamano = document.getElementById('tamano').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const cp = document.getElementById('cp').value;

    // Empaquetamos los datos con los nombres exactos que espera el backend
    const datosPedido = {
        nombre: nombre,
        correoElec: correo,
        telefono: telefono,
        productos: producto,
        cantidad: cantidad,
        tamanio: tamano,
        direccion: direccion,
        ciudad: ciudad,
        codigoPostal: cp
    };

    try {
        // Petición POST usando ruta relativa
        const respuesta = await fetch('/api/pedido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosPedido)
        });

        const resultado = await respuesta.json();

        if (respuesta.ok) {
            // Si se guardó con éxito en XAMPP, armamos los parámetros para el resumen
            const params = new URLSearchParams({
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                producto: producto,
                cantidad: cantidad,
                tamano: tamano,
                direccion: direccion,
                ciudad: ciudad,
                cp: cp
            });

            // Redirigimos a la página de resumen
            window.location.href = `resumen.html?${params.toString()}`;
        } else {
            alert("Error al registrar: " + (resultado.error || "Desconocido"));
        }

    } catch (error) {
        console.error("Error en la petición:", error);
        alert("No se pudo conectar con el servidor backend.");
    }
});