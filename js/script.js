let userName = prompt("Ingresá tu nombre");
let userJob = prompt('En la opcion de cago se debe elegir:\n 1 - Gerente.\n 2 - Vendedor.\n 3 - Repartidor.\n ESCRIBIR COMO APARECE EN LAS OPCIONES. ');


while (userJob == 'Repartidor') {

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