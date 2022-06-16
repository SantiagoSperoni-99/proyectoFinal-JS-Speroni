let userName = prompt("Ingresá tu nombre");
let userJob = prompt('En la opcion de cago se debe elegir:\n 1 - Gerente.\n 2 - Vendedor.\n 3 - Repartidor.\n ESCRIBIR COMO APARECE EN LAS OPCIONES. ');
const botonAlert = document.getElementById('botonAlert');

/* while (userJob == 'Repartidor') {

    switch (userJob) {
        case 'Vendedor':
            nuevoDiv.appenChild(Articulos);
            break;

        case 'Gerente':
            nuevoDiv.appenChild(Articulos);
            break;

        default:
            alert('Bienvenido ' + userName + '. El cargo ingresado no te permite ver la lista de artículos.');
            break;
    }

    userJob = prompt('En la opcion de cago se debe elegir:\n 1 - Gerente.\n 2 - Vendedor.\n 3 - Repartidor.\n ESCRIBIR COMO APARECE EN LAS OPCIONES. ');
};
 */

botonAlert.addEventListener('click', () => {
    Swal.fire({
        title: 'Bienvenido/a',
        text: 'Gracias por visitarnos, por el momento no se encuentran disponibles las acciones de Ingreso y Egreso de mercadería. Estamos trabajando en ello !',
        icon: 'error',
        confirmButtonText: 'Volver'
    })
})

//ACÁ QUIERO QUE AL TOCAR LOS BOTONES DE SUMAR O RESTAR STOCK SALTE UN MENSAJE CON LA LIBRERÍA sweetalert PERO NO ME APARECE