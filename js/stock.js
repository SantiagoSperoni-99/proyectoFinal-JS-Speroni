let Articulos = document.createElement('div');

Articulos.className = 'card';
Articulos.innerHTML = `<h1> Bienvenido/a ${userName}.</h1>
<p>Al ser ${userJob} podes acceder a la siguiente lista de artículos:</p>
<table class="articulosTab">
  <tr>
    <th>Código</th>
    <th>Artículo</th>
    <th>Catidad</th>
  </tr>
  <tr>
    <td>12345</td>
    <td>Toalla en rollo</td>
    <td>101</td>
  </tr>
  <tr>
    <td>456789</td>
    <td>Papel higiénico</td>
    <td>67</td>
  </tr>
  <tr>
    <td>789564</td>
    <td>Dispenser de jabón</td>
    <td>58</td>
  </tr>
</table>
`

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
}




































// A PARTIR DE ACÁ SON PRUEBAS CON ALERTS Y PROMPTS


/*let navegacion = prompt('En el navbar se puede elegir:\n 1 - Consultá tu stock.\n 2 - Retiro de mercadería.\n 3 - Ingreso de mercadería. ');


 let stock = 150;
 let opcion = prompt('En el formulario se debe elegir:\n 1 - Artículo.\n 2 - Cantidad a INGRESAR .\n 3 - Apretar (aca escribir) "CARGAR" para continuar. ');

 while (opcion != 'CARGAR') {

     switch (opcion) {
         case '1':
             let articulo = prompt("Ingresár artículo a sumar");
             alert('Tu artículo seleccionado es: ' + articulo);
             break;

         case '2':
             let ingreso = parseInt(prompt("¿Cuánto ingresó?"));
             stock = stock + ingreso;
             alert('Tu stock actualizado es: ' + stock);
             break;

         default:
             alert('Elegiste una opción inválida');
             break;
     }

     opcion = prompt('En el formulario se debe elegir:\n 1 - Artículo.\n 2 - Cantidad a INGRESAR .\n 3 - Apretar (aca escribir) "CARGAR" para continuar. ');
 }

 // uso de arrays para ver los artículos disponibles a seleccionar

 const listaDeArticulos = [];
 listaDeArticulos.push("Papel higiénico", "Toallas intercaladas", "Papel de cocina", "Detergente", "Lavandina");

 let separar = listaDeArticulos.join(' - ');


 alert(separar);

 // FUNCIONES

//ACÁ ES COMO SI CONSULTARAN EL STOCK TOTAL DEL PAPEL

 const papel = [
    {
       nombre: 'Toalla en rollo',
       stock: 100,
    },
    {
        nombre: 'Toalla intercalada',
        stock: 55,
    },
    {
        nombre: 'Papel higienico',
        stock: 130,
    },
    {
        nombre: 'Bobina',
        stock: 40,
    },
]

console.log(papel);


// SE PUEDE FILTRAR SEGUN QUÉ DESEA BUSCAR EL USUARIO:

// SI DESEA BUSCAR PRODUCTOS EN FALTA, DONDE DEFINAN QUE ESTAN EN FALTA A PARTIR DE QUE HAYA MENOS DE, POR EJ, 80 UNIDADES, SE LO PUEDE FILTRAR:

const faltante = papel.filter((articulo)=>articulo.stock<80);
const objeto = faltante.map((articulo)=>articulo.nombre + "= " + articulo.stock)
let filtro = objeto.join(' - ');


alert('OJO !! \n Los siguientes artículos están por debajo del mínimo permitido (80 unidaddes) \n' + filtro);*/