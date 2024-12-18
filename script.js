function gestionProductos(nombreProducto, accion){
    
    if(accion === 'adicionar'){
        let precio = parseFloat(document.getElementById(`${nombreProducto}-precio`).textContent);
        let cant = parseInt(document.getElementById(`${nombreProducto}-cant`).textContent);
    
        cant++;
        let total = precio * cant;
        
        document.getElementById(`${nombreProducto}-cant`).innerHTML = cant;
        document.getElementById(`${nombreProducto}-total`).innerHTML = total;
    
    }else if(accion === 'descontar'){
        let precio = parseFloat(document.getElementById(`${nombreProducto}-precio`).textContent);
        let cant = parseInt(document.getElementById(`${nombreProducto}-cant`).textContent);

        if(cant > 0){
            cant--;
        }

        let total = precio * cant;
        
        document.getElementById(`${nombreProducto}-cant`).innerHTML = cant;
        document.getElementById(`${nombreProducto}-total`).innerHTML = total;
    
    }

    precioFinal();
}

function precioFinal(){
    const productos = ['hamburguesa', 'pizza', 'huevo', 'queso', 'tocino', 'chocolate', 'manzana', 'cereza', 'pan', 'banano'];
    let suma = 0;
    productos.forEach(producto => {
        suma += parseFloat(document.getElementById(`${producto}-total`).textContent);
    });
    document.getElementById('total').value = suma;
}

function cambio(){
    let totalCompra = parseFloat(document.getElementById('total').value);
    let pagoCliente = parseInt(document.getElementById('pago').value);

    let total = pagoCliente - totalCompra;

    if(pagoCliente < totalCompra){
        alert('Debe de ingresar un valor mayor!');
    }else{
        document.getElementById('cambio').value = total;
    }
}