// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función para agregar un amigo
function agregarAmigo (){

    //1. Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.ariaValueMax.trim();

    //2. Validar la entrada
    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si la entrada está vacía.
    }

    //3. Actualizar el array de amigos
    amigos.push(nombre);

    //4. Limpiar el campo de entrada
    inputAmigo.value = "";
}
