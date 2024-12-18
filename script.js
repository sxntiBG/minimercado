function adicionarProducto(nombreProducto){
    let price = parseFloat(document.getElementById(`${nombreProducto}-price`).textContent);
    let cant = parseInt(document.getElementById(`${nombreProducto}-cant`).textContent);

    cant++;
    let total = price * cant;
    
    document.getElementById(`${nombreProducto}-cant`).innerHTML = cant;
    document.getElementById(`${nombreProducto}-total`).innerHTML = total;

    precioFinal(total);
}

function precioFinal(total){
    let valorTotal = parseFloat(document.getElementById('total').value) || 0;
    document.getElementById('total').value = valorTotal + total;
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