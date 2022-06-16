/* let Clean = document.querySelector('.remover');
let listaArt = document.getElementById('.tablaArt');
let userJob = document.getElementById('.userJob');
let noMostrar = document.getElementById('.userJob').values(3);
const boton = document.getElementById('btnAceptar');


boton.onclick = () => {

    if (userJob === noMostrar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    } else {
        Clean.remove();
    }

}; */

//Clean.remove()

/* const boton = document.getElementById('btnAceptar');

boton.addEventListener('click', () => {
    Swal.fire({
        title: 'Bienvenido/a',
        Text: 'te damos la bienvenida a nuestro sitio',
        icon: 'error',
        confirmButtonText: 'Volver'
    })
}) */

let Clean = document.querySelector('.remover');
const boton = document.getElementById('btnAceptar');

boton.onclick = () => {
    Clean.remove();
}

let listaArt = document.getElementById('.tablaArt');

// EN ESTA PARTE DEL CODIGO LO QUE QUIERO ES QUE AL MOSTRAR LA CARD PARA COMPLETAR NOMBRE Y TRABAJO, AL CLICKEAR ACEPTAR SE BORRE ESTA CARD Y MUESTRE LA LISTA DE PRODUCTOS, PERO UNICAMENTE SI NO ES REPARTIDOR. PROBE DE MIL FORMAS Y NO ME ESTÁ SALIENDO