// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Adiciona amigos a la lista
function agregarAmigo () {
   let txtAmigo = document.getElementById("amigo").value;
   if (txtAmigo == ""){
    alert("por favor ingresa un nombre");
   }
   else {
   amigos.push (txtAmigo); 
   console.log(amigos);
   limpiarCaja();

   }   
}

function limpiarCaja () {
   document.getElementById("amigo").value = '';
}
