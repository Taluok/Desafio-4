const socket = io();

// Capturar el envío del formulario
document.getElementById('product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = parseFloat(e.target.price.value);

    // Enviar los datos al servidor a través de WebSocket
    socket.emit('addProduct', { title, description, price });
    e.target.reset(); // Limpiar el formulario
});

// Capturar el evento de eliminación de productos
document.getElementById('product-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-product')) {
        const productId = e.target.getAttribute('data-id');
        // Enviar la solicitud de eliminación al servidor
        socket.emit('deleteProduct', productId);
    }
});