// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // creacion de array vacio
document.getElementById("amigo").focus(); // cursor se posiciona en caja de texto

//Adiciona amigos a la lista
function agregarAmigo() {                                 // creacion de funcion
    let ul = document.getElementById("listaAmigos");      // crea variable para obener id de ul (lista no ordenada)
    let li = document.createElement("li");                // crea etiqueta li (elementos de la lista)

    // Valida que la caja de texto tenga un nombre

    let txtAmigo = document.getElementById("amigo").value;  // se crea variable para obtener valor de input (caja de texto)

    if (txtAmigo == "") {                                   // validación 
        alert("por favor ingresa un nombre");
    }
    else {

        amigos.push(txtAmigo);                               // agrega amigo a la lista
        limpiarCaja();                                     // se limpia caja de texto
        document.getElementById("amigo").focus();           // cursor se posiciona en caja de texto

        // recorre array

        amigos.forEach(elemento => {
            li.innerHTML = elemento;                       // asigna el contenido (nombre de amigo) al <li> 
            ul.appendChild(li);                            // agrega el <li> a la lista <ul> 

        })

    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = '';
}

function sortearAmigo() {
    let numeroMaximo = amigos.length - 1;
    let numeroAleatorio = Math.floor(Math.random() * (numeroMaximo - 0 + 1) + 0);

    if (amigos.length == 0) {
        alert("ingresa nombre de amigos")
    }
    else {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigos[numeroAleatorio];
    }
}





