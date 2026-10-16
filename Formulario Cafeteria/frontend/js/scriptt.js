document.addEventListener('DOMContentLoaded', () => {
    const parametros = new URLSearchParams(window.location.search);

    const nombre = parametros.get('nombre') || '';
    const correo = parametros.get('correo') || '';
    const telefono = parametros.get('telefono') || '';
    const producto = parametros.get('producto') || '';
    const cantidad = parametros.get('cantidad') || '';
    const tamano = parametros.get('tamano') || '';
    const direccion = parametros.get('direccion') || '';
    const ciudad = parametros.get('ciudad') || '';
    const cp = parametros.get('cp') || '';

    const elNombre = document.getElementById('resumenNombre');
    const elCorreo = document.getElementById('resumenCorreo');
    const elTelefono = document.getElementById('resumenTelefono');
    const elProducto = document.getElementById('resumenProducto');
    const elCantidad = document.getElementById('resumenCantidad');
    const elTamano = document.getElementById('resumenTamano');
    const elDireccion = document.getElementById('resumenDireccion');
    const elCiudad = document.getElementById('resumenCiudad');
    const elCP = document.getElementById('resumenCP');

    if (elNombre) elNombre.textContent = nombre;
    if (elCorreo) elCorreo.textContent = correo;
    if (elTelefono) elTelefono.textContent = telefono;
    if (elProducto) elProducto.textContent = producto;
    if (elCantidad) elCantidad.textContent = cantidad;
    if (elTamano) elTamano.textContent = tamano;
    if (elDireccion) elDireccion.textContent = direccion;
    if (elCiudad) elCiudad.textContent = ciudad;
    if (elCP) elCP.textContent = cp;
});